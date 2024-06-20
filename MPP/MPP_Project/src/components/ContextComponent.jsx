import React, { createContext, useEffect, useState } from "react";
import FastAPI, { setAuthToken } from "../FastAPI.js";
import useWebSocket, { ReadyState } from "react-use-websocket";

export const EntitiesContext = createContext({
    movies: [],
    fetchMovies: function () {},
    fetchMoreData: function () {},
    hasMoreMovies: true,
    addMovie: function (
        movieName,
        movieYear,
        movieDuration,
        movieGenre,
        movieDescription,
    ) {},
    deleteMovie: function (movieId) {},
    editMovie: function (
        movieId,
        movieName,
        movieYear,
        movieDuration,
        movieGenre,
        movieDescription,
    ) {},
    generateMovies: function (numberOfMovies) {},
    updateMoviesNrCharacters: function () {},
    moviesTMDB: [],
    fetchMoviesTMDB: function () {},
    searchTMDBMoviesByTitle: function (title) {},
    characters: [],
    fetchCharacters: function () {},
    addCharacter: function (characterName, movieName, characterDescription) {},
    deleteCharacter: function (characterId) {},
    editCharacter: function (
        characterId,
        characterName,
        movieName,
        characterDescription,
    ) {},
    error: null,
    login: function (username, password) {},
    register: function (username, password) {},
    logout: function () {},
    currentUsername: "",
    setCurrentUsername: function () {},
    currentUserId: null,
    users: [],
    fetchUsers: function () {},
    fetchNonAdminUsers: function () {},
    removeUser: function (userId) {},
});

