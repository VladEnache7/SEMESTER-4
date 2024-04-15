import time

import uvicorn
from fastapi import FastAPI, HTTPException, Depends, BackgroundTasks, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse
from typing import List, Annotated
from sqlalchemy.orm import Session

import models
from database import SessionLocal, engine
from pydantic import BaseModel
from models import Movie
from fastapi.middleware.cors import CORSMiddleware
from MoviesRepository import MoviesRepo
from schemas import MovieBase, MovieModel
import threading

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


# This function is used to create a new database session and close it once the request is finished.
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


MoviesRepoInstance = MoviesRepo()

active_connections: List[WebSocket] = []


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


async def notify_clients():
    for connection in active_connections:
        # print the last 5 movies
        # print(MoviesRepoInstance.get_movies()[-5:])
        message = {"message": "New movies added"}
        await connection.send_json(MoviesRepoInstance.get_movies())
        print(f"Notified {len(active_connections)} clients")


db_dependency = Annotated[Session, Depends(get_db)]

# the database is going to create our table and columns automatically when this fastAPI application is created
models.Base.metadata.create_all(bind=engine)


# <todo> GET ALL movies from the database
#  read_movies is a GET route that retrieves a list of movies from the database. It uses the MovieModel model to shape the response data.
# @app.get('/movies', response_model=List[MovieModel])
# async def get_movies(db: db_dependency, skip: int = 0, limit: int = 25):
#     movies = db.query(models.Movie).offset(skip).limit(limit).all()
#     return movies

@app.get('/movies')
async def get_movies(skip: int = 0, limit: int = 100):
    returnedList = MoviesRepoInstance.get_movies_skip_limit(skip, limit)
    print(f"Get Movies Len: {len(returnedList)}")
    return returnedList


# <todo> CREATE a new movie in the database
# a POST route that creates a new movie in the database.
# It uses the MovieBase model to validate the request body and the MovieModel model to shape the response data.
# @app.post('/movies', response_model=MovieModel)
# async def add_movie(movie: MovieBase, db: db_dependency):
#     db_movie = models.Movie(**movie.dict())
#     db.add(db_movie)
#     db.commit()
#     db.refresh(db_movie)
#     return db_movie


@app.post('/movies', response_model=MovieModel)
async def add_movie(movie: MovieBase):
    await notify_clients()
    return MoviesRepoInstance.add_movie(movie)


# <todo> GET a single movie from the database
# a GET route that retrieves a single movie from the database by its id.
# It uses the MovieModel model to shape the response data.
@app.get('/movies/{movie_id}', response_model=MovieModel)
async def get_movie(movie_id: int, db: db_dependency):
    # movie = db.query(models.Movie).filter(models.Movie.id == movie_id).first()
    movie = MoviesRepoInstance.get_movie(movie_id)
    if movie is None:
        raise HTTPException(status_code=404, detail='Movie not found')
    return movie


# <todo> UPDATE a movie in the database
# a PUT route that updates a movie in the database by its id.
# It uses the MovieBase model to validate the request body and the MovieModel model to shape the response data.
@app.put('/movies/{movie_id}', response_model=MovieModel)
async def update_movie(movie_id: int, movie: MovieBase, db: db_dependency):
    # db_movie = db.query(models.Movie).filter(models.Movie.id == movie_id).first()
    # if db_movie is None:
    #     raise HTTPException(status_code=404, detail='Movie not found')
    # for key, value in movie.dict().items():
    #     setattr(db_movie, key, value)
    # db.commit()
    # db.refresh(db_movie)
    movie = MoviesRepoInstance.update_movie(movie_id, movie)
    if movie is None:
        raise HTTPException(status_code=404, detail='Movie not found')
    await notify_clients()
    return movie


# <todo> DELETE a movie from the database
# a DELETE route that deletes a movie from the database by its id.
@app.delete('/movies/{movie_id}')
async def delete_movie(movie_id: int, db: db_dependency):
    # db_movie = db.query(models.Movie).filter(models.Movie.id == movie_id).first()
    # if db_movie is None:
    #     raise HTTPException(status_code=404, detail='Movie not found')
    # db.delete(db_movie)
    # db.commit()
    movie = MoviesRepoInstance.delete_movie(movie_id)
    if movie is None:
        raise HTTPException(status_code=404, detail='Movie not found')
    await notify_clients()
    return {'message': 'Movie deleted successfully'}


# <todo> CREATE more new movies at the same time in the database
# a POST route that creates multiple movies in the database at the same time.
# It uses the List[MovieBase] model to validate the request body and the List[MovieModel] model to shape the response data.
@app.post('/movies/bulk/', response_model=List[MovieModel])
async def add_bulk_movies(movies: List[MovieBase], db: db_dependency):
    # db_movies = [models.Movie(**movie.dict()) for movie in movies]
    # db.add_all(db_movies)
    # db.commit()
    await notify_clients()
    return MoviesRepoInstance.add_movies(movies)


generation_count = 0


async def generate_and_add_movies_periodically(count):
    global generation_count
    MoviesRepoInstance.generate_and_add_movies(count)
    await notify_clients()
    print("Notified clients - main")
    generation_count += 1
    if generation_count < 100:
        # wait for 1 second before generating the next set of movies
        time.sleep(1)
        await generate_and_add_movies_periodically(count)
        # threading.Timer(1, generate_and_add_movies_periodically, args=[count]).start()
        print(f"Generating {generation_count} time movies in background every 1 second")


# <todo> GENERATE n number of movies in the database periodically
# a POST route that generates a specified number of random movies in the database.
# It uses the number parameter to determine the number of movies to generate.
@app.post('/movies/generate/{number}', response_model=dict)
async def generate_movies(number: int, db: db_dependency, background_tasks: BackgroundTasks):
    global generation_count
    # movies = generate_random_movies(number)
    # db_movies = [models.Movie(**movie.dict()) for movie in movies]
    # db.add_all(db_movies)
    # db.commit()
    # added_movies = MoviesRepoInstance.generate_and_add_movies(number)
    # added_movies = MoviesRepoInstance.add_movies(movies)
    generation_count = 0
    background_tasks.add_task(generate_and_add_movies_periodically, number)
    return {'message': f'Generating {number} movies in background every 2 seconds'}


@app.post('/movies/generate_once/{number}', response_model=List[dict])
async def generate_movies_once(number: int, db: db_dependency):
    added_movies = MoviesRepoInstance.generate_and_add_movies(number)
    await notify_clients()
    return added_movies


if __name__ == '__main__':
    # for Debugging purposes
    uvicorn.run(app, host="127.0.0.1", port=8001)
    pass
