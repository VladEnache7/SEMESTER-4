from database import Base
from sqlalchemy import Column, Integer, String


# Create a class that will be used to create a table in the database
class Movie(Base):
    __tablename__ = 'movies'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    year = Column(Integer)
    duration = Column(String)
    genre = Column(String)
    description = Column(Integer)

    # def __repr__(self):
    #     return f"<Movie(title={self.title}, director={self.director}, year={self.year}, genre={self.genre}, rating={self.rating})>"
