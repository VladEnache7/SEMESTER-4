import React, { useContext, useEffect, useState } from "react";
import EntitiesContext from "../ContextComponent.jsx";
import "./moviesTMDBCards.css";
import CircularProgress from "@mui/material/CircularProgress";

function MoviesTMDB() {
    const { moviesTMDB, fetchMoviesTMDB } = useContext(EntitiesContext);
    const [isBlurred, setIsBlurred] = useState(true);

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
        <div className={`movie-cards-container ${isBlurred ? "blur-in" : ""}`}>
            {moviesTMDB.map((movie) => (
                <div key={movie.id} className="movie-card">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
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
    );
}

export default MoviesTMDB;