let offlineMovies = [];
let offlineCharacters = [];
let offlineOperations = [];
export const EntitiesProvider = ({ children }) => {
    // This useEffect hook will run only once when the component is mounted
    useEffect(() => {
        if (currentUsername !== "") {
            fetchMovies();
            fetchCharacters();
        }
    }, []);

    /* <-------------------------------------------------> State <-------------------------------------------------> */
    const [movies, setMovies] = useState([
        {
            id: 1,
            name: "Frozen",
            year: 2013,
            genre: "Animation, Adventure, Comedy",
            duration: "1h 42min",
            description:
                "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain",
            nrCharacters: 2,
        },
        {
            id: 2,
            name: "Frozen 2",
            year: 2019,
            genre: "Animation, Adventure, Comedy",
            duration: "1h 43min",
            description:
                "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain",
            nrCharacters: 2,
        },
    ]);
    const [moviesTMDB, setMoviesTMDB] = useState([
        {
            adult: false,
            backdrop_path: "/coATv42PoiLqAFKStJiMZs2r6Zb.jpg",
            genre_ids: [16, 10751, 18, 12, 35],
            id: 1022789,
            original_language: "en",
            original_title: "Inside Out 2",
            overview:
                "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
            popularity: 9017.097,
            poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
            release_date: "2024-06-11",
            title: "Inside Out 2",
            video: false,
            vote_average: 8.008,
            vote_count: 299,
        },
        {
            adult: false,
            backdrop_path: "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
            genre_ids: [878, 12, 28],
            id: 653346,
            original_language: "en",
            original_title: "Kingdom of the Planet of the Apes",
            overview:
                "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
            popularity: 3374.453,
            poster_path: "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
            release_date: "2024-05-08",
            title: "Kingdom of the Planet of the Apes",
            video: false,
            vote_average: 6.9,
            vote_count: 1110,
        },
    ]);
    const [characters, setCharacters] = useState([
        {
            id: 2,
            name: "Dash",
            movieName: "The Incredibles",
            description: "Mr. Incredible and Elastigirl's super-speedy son.",
        },
    ]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [currentUsername, setCurrentUsername] = useState("");
    const [currentUserId, setCurrentUserId] = useState(null);
    const [page, setPage] = useState(0);
    const [hasMoreMovies, setHasMoreMovies] = useState(true);

    /* <-------------------------------------------------> Movies Functions <-------------------------------------------------> */
    const fetchMoreData = () => {
        // Increase the page number
        setPage(page + 1);
        console.log("fetchMoreData - page after: ", page);

        // Fetch more data and append it to the current data
        // This is a placeholder function, replace it with your actual data fetching function
        fetchMoreMovies(page + 1).then((newMovies) => {
            setMovies([...movies, ...newMovies]);
        });
    };

    async function fetchMoreMovies(page) {
        try {
            let response;
            if (currentUsername === "guest" || currentUsername === "admin") {
                response = await FastAPI.get("/movies/", {
                    params: {
                        skip: page * 50,
                        limit: 50,
                    },
                });
            } else {
                response = await FastAPI.get(
                    "/movies/username/" + currentUsername,
                    {
                        params: {
                            skip: page * 50,
                            limit: 50,
                        },
                    },
                );
            }
            // if the response.data is an empty array, set hasMoreMovies to false
            if (response.data.length === 0) {
                setHasMoreMovies(false);
            }
            return response.data;
        } catch (error) {
            console.error("Failed to fetch more movies:", error);
            return [];
        }
    }

    const fetchMovies = () => {
        try {
            setHasMoreMovies(true);
            setPage(0);
            console.log("setHasMoreMovies(true) - fetchMovies");
            if (currentUsername === "guest" || currentUsername === "admin") {
                FastAPI.get("/movies/", {
                    params: {
                        skip: 0,
                        limit: 50,
                    },
                }).then((response) => {
                    if (response.status === 200) {
                        setMovies(response.data);
                        offlineMovies = response.data;
                        console.log("Offline movies: ", offlineMovies);
                    } else {
                        setError("Unable to fetch movies from the backend");
                        setMovies(offlineMovies);
                        console.log(
                            "Fetch movies - response status != 200 - Offline movies: ",
                            offlineMovies,
                        );
                    }
                });
            } else {
                FastAPI.get("/movies/username/" + currentUsername, {
                    params: {
                        skip: 0,
                        limit: 50,
                    },
                }).then((response) => {
                    if (response.status === 200) {
                        setMovies(response.data);
                        offlineMovies = response.data;
                        console.log("Offline movies: ", offlineMovies);
                    } else {
                        setError("Unable to fetch movies from the backend");
                        setMovies(offlineMovies);
                        console.log(
                            "Fetch movies - response status != 200 - Offline movies: ",
                            offlineMovies,
                        );
                    }
                });
            }
        } catch (error) {
            setError("Unable to connect to the backend");
            setMovies(offlineMovies);
            console.log(
                "Offline mode - fetch - Offline movies: ",
                offlineMovies,
            );
        }
    };

    async function addMovie(
        movieName,
        movieYear,
        movieDuration,
        movieGenre,
        movieDescription,
    ) {
        const newMovie = {
            name: movieName,
            year: movieYear,
            duration: movieDuration,
            genre: movieGenre,
            description: movieDescription,
            editorId: currentUserId,
        };
        console.log("New movie: ", newMovie);
        try {
            await FastAPI.post("/movies/", newMovie);
            console.log("addMovie - After post");
            fetchMovies();
        } catch (error) {
            offlineOperations.push({
                type: "add-movie",
                data: newMovie,
            });
            // add movie in offlineMovies
            offlineMovies.push(newMovie);
            setMovies(offlineMovies);
            console.log("Offline mode - add - Offline movies: ", offlineMovies);
        }
    }

    async function deleteMovie(movieId) {
        try {
            await FastAPI.delete(`/movies/${movieId}`);
            fetchMovies();
        } catch (error) {
            offlineOperations.push({
                type: "delete-movie",
                data: { id: movieId },
            });
            // delete movie in offlineMovies
            offlineMovies = offlineMovies.filter(
                (movie) => movie.id !== movieId,
            );
            setMovies(offlineMovies);
            console.log(
                "Offline mode - delete - Offline movies: ",
                offlineMovies,
            );
        }
    }

    async function editMovie(
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
        try {
            // console.log('Edited movie: ', editedMovie);
            await FastAPI.put(`/movies/${movieId}/`, editedMovie);
            fetchMovies();
        } catch (error) {
            console.log("Error edited movie: ", error);
            offlineOperations.push({
                type: "edit-movie",
                data: editedMovie,
            });
            // edit movie in offlineMovies
            offlineMovies = offlineMovies.map((movie) =>
                movie.id === movieId ? editedMovie : movie,
            );
            setMovies(offlineMovies);
            console.log(
                "Offline mode - edit - Offline movies: ",
                offlineMovies,
            );
        }
    }
    // <----------------------------> TMDB Movies <---------------------------->
    const fetchMoviesTMDB = () => {
        try {
            FastAPI.get("/moviesTMDB/").then((response) => {
                if (response.status === 200) {
                    setMoviesTMDB(response.data);
                } else {
                    setError("Unable to fetch movies from the backend");
                }
            });
        } catch (error) {
            setError("Unable to connect to the backend");
        }
    };

    const searchTMDBMoviesByTitle = (title) => {
        try {
            FastAPI.get("/moviesTMDB/search/" + title).then((response) => {
                if (response.status === 200) {
                    setMoviesTMDB(response.data);
                } else {
                    setError("Unable to fetch movies from the backend");
                }
            });
        } catch (error) {
            setError("Unable to connect to the backend");
        }
    };

    // <-------------------------------------------------> Offline Operations <------------------------------------------------->
    async function performOperationOnServer(operation) {
        try {
            switch (operation.type) {
                case "add-movie":
                    console.log("Back online - add-movie: ", operation.data);
                    await FastAPI.post(`/movies/`, operation.data);
                    break;
                case "delete-movie":
                    console.log("Back online - delete-movie: ", operation.data);
                    await FastAPI.delete(`/movies/${operation.data.id}`);
                    break;
                case "edit-movie":
                    console.log("Back online - edit-movie: ", operation.data);
                    await FastAPI.put(
                        `/movies/${operation.data.id}`,
                        operation.data,
                    );
                    break;
                case "generate-movies":
                    console.log(
                        "Back online - generate-movies: ",
                        operation.data,
                    );
                    await FastAPI.post(`/movies/generate/${operation.data}`);
                    break;
                case "add-character":
                    console.log(
                        "Back online - add-character: ",
                        operation.data,
                    );
                    await FastAPI.post(`/characters/`, operation.data);
                    break;
                case "delete-character":
                    console.log(
                        "Back online - delete-character: ",
                        operation.data,
                    );
                    await FastAPI.delete(`/characters/${operation.data.id}`);
                    break;
                case "edit-character":
                    console.log(
                        "Back online - edit-character: ",
                        operation.data,
                    );
                    await FastAPI.put(
                        `/characters/${operation.data.id}`,
                        operation.data,
                    );
                    break;
                case "update-nr-characters":
                    console.log("Back online - update-nr-characters");
                    await FastAPI.get(`/movies/update_nr_characters`);
                    break;
                default:
                    throw new Error("Unknown operation type:" + operation.type);
            }
        } catch (error) {
            console.error("Failed to perform operation:", error);
        }
    }

    async function performOperations() {
        try {
            // Perform each operation on the server
            for (const operation of offlineOperations) {
                await performOperationOnServer(operation);

                // If the operation was successful, remove it from the local database
                offlineOperations = offlineOperations.filter(
                    (op) => op !== operation,
                );
                console.log("Operation performed:", operation);
            }
        } catch (error) {
            console.error("Failed to perform operation:", error);
        }
    }

    window.addEventListener("online", performOperations);

    // <-------------------------------------------------> WebSocket <------------------------------------------------->
    const WS_URL = "ws://127.0.0.1:8000/ws";
    const { lastJsonMessage, readyState } = useWebSocket(WS_URL, {
        share: false,
        shouldReconnect: () => true,
    });

    // Run when the WebSocket connection is opened
    useEffect(() => {
        if (readyState === ReadyState.OPEN) {
            performOperations().then(() => console.log("Operations performed"));
        }
    }, [readyState]);

    // Run when a new WebSocket message is received (lastJsonMessage)
    useEffect(() => {
        if (lastJsonMessage && Object.hasOwn(lastJsonMessage, "message")) {
            console.log("Last JSON message: ", lastJsonMessage);
            // console.log('Movies: ', movies);
            fetchMovies();
            fetchCharacters();
        } else {
            console.log("Null message received");
        }
    }, [lastJsonMessage]);

    async function generateMovies(numberOfMovies) {
        try {
            await FastAPI.post(`/movies/generate/${numberOfMovies}`);
            fetchMovies();
        } catch (error) {
            offlineOperations.push({
                type: "generate-movies",
                data: numberOfMovies,
            });
            // generate movies in offlineMovies
            for (let i = 0; i < numberOfMovies; i++) {
                const newMovie = {
                    id: i + 1,
                    name: "Offline generated Movie " + (i + 1),
                    year: 2021,
                    duration: "1h 30min",
                    genre: "Action",
                    description: "Description",
                };
                offlineMovies.push(newMovie);
            }
            setMovies(offlineMovies);
            console.log(
                "Offline mode - generate - Offline movies: ",
                offlineMovies,
            );
        }
    }

    // <-------------------------------------------------> Characters Functions <------------------------------------------------->

    const fetchCharacters = () => {
        try {
            console.log("fetchCharacters - currentUsername:", currentUsername);
            if (currentUsername === "guest" || currentUsername === "admin") {
                FastAPI.get("/characters/").then((response) => {
                    if (response.status === 200) {
                        setCharacters(response.data);
                        offlineCharacters = response.data;
                        console.log("Offline characters: ", offlineCharacters);
                    } else {
                        setError("Unable to fetch characters from the backend");
                        setCharacters(offlineCharacters);
                        console.log(
                            "Fetch characters - response status != 200 - Offline characters: ",
                            offlineCharacters,
                        );
                    }
                });
            } else {
                FastAPI.get("/characters/username/" + currentUsername).then(
                    (response) => {
                        if (response.status === 200) {
                            setCharacters(response.data);
                            offlineCharacters = response.data;
                            console.log(
                                "Offline characters: ",
                                offlineCharacters,
                            );
                        } else {
                            setError(
                                "Unable to fetch characters from the backend",
                            );
                            setCharacters(offlineCharacters);
                            console.log(
                                "Fetch characters - response status != 200 - Offline characters: ",
                                offlineCharacters,
                            );
                        }
                    },
                );
            }
        } catch (error) {
            setError("Unable to connect to the backend");
            setCharacters(offlineCharacters);
            console.log(
                "Offline mode - fetch - Offline characters: ",
                offlineCharacters,
            );
        }
    };

    async function addCharacter(
        characterName,
        movieName,
        characterDescription,
    ) {
        const newCharacter = {
            name: characterName,
            movieName: movieName,
            description: characterDescription,
            editorId: currentUserId,
        };
        try {
            await FastAPI.post("/characters/", newCharacter);
            fetchCharacters();
        } catch (error) {
            offlineOperations.push({
                type: "add-character",
                data: newCharacter,
            });
            // add character in offlineCharacters
            offlineCharacters.push(newCharacter);
            setCharacters(offlineCharacters);
            console.log(
                "Offline mode - add - Offline characters: ",
                offlineCharacters,
            );
        }
    }

    async function deleteCharacter(characterId) {
        try {
            await FastAPI.delete(`/characters/${characterId}`);
            fetchCharacters();
        } catch (error) {
            offlineOperations.push({
                type: "delete-character",
                data: { id: characterId },
            });
            // delete character in offlineCharacters
            offlineCharacters = offlineCharacters.filter(
                (character) => character.id !== characterId,
            );
            setCharacters(offlineCharacters);
            console.log(
                "Offline mode - Offline characters: ",
                offlineCharacters,
            );
        }
    }

    async function editCharacter(
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
        try {
            console.log("Edited character: ", editedCharacter);
            await FastAPI.put(`/characters/${characterId}/`, editedCharacter);
            console.log("after put");
            fetchCharacters();
        } catch (error) {
            offlineOperations.push({
                type: "edit-character",
                data: editedCharacter,
            });
            // edit character in offlineCharacters
            offlineCharacters = offlineCharacters.map((character) =>
                character.id === characterId ? editedCharacter : character,
            );
            setCharacters(offlineCharacters);
            console.log(
                "Offline mode - Offline characters: ",
                offlineCharacters,
            );
        }
    }

    async function updateMoviesNrCharacters() {
        try {
            console.log("before update_nr_characters");
            await FastAPI.put("/movies/update_nr_characters/");
            console.log("after update_nr_characters");
            fetchMovies();
        } catch (error) {
            offlineOperations.push({
                type: "update-nr-characters",
            });
            console.log("Offline mode - update-nr-characters:", offlineMovies);
        }
    }

    // <-------------------------------------------------> Login Register Logout + Users Functions <------------------------------------------------->

    async function login(username, password) {
        try {
            console.log("Login:", {
                username: username,
                hashedPassword: password,
            });
            const response = await FastAPI.post("/auth/login/", {
                username: username,
                hashedPassword: password,
            });
            console.log("Login response:", response);
            if (response.data) {
                fetchMovies();
                fetchCharacters();

                // Set the token in the axios instance
                setAuthToken(response.data.token);

                setCurrentUsername(username);
                setCurrentUserId(response.data.id);
                console.log("setCurrentUsername:", currentUsername);
                console.log("setCurrentUserId:", currentUserId);
            }
            return response.data;
        } catch (error) {
            console.error("Failed to login:", error);
            return null;
        }
    }

    async function register(username, password) {
        try {
            // console.log('Register:', {
            //     username: username,
            //     hashedPassword: password,
            // });
            const response = await FastAPI.post("/auth/register/", {
                username: username,
                hashedPassword: password,
            });
            console.log("Register response:", response);
            return response.data;
        } catch (error) {
            console.error("Failed to register:", error);
            return null;
        }
    }

    async function logout() {
        try {
            const response = await FastAPI.post("/auth/logout/");
            console.log("Logout response:", response);

            setCurrentUsername("");
            // Remove the token from the axios instance
            setAuthToken(null);
            return response.data;
        } catch (error) {
            console.error("Failed to logout:", error);
            return null;
        }
    }

    const fetchUsers = () => {
        try {
            FastAPI.get("/users/basicUsers/").then((response) => {
                if (response.status === 200) {
                    setUsers(response.data);
                } else {
                    setError("Unable to fetch users from the backend");
                }
            });
        } catch (error) {
            setError("Unable to connect to the backend");
        }
    };

    const fetchNonAdminUsers = () => {
        try {
            FastAPI.get("/users/nonAdmin/").then((response) => {
                if (response.status === 200) {
                    setUsers(response.data);
                } else {
                    setError("Unable to fetch users from the backend");
                }
            });
        } catch (error) {
            setError("Unable to connect to the backend");
        }
    };

    const removeUser = (userId) => {
        try {
            FastAPI.delete(`/users/${userId}`).then((response) => {
                if (response.status === 200) {
                    fetchUsers();
                } else {
                    setError("Unable to remove user from the backend");
                }
            });
        } catch (error) {
            setError("Unable to connect to the backend");
        }
    };

    // <-------------------------------------------------> Return <------------------------------------------------->
    return (
        <EntitiesContext.Provider
            value={{
                movies,
                fetchMovies,
                fetchMoreData,
                hasMoreMovies,
                addMovie,
                deleteMovie,
                editMovie,
                generateMovies,
                updateMoviesNrCharacters,
                moviesTMDB,
                fetchMoviesTMDB,
                searchTMDBMoviesByTitle,
                characters,
                fetchCharacters,
                addCharacter,
                deleteCharacter,
                editCharacter,
                error,
                login,
                register,
                logout,
                currentUsername,
                setCurrentUsername,
                currentUserId,
                users,
                fetchUsers,
                fetchNonAdminUsers,
                removeUser,
            }}
        >
            {children}
        </EntitiesContext.Provider>
    );
};
export default EntitiesContext;
