import time

import uvicorn
from fastapi import FastAPI, HTTPException, Depends, BackgroundTasks, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse
from typing import List, Annotated
from sqlalchemy.orm import Session

import models
from database import SessionLocalMovies, engine_movies, SessionLocalCharacters, engine_characters
from pydantic import BaseModel
from models import Movie
from fastapi.middleware.cors import CORSMiddleware
from MoviesRepository import MoviesRepo
from schemas import MovieBase, MovieModel, CharacterModel, CharacterBase

from fastapi.encoders import jsonable_encoder

# Create a new FastAPI instance
app = FastAPI()

# Add CORS middleware to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


def get_database_movies():
    db = SessionLocalMovies()
    try:
        yield db
    finally:
        db.close()


def get_database_characters():
    db = SessionLocalCharacters()
    try:
        yield db
    finally:
        db.close()


active_connections: List[WebSocket] = []

db_dependency_movies = Annotated[models.Movie, Depends(get_database_movies)]
db_dependency_characters = Annotated[models.Character, Depends(get_database_characters)]

models.Base_movies.metadata.create_all(bind=engine_movies)
models.Base_characters.metadata.create_all(bind=engine_characters)


@app.get("/", response_class=HTMLResponse)
async def read_item():
    return """
    <html>
        <head>
            <title>FastAPI WebSocket</title>
        </head>
        <body>
            <h1>WebSocket Server</h1>
            <p>WebSocket server is running successfully</p>
        </body>
    </html>
    """


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    print("New client trying to connect")
    await websocket.accept()
    print("Client accepted")
    active_connections.append(websocket)
    print(f"Active connections: {len(active_connections)}")

    try:
        while True:
            data = await websocket.receive_text()
            print(f"Data received by client: {data}")
            await websocket.send_text(f"Message text was: {data}")
    except WebSocketDisconnect:
        active_connections.remove(websocket)


async def notify_clients(db: db_dependency_movies):
    for connection in active_connections:
        movies = MoviesRepo().get_all_movies(db)
        # transform the movies to JSON use this MovieModel.from_orm(movie) for each movie
        await connection.send_json(jsonable_encoder(movies))
        print(f"Notified {len(active_connections)} clients")


# <todo> GET ALL movies from the database
@app.get('/movies', response_model=List[MovieModel])
async def get_movies(db: db_dependency_movies, skip: int = 0, limit: int = 200):
    #  get_movies is a GET route that retrieves a list of movies from the database.
    #  It uses the MovieModel model to shape the response data.
    movies = MoviesRepo().get_movies_skip_limit(db, skip, limit)
    return movies


# <todo> GET a single movie from the database
@app.get('/movies/{movie_id}', response_model=MovieModel)
async def get_movie(db: db_dependency_movies, movie_id: int):
    movie = MoviesRepo().get_movie(db, movie_id)
    if movie is None:
        raise HTTPException(status_code=404, detail='Movie not found')
    return movie


# <todo> CREATE a new movie in the database
@app.post('/movies', response_model=MovieModel)
async def add_movie(db: db_dependency_movies, movie: MovieBase):
    # a POST route that creates a new movie in the database.
    # It uses the MovieBase model to validate the request body and the MovieModel model to shape the response data.
    added_movie = MoviesRepo().add_movie(db, movie)
    await notify_clients(db)
    return added_movie


# <todo> UPDATE a movie in the database
@app.put('/movies/{movie_id}', response_model=MovieModel)
async def update_movie(db: db_dependency_movies, movie_id: int, movie: MovieBase):
    # a PUT route that updates a movie in the database by its id.
    # It uses the MovieBase model to validate the request body and the MovieModel model to shape the response data.
    updated_movie = MoviesRepo().update_movie(db, movie_id, movie)
    await notify_clients(db)
    return updated_movie


# <todo> DELETE a movie from the database
@app.delete('/movies/{movie_id}')
async def delete_movie(db: db_dependency_movies, movie_id: int):
    # a DELETE route that deletes a movie from the database by its id.
    MoviesRepo().delete_movie(db, movie_id)
    await notify_clients(db)
    return {'message': 'Movie deleted successfully'}


# <todo> DELETE a bulk of movies from the database
@app.delete('/movies/bulk/{movie_id_start}/{start_id}/{end_id}')
async def delete_bulk_movies(db: db_dependency_movies, start_id: int, end_id: int):
    # a DELETE route that deletes multiple movies from the database by their ids.
    # MoviesRepo().delete_movies(db, movie_ids)
    deleted_movies = []
    not_found_movies = []
    for movie_id in range(start_id, end_id):
        try:
            MoviesRepo().delete_movie(db, movie_id)
            deleted_movies.append(movie_id)
        except Exception as e:
            not_found_movies.append(movie_id)

    await notify_clients(db)
    return {'deleted': deleted_movies, 'not_found': not_found_movies}


