from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# from sqlalchemy.ext.declarative import

# Create a connection to the database
URL_DATABASE = 'sqlite:///./movies.db'

# Create another connection to the characters database
URL_DATABASE_CHARACTERS = 'sqlite:///./characters.db'

# initialize a new engine that will interface with the database specified by URL_DATABASE
# connect_args={'check_same_thread': False} argument is used to allow connections from multiple threads
engine_movies = create_engine(URL_DATABASE, connect_args={'check_same_thread': False})

# initialize a new engine that will interface with the database specified by URL_DATABASE_CHARACTERS
engine_characters = create_engine(URL_DATABASE_CHARACTERS, connect_args={'check_same_thread': False})

# Create a session to interact with the database
SessionLocalMovies = sessionmaker(bind=engine_movies, autocommit=False, autoflush=False)

# Create a session to interact with the characters database
SessionLocalCharacters = sessionmaker(bind=engine_characters, autocommit=False, autoflush=False)

# Create a base class for our classes
Base_movies = declarative_base()

# Create a base class for our characters
Base_characters = declarative_base()
