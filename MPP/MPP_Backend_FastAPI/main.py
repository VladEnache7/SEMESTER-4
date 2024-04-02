import uvicorn
from fastapi import FastAPI, HTTPException, Depends
from typing import List, Annotated
from sqlalchemy.orm import Session

import models
from database import SessionLocal, engine
from pydantic import BaseModel
from models import Movie
from fastapi.middleware.cors import CORSMiddleware
from MoviesRepository import MoviesRepo
from schemas import MovieBase, MovieModel

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
async def get_movies(skip: int = 0, limit: int = 25):
    return MoviesRepoInstance.get_movies_skip_limit(skip, limit)


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
    return {'message': 'Movie deleted successfully'}


# <todo> CREATE more new movies at the same time in the database
# a POST route that creates multiple movies in the database at the same time.
# It uses the List[MovieBase] model to validate the request body and the List[MovieModel] model to shape the response data.
@app.post('/movies/bulk/', response_model=List[MovieModel])
async def add_bulk_movies(movies: List[MovieBase], db: db_dependency):
    # db_movies = [models.Movie(**movie.dict()) for movie in movies]
    # db.add_all(db_movies)
    # db.commit()
    return MoviesRepoInstance.add_movies(movies)


if __name__ == '__main__':
    # for Debugging purposes
    uvicorn.run(app, host="127.0.0.1", port=8001)

    pass
