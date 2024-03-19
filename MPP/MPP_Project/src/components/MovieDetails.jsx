import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { useContext } from 'react';
import MoviesContext from './ContextComponent.jsx';

function MovieDetails() {
    const { movies } = useContext(MoviesContext);
    let { movieId } = useParams();
    movieId = parseInt(movieId);
    // console.log('🚀 ~ MovieDetails ~ movieId:', movieId);

    // get the movie

    const movie = movies.find((movie) => movie.id === movieId);

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
                    <b>ID:</b> {movieId}
                </p>
                <p>
                    <b>Name:</b> {movie.name}
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
        </div>
    );
}

export default MovieDetails;
