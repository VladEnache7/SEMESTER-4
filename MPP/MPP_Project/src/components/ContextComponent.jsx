import React, { createContext, useEffect, useState } from 'react';
import FastAPI from '../FastAPI.js';
import useWebSocket, { ReadyState } from 'react-use-websocket';

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
    generateMovies: (numberOfMovies) => {},
    characters: [],
    addCharacter: (characterName, movieName, characterDescription) => {},
    deleteCharacter: (characterId) => {},
    editCharacter: (
        characterId,
        characterName,
        movieName,
        characterDescription,
    ) => {},
    error: null,
});

export const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            name: 'Frozen',
            year: 2013,
            genre: 'Animation, Adventure, Comedy',
            duration: '1h 42min',
            description:
                'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain',
        },
        {
            id: 2,
            name: 'Frozen 2',
            year: 2019,
            genre: 'Animation, Adventure, Comedy',
            duration: '1h 43min',
            description:
                'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain',
        },
    ]);
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);

    const fetchMovies = () => {
        try {
            const response = FastAPI.get('/movies/').then((response) => {
                setMovies(response.data);
                if (response.status !== 200)
                    setError('Unable to fetch movies from the backend');
                else console.log('Fetch movies');
            });
        } catch (error) {
            setError('Unable to connect to the backend');
        }
    };

    const fetchCharacters = () => {
        try {
            const response = FastAPI.get('/characters/').then((response) => {
                setCharacters(response.data);
                if (response.status !== 200)
                    setError('Unable to fetch characters from the backend');
                else console.log('Fetch characters');
            });
        } catch (error) {
            setError('Unable to connect to the backend');
        }
    };

    // This useEffect hook will run only once when the component is mounted
    useEffect(() => {
        fetchMovies();
        fetchCharacters();
    }, []);

    // <-------------------------------------------------> CRUD on Movies <------------------------------------------------->
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
        // setMovies([...movies, newMovie]);

        FastAPI.post('/movies/', newMovie);
        fetchMovies();
    };

    function deleteMovie(movieId) {
        // setMovies(movies.filter((movie) => movie.id !== movieId));
        FastAPI.delete(`/movies/${movieId}`);
        fetchMovies();
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

        FastAPI.put(`/movies/${movieId}/`, editedMovie);
        fetchMovies();
    }

    // <-------------------------------------------------> WebSocket <------------------------------------------------->
    const WS_URL = 'ws://127.0.0.1:8000/ws';
    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
        WS_URL,
        {
            share: false,
            shouldReconnect: () => true,
        },
    );

    // Run when a new WebSocket message is received (lastJsonMessage)
    useEffect(() => {
        if (lastJsonMessage && Object.hasOwn(lastJsonMessage, 'length')) {
            console.log('Last JSON message: ', lastJsonMessage);
            // console.log('Movies: ', movies);
            setMovies(lastJsonMessage);
        } else {
            console.log('Null message received');
        }
    }, [lastJsonMessage]);

    function generateMovies(numberOfMovies) {
        FastAPI.post(`/movies/generate/${numberOfMovies}`);
        fetchMovies();
    }

    // <-------------------------------------------------> CRUD on Characters <------------------------------------------------->
    const addCharacter = (characterName, movieName, characterDescription) => {
        const maxId = Math.max(...characters.map((character) => character.id));

        const newCharacter = {
            id: maxId + 1,
            name: characterName,
            movieName: movieName,
            description: characterDescription,
        };
        // setCharacters([...characters, newCharacter]);

        FastAPI.post('/characters/', newCharacter);
        fetchCharacters();
    };

    function deleteCharacter(characterId) {
        // setCharacters(characters.filter((character) => character.id !== characterId));
        FastAPI.delete(`/characters/${characterId}`);
        fetchCharacters();
    }

    function editCharacter(
        characterId,
        characterName,
        movieName,
        characterDescription,
    ) {
        const editedCharacter = {
            id: characterId,
            name: characterName,
            movieName: movieName,
            description: characterDescription,
        };

        FastAPI.put(`/characters/${characterId}/`, editedCharacter);
        fetchCharacters();
    }

    return (
        <MoviesContext.Provider
            value={{
                movies,
                addMovie,
                deleteMovie,
                editMovie,
                generateMovies,
                characters,
                addCharacter,
                deleteCharacter,
                editCharacter,
                error,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContext;
