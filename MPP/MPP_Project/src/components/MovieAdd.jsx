import Container from 'react-bootstrap/Container';
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    Paper,
} from '@mui/material';
import React, { useContext, useState } from 'react';

import MoviesContext from './ContextComponent.jsx';
import { useNavigate } from 'react-router-dom';

function MovieAdd() {
    const { addMovie } = useContext(MoviesContext);
    let navigate = useNavigate();
    // initial state to be the movies
    const [movieName, setMovieName] = useState('');
    const [movieYear, setMovieYear] = useState(2010);
    const [movieDuration, setMovieDuration] = useState('');
    const [movieGenre, setMovieGenre] = useState('');
    const [movieDescription, setMovieDescription] = useState('');

    function allFieldsFilled() {
        return (
            movieName !== '' &&
            movieDuration !== '' &&
            movieGenre !== '' &&
            movieDescription !== ''
        );
    }

    function handleAddMovie() {
        addMovie(
            movieName,
            movieYear,
            movieDuration,
            movieGenre,
            movieDescription,
        );
        setMovieName('');
        setMovieYear(2010);
        setMovieDuration('');
        setMovieGenre('');
        setMovieDescription('');
        navigate(`/`);
    }

    function handleNameChange(event) {
        setMovieName(event.target.value);
    }

    function handleYearChange(event) {
        setMovieYear(event.target.value);
    }

    function handleDurationChange(event) {
        setMovieDuration(event.target.value);
    }

    function handleGenreChange(event) {
        setMovieGenre(event.target.value);
    }

    function handleDescriptionChange(event) {
        setMovieDescription(event.target.value);
    }

    return (
        <>
            <Container data-testid="add-movie-page">
                <h1 style={{ textAlign: 'center' }}>Add Movie</h1>
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
                        <InputLabel
                            htmlFor="component-outlined"
                            color="secondary"
                        >
                            Name
                        </InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            label="Name"
                            value={movieName}
                            onChange={handleNameChange}
                            color="secondary"
                            inputProps={{ 'data-testid': 'movie-name-input' }}
                        />
                    </FormControl>
                    <FormControl style={{ marginTop: 7 }}>
                        <InputLabel
                            htmlFor="component-outlined"
                            color="secondary"
                        >
                            Year
                        </InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            label="Year"
                            type={'number'}
                            value={movieYear}
                            onChange={handleYearChange}
                            color="secondary"
                            inputProps={{ 'data-testid': 'movie-year-input' }}
                        />
                    </FormControl>

                    <FormControl style={{ marginTop: 7 }}>
                        <InputLabel
                            htmlFor="component-outlined"
                            color="secondary"
                        >
                            Genre
                        </InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            label="Genre"
                            value={movieGenre}
                            onChange={handleGenreChange}
                            color="secondary"
                            inputProps={{ 'data-testid': 'movie-genre-input' }}
                        />
                    </FormControl>

                    <FormControl style={{ marginTop: 7 }}>
                        <InputLabel
                            htmlFor="component-outlined"
                            color="secondary"
                        >
                            Duration
                        </InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            label="Duration"
                            value={movieDuration}
                            onChange={handleDurationChange}
                            color="secondary"
                            inputProps={{
                                'data-testid': 'movie-duration-input',
                            }}
                        />
                    </FormControl>

                    <FormControl style={{ marginTop: 7 }}>
                        <InputLabel
                            htmlFor="component-outlined"
                            color="secondary"
                        >
                            Description
                        </InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            label="Description"
                            value={movieDescription}
                            onChange={handleDescriptionChange}
                            color="secondary"
                            inputProps={{
                                'data-testid': 'movie-description-input',
                            }}
                        />
                    </FormControl>
                    <Button
                        variant="contained"
                        onClick={handleAddMovie}
                        color="secondary"
                        style={{ marginTop: 7 }}
                        data-testid="add-movie-button"
                        disabled={!allFieldsFilled()}
                    >
                        Add Movie
                    </Button>
                </Box>
            </Container>
        </>
    );
}

export default MovieAdd;
