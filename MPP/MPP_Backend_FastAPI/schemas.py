from pydantic import BaseModel


# The code then defines two Pydantic models, MovieBase and MovieModel:
# Create a class that will be used to create a table in the database
class MovieBase(BaseModel):
    name: str
    year: int
    duration: str
    genre: str
    description: str


class MovieModel(MovieBase):
    id: int

    class Config:
        orm_mode = True
