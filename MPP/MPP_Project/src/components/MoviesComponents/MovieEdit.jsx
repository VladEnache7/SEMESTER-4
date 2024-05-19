import {
    Box,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    Paper,
} from '@mui/material';
import React, { useContext } from 'react';
import EntitiesContext from './../ContextComponent.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function MovieEdit() {
    const { movies, editMovie, currentUsername } = useContext(EntitiesContext);
    let navigate = useNavigate();
    if (!currentUsername) {
        navigate('/');
    }

    // take the movie id from the url
    let { movieId } = useParams();
    movieId = parseInt(movieId);

    const movie = movies.find((movie) => movie.id === movieId);

    const [movieName, setMovieName] = React.useState(movie.name);
    const [movieYear, setMovieYear] = React.useState(movie.year);
    const [movieDuration, setMovieDuration] = React.useState(movie.duration);
    const [movieGenre, setMovieGenre] = React.useState(movie.genre);
    const [movieDescription, setMovieDescription] = React.useState(
        movie.description,
    );

    function movieUnchanged() {
        return (
            movieName === movie.name &&
            movieYear === movie.year &&
            movieDuration === movie.duration &&
            movieGenre === movie.genre &&
            movieDescription === movie.description
        );
    }

    function handleEditMovie() {
        editMovie(
            movieId,
            movieName,
            movieYear,
            movieDuration,
            movieGenre,
            movieDescription,
        );
        navigate(`/movies/${movieId}/details`);
    }

    return (
        <Container data-testid="edit-movie-page">
            <h1 style={{ textAlign: 'center', marginTop: 20 }}>Edit Movie</h1>
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
                        inputProps={{ 'data-testid': 'movie-name-input' }}
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
                        inputProps={{ 'data-testid': 'movie-year-input' }}
                    />
                </FormControl>

                <FormControl style={{ marginTop: 7 }}>
                    <InputLabel htmlFor="component-outlined">Genre</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        label="Genre"
                        value={movieGenre}
                        onChange={(event) => setMovieGenre(event.target.value)}
                        inputProps={{ 'data-testid': 'movie-genre-input' }}
                    />
                </FormControl>

                <FormControl style={{ marginTop: 7 }}>
                    <InputLabel htmlFor="component-outlined">
                        Duration
                    </InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        label="Duration"
                        value={movieDuration}
                        onChange={(event) =>
                            setMovieDuration(event.target.value)
                        }
                        inputProps={{ 'data-testid': 'movie-duration-input' }}
                    />
                </FormControl>

                <FormControl style={{ marginTop: 7 }}>
                    <InputLabel htmlFor="component-outlined">
                        Description
                    </InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        label="Description"
                        value={movieDescription}
                        onChange={(event) =>
                            setMovieDescription(event.target.value)
                        }
                        inputProps={{
                            'data-testid': 'movie-description-input',
                        }}
                    />
                </FormControl>
                <Button
                    variant="contained"
                    onClick={handleEditMovie}
                    style={{ marginTop: 7 }}
                    data-testid="update-movie-button"
                    disabled={movieUnchanged()}
                >
                    Update Movie
                </Button>
            </Box>
        </Container>
    );
}

export default MovieEdit;
