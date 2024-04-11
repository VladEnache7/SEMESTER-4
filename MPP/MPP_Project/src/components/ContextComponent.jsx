import React, { createContext, useEffect, useState } from 'react';
import FastAPI from '../FastAPI.js';
import useWebSocket, { ReadyState } from 'react-use-websocket';

// const initialMovies = [
//     {
//         id: 1,
//         name: 'Cars',
//         year: 2006,
//         duration: '1h 57m',
//         genre: 'Animation, Adventure, Comedy',
//         description:
//             'Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line',
//     },
//     {
//         id: 2,
//         name: 'Toy Story',
//         year: 1995,
//         duration: '1h 21m',
//         genre: 'Animation, Adventure, Comedy',
//         description:
//             "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences",
//     },
//     {
//         id: 3,
//         name: 'Finding Nemo',
//         year: 2003,
//         duration: '1h 40m',
//         genre: 'Animation, Adventure, Comedy',
//         description:
//             'After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home',
//     },
//     {
//         id: 4,
//         name: 'The Incredibles',
//         year: 2004,
//         duration: '1h 55m',
//         genre: 'Animation, Action, Adventure',
//         description:
//             'A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world',
//     },
//     {
//         id: 5,
//         name: 'Ratatouille',
//         year: 2007,
//         duration: '1h 51m',
//         genre: 'Animation, Adventure, Comedy',
//         description:
//             'A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant',
//     },
//     {
//         id: 6,
//         name: 'Up',
//         year: 2009,
//         duration: '1h 36m',
//         genre: 'Animation, Adventure, Comedy',
//         description:
//             '78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway',
//     },
//     {
//         id: 7,
//         name: 'Inside Out',
//         year: 2015,
//         duration: '1h 35m',
//         genre: 'Animation, Adventure, Comedy',
//         description:
//             'After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school',
//     },
//     {
//         id: 8,
//         name: 'Coco',
//         year: 2017,
//         duration: '1h 45m',
//         genre: 'Animation, Adventure, Comedy',
//         description:
//             "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer",
//     },
//     {
//         id: 9,
//         name: 'Soul',
//         year: 2020,
//         duration: '1h 40m',
//         genre: 'Animation, Adventure, Comedy',
//         description:
//             'After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife',
//     },
//     {
//         id: 10,
//         name: 'Luca',
//         year: 2021,
//         duration: '1h 35m',
//         genre: 'Animation, Adventure, Comedy',
//         description:
//             'On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human',
//     },
//     {
//         id: 11,
//         name: 'The Lion King',
//         year: 1994,
//         duration: '1h 28m',
//         genre: 'Animation, Adventure, Drama',
//         description:
//             'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself',
//     },
//     {
//         id: 12,
//         name: 'The Little Mermaid',
//         year: 1989,
//         duration: '1h 23m',
//         genre: 'Animation, Family, Fantasy',
//         description:
//             'A mermaid princess makes a Faustian bargain in an attempt to become human and win a prince`s love',
//     },
//     {
//         id: 13,
//         name: 'Beauty and the Beast',
//         year: 1991,
//         duration: '1h 24m',
//         genre: 'Animation, Family, Fantasy',
//         description:
//             'A prince cursed to spend his days as a hideous monster sets out to regain his humanity by earning a young woman`s love',
//     },
//     {
//         id: 14,
//         name: 'Aladdin',
//         year: 1992,
//         duration: '1h 30m',
//         genre: 'Animation, Adventure, Comedy',
//         description:
//             'When a street urchin vies for the love of a beautiful princess, he uses a genie`s magic power to make himself off as a prince in order to marry her',
//     },
//     {
//         id: 15,
//         name: 'Pocahontas',
//         year: 1995,
//         duration: '1h 21m',
//         genre: 'Animation, Adventure, Drama',
//         description:
//             'An English soldier and the daughter of an Algonquin chief share a romance when English colonists invade 17th century Virginia',
//     },
//     {
//         id: 16,
//         name: 'Mulan',
//         year: 1998,
//         duration: '1h 28m',
//         genre: 'Animation, Adventure, Family',
//         description:
//             'To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China`s greatest heroines in the process',
//     },
//     {
//         id: 17,
//         name: 'The Princess and the Frog',
//         year: 2009,
//         duration: '1h 37m',
//         genre: 'Animation, Adventure, Comedy',
//         description:
//             'A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to face the same problem after she kisses him',
//     },
//     {
//         id: 18,
//         name: 'Tangled',
//         year: 2010,
//         duration: '1h 40m',
//         genre: 'Animation, Adventure, Comedy',
//         description:
//             'The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is',
//     },
//     {
//         id: 19,
//         name: 'Frozen',
//         year: 2013,
//         duration: '1h 42m',
//         genre: 'Animation, Adventure, Comedy',
//         description:
//             'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain ',
//     },
//     {
//         id: 20,
//         name: 'Moana',
//         year: 2016,
//         duration: '1h 47m',
//         genre: 'Animation, Adventure, Comedy',
//         description:
//             'In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana`s island, she answers the Ocean`s call to seek out the Demigod to set things right',
//     },
//     {
//         id: 21,
//         name: 'Brave',
//         year: 2012,
//         duration: '1h 33m',
//         genre: 'Animation, Adventure, Comedy',
//         description:
//             'Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse',
//     },
//     {
//         id: 22,
//         name: 'Cinderella',
//         year: 1950,
//         duration: '1h 14m',
//         genre: 'Animation, Family, Fantasy',
//         description:
//             'When Cinderella`s cruel stepmother prevents her from attending the Royal Ball, she gets some unexpected help from the lovable mice Gus and Jaq, and from her Fairy Godmother',
//     },
//     {
//         id: 23,
//         name: 'Sleeping Beauty',
//         year: 1959,
//         duration: '1h 15m',
//         genre: 'Animation, Family, Fantasy',
//         description:
//             'After being snubbed by the royal family, a malevolent fairy places a curse on a princess which only a prince can break, along with the help of three good fairies',
//     },
//     {
//         id: 24,
//         name: 'Snow White and the Seven Dwarfs',
//         year: 1937,
//         duration: '1h 23m',
//         genre: 'Animation, Family, Fantasy',
//         description:
//             'Exiled into the dangerous forest by her wicked stepmother, a princess is rescued by seven dwarf miners who make her part of their household',
//     },
//     {
//         id: 25,
//         name: 'Alice in Wonderland',
//         year: 1951,
//         duration: '1h 15m',
//         genre: 'Animation, Adventure, Family',
//         description:
//             'Alice stumbles into the world of Wonderland. Will she get home? Not if the Queen of Hearts has her way',
//     },
// ];

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
    getMovies: () => {},
    error: null,
    generateMovies: (numberOfMovies) => {},
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
    const [error, setError] = useState(null);

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

        // setMovies(
        //     movies.map((movie) => (movie.id === movieId ? editedMovie : movie)),
        // );
        FastAPI.put(`/movies/${movieId}/`, editedMovie);
        fetchMovies();
    }

    // function sortMovies() {
    //     movies.sort((a, b) => b.name.localeCompare(a.name));
    // }
    //
    // function getMoviesSorted() {
    //     sortMovies();
    //     return movies;
    // }

    const fetchMovies = () => {
        try {
            const response = FastAPI.get('/movies/').then((response) => {
                setMovies(response.data);
                if (response.status !== 200)
                    setError('Unable to fetch movies from the backend');
                else console.log('Fetch movies');
            });
            // setMovies(response.data);
            // if (response.status !== 200)
            //     setError('Unable to fetch movies from the backend');
            // else console.log('Fetch movies');
        } catch (error) {
            setError('Unable to connect to the backend');
        }
    };

    // This useEffect hook will run only once when the component is mounted
    useEffect(() => {
        fetchMovies();
    }, []);

    function getMovies() {
        // fetchMovies();
        return movies;
    }

    function generateMovies(numberOfMovies) {
        FastAPI.post(`/movies/generate/${numberOfMovies}`);
        fetchMovies();
    }

    return (
        <MoviesContext.Provider
            value={{
                movies,
                addMovie,
                deleteMovie,
                editMovie,
                getMovies,
                error,
                generateMovies,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContext;