# <todo> ADD a bulk of new movies at the same time in the database
@app.post('/movies/bulk/', response_model=List[MovieModel])
async def add_bulk_movies(db: db_dependency_movies, movies: List[MovieBase]):
    # a POST route that creates multiple movies in the database at the same time.
    # It uses the List[MovieBase] model to validate the request body and the List[MovieModel] model to shape the response data.
    await notify_clients(db)
    return MoviesRepo().add_movies(db, movies)


# <todo> DELETE the duplicates from the database
@app.delete('/movies/delete_duplicates/')
async def delete_duplicates(db: db_dependency_movies):
    # a DELETE route that deletes all the duplicate movies from the database.
    deleted_movies = MoviesRepo().delete_duplicates(db)
    await notify_clients(db)
    return {'deleted_movies': deleted_movies}


generation_count = 0


async def generate_and_add_movies_periodically(db: db_dependency_movies, count):
    global generation_count
    MoviesRepo().generate_and_add_movies(db, count)
    await notify_clients(db)
    print("Notified clients - main")
    generation_count += 1
    if generation_count < 5:
        # wait for 1 second before generating the next set of movies
        time.sleep(1)
        await generate_and_add_movies_periodically(count)
        # threading.Timer(1, generate_and_add_movies_periodically, args=[count]).start()
        print(f"Generating {generation_count} time movies in background every 1 second")


# <todo> GENERATE n number of movies in the database periodically
@app.post('/movies/generate/{number}', response_model=dict)
async def generate_movies(db: db_dependency_movies, number: int, background_tasks: BackgroundTasks):
    # a POST route that generates a specified number of random movies in the database.
    # It uses the number parameter to determine the number of movies to generate.
    global generation_count
    generation_count = 0
    # TODO: maybe here it will be an error with sending both parameters
    background_tasks.add_task(generate_and_add_movies_periodically, db, number)
    return {'message': f'Generating {number} movies in background every 1 seconds'}


# @app.post('/movies/generate_once/{number}', response_model=List[dict])
# async def generate_movies_once(number: int):
#     added_movies = MoviesRepo().generate_and_add_movies(number)
#     await notify_clients()
#     return added_movies

# <todo> GET ALL characters from the database
@app.get('/characters', response_model=List[CharacterModel])
async def get_characters(db: db_dependency_characters, skip: int = 0, limit: int = 200):
    # a GET route that retrieves a list of characters from the database.
    # It uses the CharacterModel model to shape the response data.
    characters = MoviesRepo().get_characters_skip_limit(db, skip, limit)
    return characters


# <todo> GET a single character from the database
@app.get('/characters/{character_id}', response_model=CharacterModel)
async def get_character(db: db_dependency_characters, character_id: int):
    # a GET route that retrieves a character from the database by its id.
    character = MoviesRepo().get_character(db, character_id)
    if character is None:
        raise HTTPException(status_code=404, detail='Character not found')
    return character


# <todo> CREATE a new character in the database
@app.post('/characters', response_model=CharacterModel)
async def add_character(db: db_dependency_characters, character: CharacterBase):
    # a POST route that creates a new character in the database.
    # It uses the CharacterModel model to validate the request body and shape the response data.
    return MoviesRepo().add_character(db, character)


# <todo> UPDATE a character in the database
@app.put('/characters/{character_id}', response_model=CharacterModel)
async def update_character(db: db_dependency_characters, character_id: int, character: CharacterBase):
    # a PUT route that updates a character in the database by its id.
    # It uses the CharacterModel model to validate the request body and shape the response data.
    return MoviesRepo().update_character(db, character_id, character)


# <todo> DELETE a character from the database
@app.delete('/characters/{character_id}')
async def delete_character(db: db_dependency_characters, character_id: int):
    # a DELETE route that deletes a character from the database by its id.
    MoviesRepo().delete_character(db, character_id)
    return {'message': 'Character deleted successfully'}


# delete all the characters that are between 2 ids
@app.delete('/characters/bulk/{start_id}/{end_id}')
async def delete_bulk_characters(db: db_dependency_characters, start_id: int, end_id: int):
    # a DELETE route that deletes multiple characters from the database by their ids.
    # MoviesRepo().delete_characters(db, character_ids)
    deleted_characters = []
    not_found_characters = []
    for character_id in range(start_id, end_id):
        try:
            MoviesRepo().delete_character(db, character_id)
            deleted_characters.append(character_id)
        except Exception as e:
            not_found_characters.append(character_id)

    return {'deleted': deleted_characters, 'not_found': not_found_characters}


# <todo> ADD a bulk of new characters at the same time in the database
@app.post('/characters/bulk/', response_model=List[CharacterModel])
async def add_bulk_characters(db: db_dependency_characters, characters: List[CharacterBase]):
    # a POST route that creates multiple characters in the database at the same time.
    # It uses the List[CharacterBase] model to validate the request body and the List[CharacterModel] model to shape the response data.
    return MoviesRepo().add_characters(db, characters)


if __name__ == '__main__':
    # for Debugging purposes
    uvicorn.run(app, host="127.0.0.1", port=8002)
    pass
