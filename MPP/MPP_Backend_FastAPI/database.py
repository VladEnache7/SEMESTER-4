from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# Create a connection to the database
URL_DATABASE = 'sqlite:///./movies.db'

# initialize a new engine that will interface with the database specified by URL_DATABASE
# connect_args={'check_same_thread': False} argument is used to allow connections from multiple threads
engine = create_engine(URL_DATABASE, connect_args={'check_same_thread': False})

# Create a session to interact with the database
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)

# Create a base class for our classes
Base = declarative_base()
