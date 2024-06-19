import { useContext, useEffect } from "react";
import EntitiesContext from "../ContextComponent.jsx";
import "./moviesTMDBCards.css"; // Import the CSS file

function MoviesTMDB() {
    const { moviesTMDB, fetchMoviesTMDB } = useContext(EntitiesContext);

    useEffect(() => {
        fetchMoviesTMDB();
    }, []);

    return (
        <div className="movie-cards-container">
            {moviesTMDB.map((movie) => (
                <div key={movie.id} className="movie-card">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <div className="movie-info">
                        <h2>{movie.title}</h2>
                        <p>Vote Average: {movie.vote_average}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MoviesTMDB;
