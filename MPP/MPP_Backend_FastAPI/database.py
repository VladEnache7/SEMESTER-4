from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# from sqlalchemy.ext.declarative import

# Create a connection to the database
URL_DATABASE = 'sqlite:///./entities.db'

# initialize a new engine that will interface with the database specified by URL_DATABASE
engine_movies = create_engine(URL_DATABASE, connect_args={'check_same_thread': False})

# Create a session to interact with the database
SessionLocalMovies = sessionmaker(bind=engine_movies, autocommit=False, autoflush=False)

# Create a base class for our classes
Base_database = declarative_base()
