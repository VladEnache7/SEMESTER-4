from database import Base
from sqlalchemy import Column, Integer, String, ForeignKey


# Create a class that will be used to create a table in the database
class Movie(Base):
    __tablename__ = 'movies'

    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True, index=True)
    year = Column(Integer)
    duration = Column(String)
    genre = Column(String)
    description = Column(Integer)


class Character(Base):
    __tablename__ = 'characters'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    movie_name = Column(String)
    description = Column(String)
