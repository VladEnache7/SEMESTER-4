﻿import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import React, { useContext } from 'react';
import EntitiesContext from './../ContextComponent.jsx';

function MovieDetails() {
    const { movies, currentUsername } = useContext(EntitiesContext);
    let { movieId } = useParams();
    movieId = parseInt(movieId);

    let navigate = useNavigate();
    if (!currentUsername) {
        navigate('/');
    }

    // get the movie
    const movie = movies.find((movie) => movie.id === movieId);

    function backToMovies() {
        navigate('/movies');
    }

    return (
        <div data-testid="details-page">
            <h1 style={{ textAlign: 'center', marginTop: 15 }}>
                Movie Details
            </h1>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 2,
                    backgroundColor: 'lightblue',
                    borderRadius: 4,
                    padding: 5,
                }}
            >
                <p>
                    <b>Name:</b> {movie.name}
                </p>
                <p>
                    <b>ID:</b> {movieId}
                </p>
                <p>
                    <b>Year:</b> {movie.year}
                </p>
                <p>
                    <b>Genre:</b> {movie.genre}
                </p>
                <p>
                    <b>Duration:</b> {movie.duration}
                </p>
                <p>
                    <b>Description:</b> {movie.description}
                </p>
            </Box>
            <Button
                variant="contained"
                onClick={backToMovies}
                style={{ margin: 15 }}
                data-testid="back-to-movies-button"
            >
                Back to Movies
            </Button>
        </div>
    );
}

export default MovieDetails;
