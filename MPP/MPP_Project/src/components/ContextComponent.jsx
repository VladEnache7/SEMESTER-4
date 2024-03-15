import React, { createContext, useState } from 'react';

const initialMovies = [
  {
    id: 1,
    name: 'Cars',
    year: 2006,
    duration: '1h 57m',
    genre: 'Animation, Adventure, Comedy',
    description:
      'Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line',
  },
  {
    id: 2,
    name: 'Toy Story',
    year: 1995,
    duration: '1h 21m',
    genre: 'Animation, Adventure, Comedy',
    description:
      "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences",
  },
  {
    id: 3,
    name: 'Finding Nemo',
    year: 2003,
    duration: '1h 40m',
    genre: 'Animation, Adventure, Comedy',
    description:
      'After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home',
  },
  {
    id: 4,
    name: 'The Incredibles',
    year: 2004,
    duration: '1h 55m',
    genre: 'Animation, Action, Adventure',
    description:
      'A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world',
  },
  {
    id: 5,
    name: 'Ratatouille',
    year: 2007,
    duration: '1h 51m',
    genre: 'Animation, Adventure, Comedy',
    description:
      'A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant',
  },
  {
    id: 6,
    name: 'Up',
    year: 2009,
    duration: '1h 36m',
    genre: 'Animation, Adventure, Comedy',
    description:
      '78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway',
  },
  {
    id: 7,
    name: 'Inside Out',
    year: 2015,
    duration: '1h 35m',
    genre: 'Animation, Adventure, Comedy',
    description:
      'After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school',
  },
  {
    id: 8,
    name: 'Coco',
    year: 2017,
    duration: '1h 45m',
    genre: 'Animation, Adventure, Comedy',
    description:
      "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer",
  },
  {
    id: 9,
    name: 'Soul',
    year: 2020,
    duration: '1h 40m',
    genre: 'Animation, Adventure, Comedy',
    description:
      'After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife',
  },
  {
    id: 10,
    name: 'Luca',
    year: 2021,
    duration: '1h 35m',
    genre: 'Animation, Adventure, Comedy',
    description:
      'On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human',
  },
];

export const MoviesContext = createContext({
  movies: [],
  addMovie: (
    movieName,
    movieYear,
    movieDuration,
    movieGenre,
    movieDescription,
  ) => {},
  deleteMovie: (movieId) => {},
  editMovie: (
    movieId,
    movieName,
    movieYear,
    movieDuration,
    movieGenre,
    movieDescription,
  ) => {},
});

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(initialMovies);

  const addMovie = (
    movieName,
    movieYear,
    movieDuration,
    movieGenre,
    movieDescription,
  ) => {
    const maxId = Math.max(...movies.map((movie) => movie.id));

    const newMovie = {
      id: maxId + 1,
      name: movieName,
      year: movieYear,
      duration: movieDuration,
      genre: movieGenre,
      description: movieDescription,
    };
    setMovies([...movies, newMovie]);
  };

  function deleteMovie(movieId) {
    setMovies(movies.filter((movie) => movie.id !== movieId));
  }

  function editMovie(
    movieId,
    movieName,
    movieYear,
    movieDuration,
    movieGenre,
    movieDescription,
  ) {
    const editedMovie = {
      id: movieId,
      name: movieName,
      year: movieYear,
      duration: movieDuration,
      genre: movieGenre,
      description: movieDescription,
    };

    setMovies(
      movies.map((movie) => (movie.id === movieId ? editedMovie : movie)),
    );
  }

  return (
    <MoviesContext.Provider
      value={{ movies, addMovie, deleteMovie, editMovie }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContext;
