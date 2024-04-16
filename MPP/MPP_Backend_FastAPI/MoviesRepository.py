import random
from datetime import datetime
from typing import Annotated, List

from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session

import models
from database import SessionLocal, engine
from schemas import MovieBase, MovieModel
import threading


def get_database():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency_movies = Annotated[models.Movie, Depends(get_database)]
db_dependency_characters = Annotated[models.Character, Depends(get_database)]


class MoviesRepo:
    def __init__(self):
        # self.movies = [
        #     {
        #         "id": 1,
        #         "name": "Cars",
        #         "year": 2006,
        #         "duration": "1h 57m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line"
        #     },
        #     {
        #         "id": 2,
        #         "name": "Toy Story",
        #         "year": 1995,
        #         "duration": "1h 21m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences"
        #     },
        #     {
        #         "id": 3,
        #         "name": "Finding Nemo",
        #         "year": 2003,
        #         "duration": "1h 40m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home"
        #     },
        #     {
        #         "id": 4,
        #         "name": "The Incredibles",
        #         "year": 2004,
        #         "duration": "1h 55m",
        #         "genre": "Animation, Action, Adventure",
        #         "description": "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world"
        #     },
        #     {
        #         "id": 5,
        #         "name": "Ratatouille",
        #         "year": 2007,
        #         "duration": "1h 51m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant"
        #     },
        #     {
        #         "id": 6,
        #         "name": "Up",
        #         "year": 2009,
        #         "duration": "1h 36m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway"
        #     },
        #     {
        #         "id": 7,
        #         "name": "Inside Out",
        #         "year": 2015,
        #         "duration": "1h 35m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school"
        #     },
        #     {
        #         "id": 8,
        #         "name": "Coco",
        #         "year": 2017,
        #         "duration": "1h 45m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer"
        #     },
        #     {
        #         "id": 9,
        #         "name": "Soul",
        #         "year": 2020,
        #         "duration": "1h 40m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife"
        #     },
        #     {
        #         "id": 10,
        #         "name": "Luca",
        #         "year": 2021,
        #         "duration": "1h 35m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human"
        #     },
        #     {
        #         "id": 11,
        #         "name": "The Lion King",
        #         "year": 1994,
        #         "duration": "1h 28m",
        #         "genre": "Animation, Adventure, Drama",
        #         "description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself"
        #     },
        #     {
        #         "id": 12,
        #         "name": "The Little Mermaid",
        #         "year": 1989,
        #         "duration": "1h 23m",
        #         "genre": "Animation, Family, Fantasy",
        #         "description": "A mermaid princess makes a Faustian bargain in an attempt to become human and win a prince`s love"
        #     },
        #     {
        #         "id": 13,
        #         "name": "Beauty and the Beast",
        #         "year": 1991,
        #         "duration": "1h 24m",
        #         "genre": "Animation, Family, Fantasy",
        #         "description": "A prince cursed to spend his days as a hideous monster sets out to regain his humanity by earning a young woman`s love"
        #     },
        #     {
        #         "id": 14,
        #         "name": "Aladdin",
        #         "year": 1992,
        #         "duration": "1h 30m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "When a street urchin vies for the love of a beautiful princess, he uses a genie`s magic power to make himself off as a prince in order to marry her"
        #     },
        #     {
        #         "id": 15,
        #         "name": "Pocahontas",
        #         "year": 1995,
        #         "duration": "1h 21m",
        #         "genre": "Animation, Adventure, Drama",
        #         "description": "An English soldier and the daughter of an Algonquin chief share a romance when English colonists invade 17th century Virginia"
        #     },
        #     {
        #         "id": 16,
        #         "name": "Mulan",
        #         "year": 1998,
        #         "duration": "1h 28m",
        #         "genre": "Animation, Adventure, Family",
        #         "description": "To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China`s greatest heroines in the process"
        #     },
        #     {
        #         "id": 17,
        #         "name": "The Princess and the Frog",
        #         "year": 2009,
        #         "duration": "1h 37m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to face the same problem after she kisses him"
        #     },
        #     {
        #         "id": 18,
        #         "name": "Tangled",
        #         "year": 2010,
        #         "duration": "1h 40m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is"
        #     },
        #     {
        #         "id": 19,
        #         "name": "Frozen",
        #         "year": 2013,
        #         "duration": "1h 42m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain "
        #     },
        #     {
        #         "id": 20,
        #         "name": "Moana",
        #         "year": 2016,
        #         "duration": "1h 47m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana`s island, she answers the Ocean`s call to seek out the Demigod to set things right"
        #     },
        #     {
        #         "id": 21,
        #         "name": "Brave",
        #         "year": 2012,
        #         "duration": "1h 33m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse"
        #     },
        #     {
        #         "id": 22,
        #         "name": "Cinderella",
        #         "year": 1950,
        #         "duration": "1h 14m",
        #         "genre": "Animation, Family, Fantasy",
        #         "description": "When Cinderella`s cruel stepmother prevents her from attending the Royal Ball, she gets some unexpected help from the lovable mice Gus and Jaq, and from"
        #     },
        #     {
        #         "id": 23,
        #         "name": "Sleeping Beauty",
        #         "year": 1959,
        #         "duration": "1h 15m",
        #         "genre": "Animation, Family, Fantasy",
        #         "description": "After being snubbed by the royal family, a malevolent fairy places a curse on a princess which only a prince can break, along with the help of three good fairies"
        #     },
        #     {
        #         "id": 24,
        #         "name": "The Jungle Book",
        #         "year": 1967,
        #         "duration": "1h 18m",
        #         "genre": "Animation, Adventure, Family",
        #         "description": "Bagheera the Panther and Baloo the Bear have a difficult time trying to convince "
        #     },
        #     {
        #         "id": 25,
        #         "name": "101 Dalmatians",
        #         "year": 1961,
        #         "duration": "1h 19m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "When a litter of Dalmatian puppies are abducted by the minions of Cruella de Vil, the parents must find them before she uses them for a diabolical fashion statement"
        #     },
        #     {
        #         "id": 26,
        #         "name": "Bambi",
        #         "year": 1942,
        #         "duration": "1h 10m",
        #         "genre": "Animation, Drama, Family",
        #         "description": "The story of a young deer growing up in the forest"
        #     },
        #     {
        #         "id": 27,
        #         "name": "Dumbo",
        #         "year": 1941,
        #         "duration": "1h 4m",
        #         "genre": "Animation, Drama, Family",
        #         "description": "Ridiculed because of his enormous ears, a young circus elephant is assisted by a mouse to achieve his full potential"
        #     },
        #     {
        #         "id": 28,
        #         "name": "Peter Pan",
        #         "year": 1953,
        #         "duration": "1h 17m",
        #         "genre": "Animation, Adventure, Family",
        #         "description": "The Darling family children receive a visit from Peter Pan, who takes them to Never Never Land where an ongoing war with the evil Pirate Captain Hook is taking place"
        #     },
        #     {
        #         "id": 29,
        #         "name": "Lady and the Tramp",
        #         "year": 1955,
        #         "duration": "1h 16m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "The romantic tale of a sheltered uptown Cocker Spaniel dog and a streetwise downtown Mutt"
        #     },
        #     {
        #         "id": 30,
        #         "name": "The Aristocats",
        #         "year": 1970,
        #         "duration": "1h 18m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "With the help of a smooth talking tomcat, a family of Parisian felines set to inherit a fortune from their owner try to make it back home after a jealous butler kidnaps them and leaves them in the country"
        #     },
        #     {
        #         "id": 31,
        #         "name": "Robin Hood",
        #         "year": 1973,
        #         "duration": "1h 23m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "The story of the legendary outlaw is portrayed with the characters as humanoid animals"
        #     },
        #     {
        #         "id": 32,
        #         "name": "The Rescuers",
        #         "year": 1977,
        #         "duration": "1h 18m",
        #         "genre": "Animation, Adventure, Crime",
        #         "description": "Two mice of the Rescue Aid Society search for a little girl kidnapped by unscrupulous treasure hunters"
        #     },
        #     {
        #         "id": 33,
        #         "name": "The Fox and the Hound",
        #         "year": 1981,
        #         "duration": "1h 23m",
        #         "genre": "Animation, Adventure, Drama",
        #         "description": "Two childhood friends find themselves forced to become enemies"
        #     },
        #     {
        #         "id": 34,
        #         "name": "The Great Mouse Detective",
        #         "year": 1986,
        #         "duration": "1h 14m",
        #         "genre": "Animation, Adventure, Family",
        #         "description": "Basil, the rodent Sherlock Holmes, investigates the kidnapping of a toy-maker and uncovers its link to his arch-enemy, Professor Ratigan"
        #     },
        #     {
        #         "id": 35,
        #         "name": "Oliver & Company",
        #         "year": 1988,
        #         "duration": "1h 14m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "A lost and alone kitten joins a gang of dogs engaged in petty larceny in New York City"
        #     },
        #     {
        #         "id": 36,
        #         "name": "The Sword in the Stone",
        #         "year": 1963,
        #         "duration": "1h 19m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "A poor boy named Arthur learns the power of love, kindness, knowledge and bravery with the help of a wizard called Merlin in the path to become one of the most beloved kings in English history"
        #     },
        #     {
        #         "id": 37,
        #         "name": "The Black Cauldron",
        #         "year": 1985,
        #         "duration": "1h 20m",
        #         "genre": "Animation, Action, Adventure",
        #         "description": "A young boy and a bunch of misfit friends embark on a quest to find a dark magic item of ultimate power before a diabolical tyrant can"
        #     },
        #     {
        #         "id": 38,
        #         "name": "The Hunchback of Notre Dame",
        #         "year": 1996,
        #         "duration": "1h 31m",
        #         "genre": "Animation, Drama, Family",
        #         "description": "A deformed bell-ringer must assert his independence from a vicious government minister in order to help his friend, a gypsy dancer"
        #     },
        #     {
        #         "id": 39,
        #         "name": "Hercules",
        #         "year": 1997,
        #         "duration": "1h 33m",
        #         "genre": "Animation, Adventure, Comedy",
        #         "description": "The son of Zeus and Hera is stripped of his immortality as an infant and must become a true hero in order to reclaim it"
        #     },
        #     {
        #         "id": 40,
        #         "name": "Tarzan",
        #         "year": 1999,
        #         "duration": "1h 28m",
        #         "genre": "Animation, Adventure, Family",
        #         "description": "A man raised by gorillas must decide where he really belongs when he discovers he is a human"
        #     }
        # ]
        # self.highest_id = self.movies[-1]['id']

        get_database()
        # # TODO: Annotated[Session, Depends(get_database)]
        # self.db_dependency_movies = Annotated[models.Movie, Depends(get_database)]
        # self.db_dependency_characters = Annotated[models.Character, Depends(get_database)]

        # the database is going to create our table and columns automatically when this fastAPI application is created
        models.Base.metadata.create_all(bind=engine)

    # This function is used to create a new database session and close it once the request is finished.

    def get_all_movies(self, db: db_dependency_movies):
        movies = db.query(models.Movie).all()
        return movies

    def get_movies_skip_limit(self, db: db_dependency_movies, skip: int, limit: int):
        # TODO Expected type 'Session', got 'Type[Movie]' instead
        movies = db.query(models.Movie).offset(skip).limit(limit).all()
        return movies

    def get_movie(self, db: db_dependency_movies, movie_id: int):
        movie = db.query(models.Movie).filter(models.Movie.id == movie_id).first()
        if movie is None:
            raise HTTPException(status_code=404, detail='Movie not found')
        return movie

    def add_movie(self, db: db_dependency_movies, movie: MovieBase):
        new_db_movie = models.Movie(**movie.dict())
        self.db_dependency_movies.add(new_db_movie)
        self.db_dependency_movies.commit()
        self.db_dependency_movies.refresh(new_db_movie)
        return movie.dict()

    def add_movies(self, db: db_dependency_movies, movies: List[MovieBase]):
        db = self.db_dependency_movies
        db_movies = [models.Movie(**movie.dict()) for movie in movies]
        db.add_all(db_movies)
        db.commit()
        return [movie.dict() for movie in db_movies]

    def update_movie(self, db: db_dependency_movies, movie_id: int, movie: MovieBase):
        db = self.db_dependency_movies
        db_movie = db.query(models.Movie).filter(models.Movie.id == movie_id).first()
        if db_movie is None:
            raise HTTPException(status_code=404, detail='Movie not found')
        for key, value in movie.dict().items():
            setattr(db_movie, key, value)
        db.commit()
        db.refresh(db_movie)
        return movie.dict()

    def delete_movie(self, db: db_dependency_movies, movie_id):
        db = self.db_dependency_movies
        db_movie = db.query(models.Movie).filter(models.Movie.id == movie_id).first()
        if db_movie is None:
            raise HTTPException(status_code=404, detail='Movie not found')
        db.delete(db_movie)
        db.commit()

    def generate_and_add_movies(self, db: db_dependency_movies, count):
        """
        Generate and add movies to the movies list
        :param count: Number of movies to generate
        :return: List of generated movies
        """

        # get the names of movies from the movies list and add a number to the end of each name
        movie_names = [movie['name'] for movie in self.movies]
        movies = []
        for i in range(2, count + 2):
            # generate a random movie name ensuring that the name is unique
            while True:
                new_movie_name = random.choice(movie_names)
                # if the new_movie_name does not have a number at the end, add 2 at the end
                if not new_movie_name[-1].isdigit():
                    new_movie_name += " 2"
                else:
                    # if the new_movie_name has a number at the end, increment the number by 1
                    new_movie_name = new_movie_name[:-1] + str(int(new_movie_name[-1]) + 1)

                if new_movie_name not in [movie['name'] for movie in self.movies]:
                    break

            movie = MovieBase(name=new_movie_name,
                              year=random.randint(1950, 2022),
                              duration=f"{random.randint(1, 3)}h {random.randint(0, 59)}m",
                              genre=random.choice(
                                  ["Animation", "Adventure", "Comedy", "Action", "Drama", "Family", "Fantasy"]),
                              description=f"Generated Description for movie {new_movie_name} at {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}")

            self.add_movie(movie)
            movies.append(movie)
        return movies


if __name__ == '__main__':
    print(MoviesRepo().get_all_movies())
