import React, { useContext, useEffect, useState } from "react";
import EntitiesContext from "../ContextComponent.jsx";
import "./moviesTMDBCards.css";
import CircularProgress from "@mui/material/CircularProgress";
import { TextField } from "@mui/material";
import defaultImage from "./defaultImage.png";

function MoviesTMDB() {
    const { moviesTMDB, fetchMoviesTMDB, searchTMDBMoviesByTitle } =
        useContext(EntitiesContext);
    const [isBlurred, setIsBlurred] = useState(true);
    const [searchTerm, setSearchTerm] = useState(""); // Add this line

    function getColor(vote) {
        if (vote >= 8) {
            return "green";
        } else if (vote >= 5) {
            return "orange";
        } else {
            return "red";
        }
    }

    useEffect(() => {
        fetchMoviesTMDB();
        setTimeout(() => {
            setIsBlurred(false); // Stop the animation after 2 seconds
        }, 2000);
    }, []);

    return (
        <div>
            <TextField
                label="Search movies by name..."
                color="secondary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                variant="outlined"
                style={{
                    width: "20%",
                    marginTop: "20px",
                    marginLeft: "40%",
                    background: "aliceblue",
                }}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        searchTMDBMoviesByTitle(searchTerm);
                        e.preventDefault(); // Prevent the default action
                        setSearchTerm("");
                    }
                }}
            />
            <div
                className={`movie-cards-container ${isBlurred ? "blur-in" : ""}`}
            >
                {moviesTMDB.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <div className="movie-image-container">
                            <img
                                src={
                                    movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                        : defaultImage
                                }
                                alt={movie.title}
                            />
                            <div
                                className="movie-overview"
                                style={{ padding: "10px" }}
                            >
                                <h4>{movie.title}</h4>
                                {movie.overview}
                            </div>
                        </div>
                        <div className="movie-info">
                            <div
                                className={`vote-average ${getColor(movie.vote_average)}`}
                            >
                                <p>{movie.vote_average}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MoviesTMDB;
