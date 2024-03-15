import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
} from '@mui/material';
import React, { useContext } from 'react';
import MoviesContext from './ContextComponent.jsx';
import { useNavigate, useParams } from 'react-router-dom';

function MovieEdit() {
  const { movies, editMovie } = useContext(MoviesContext);
  let navigate = useNavigate();

  // take the movie id from the url
  let { movieId } = useParams();
  movieId = parseInt(movieId);

  const movie = movies.find((movie) => movie.id === movieId);
  console.log(movie);

  const [movieName, setMovieName] = React.useState(movie.name);
  const [movieYear, setMovieYear] = React.useState(movie.year);
  const [movieDuration, setMovieDuration] = React.useState(movie.duration);
  const [movieGenre, setMovieGenre] = React.useState(movie.genre);
  const [movieDescription, setMovieDescription] = React.useState(
    movie.description,
  );

  function handleEditMovie() {
    editMovie(
      movieId,
      movieName,
      movieYear,
      movieDuration,
      movieGenre,
      movieDescription,
    );
    console.log(
      movieId,
      movieName,
      movieYear,
      movieDuration,
      movieGenre,
      movieDescription,
    );
    navigate(`/movies`);
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Edit Movie</h1>
      {/*Have the box centered*/}
      <Box
        component={Paper}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          margin: 5,
          backgroundColor: 'lightblue',
          borderRadius: 4,
          padding: 5,
        }}
      >
        <FormControl style={{ marginTop: 7 }}>
          <InputLabel htmlFor="component-outlined">Name</InputLabel>
          <OutlinedInput
            id="component-outlined"
            label="Name"
            value={movieName}
            onChange={(event) => setMovieName(event.target.value)}
          />
        </FormControl>
        <FormControl style={{ marginTop: 7 }}>
          <InputLabel htmlFor="component-outlined">Year</InputLabel>
          <OutlinedInput
            id="component-outlined"
            label="Year"
            type={'number'}
            value={movieYear}
            onChange={(event) => setMovieYear(event.target.value)}
          />
        </FormControl>

        <FormControl style={{ marginTop: 7 }}>
          <InputLabel htmlFor="component-outlined">Genre</InputLabel>
          <OutlinedInput
            id="component-outlined"
            label="Genre"
            value={movieGenre}
            onChange={(event) => setMovieGenre(event.target.value)}
          />
        </FormControl>

        <FormControl style={{ marginTop: 7 }}>
          <InputLabel htmlFor="component-outlined">Duration</InputLabel>
          <OutlinedInput
            id="component-outlined"
            label="Duration"
            value={movieDuration}
            onChange={(event) => setMovieDuration(event.target.value)}
          />
        </FormControl>

        <FormControl style={{ marginTop: 7 }}>
          <InputLabel htmlFor="component-outlined">Description</InputLabel>
          <OutlinedInput
            id="component-outlined"
            label="Description"
            value={movieDescription}
            onChange={(event) => setMovieDescription(event.target.value)}
          />
        </FormControl>
        <Button
          variant="contained"
          onClick={handleEditMovie}
          style={{ marginTop: 7 }}
        >
          Update Movie
        </Button>
      </Box>
    </>
  );
}

export default MovieEdit;
