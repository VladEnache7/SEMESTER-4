import Container from "react-bootstrap/Container";
import {Box, Button, FormControl, InputLabel, OutlinedInput, Paper} from "@mui/material";
import React, {useContext, useState} from "react";

import MoviesContext from "./ContextComponent.jsx";
import {useNavigate} from "react-router-dom";


function MovieAdd() {
    const {addMovie} = useContext(MoviesContext);
    let navigate = useNavigate();
    // initial state to be the movies
    const [movieName, setMovieName] = useState('');
    const [movieYear, setMovieYear] = useState(2010);
    const [movieDuration, setMovieDuration] = useState('');
    const [movieGenre, setMovieGenre] = useState('');
    const [movieDescription, setMovieDescription] = useState('');

    function handleAddMovie() {
        addMovie(movieName, movieYear, movieDuration, movieGenre, movieDescription);
        setMovieName("");
        setMovieYear(2010);
        setMovieDuration("");
        setMovieGenre("");
        setMovieDescription("");
        navigate(`/movies`);
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
            <Container>
                <h1 style={{textAlign: 'center'}}>Add Movie</h1>
                {/*Have the box centered*/}
                <Box component={Paper} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 5,
                    backgroundColor: "lightblue",
                    borderRadius: 4,
                    padding: 5
                }}>

                    <FormControl style={{marginTop: 7}}>
                        <InputLabel htmlFor="component-outlined" color="secondary">Name</InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            label="Name"
                            value={movieName}
                            onChange={handleNameChange}
                            color="secondary"
                        />
                    </FormControl>
                    <FormControl style={{marginTop: 7}}>
                        <InputLabel htmlFor="component-outlined" color="secondary">Year</InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            label="Year"
                            type={"number"}
                            value={movieYear}
                            onChange={handleYearChange}
                            color="secondary"
                        />
                    </FormControl>

                    <FormControl style={{marginTop: 7}}>
                        <InputLabel htmlFor="component-outlined" color="secondary">Genre</InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            label="Genre"
                            value={movieGenre}
                            onChange={handleGenreChange} color="secondary"
                        />
                    </FormControl>

                    <FormControl style={{marginTop: 7}}>
                        <InputLabel htmlFor="component-outlined" color="secondary">Duration</InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            label="Duration"
                            value={movieDuration}
                            onChange={handleDurationChange} color="secondary"
                        />
                    </FormControl>

                    <FormControl style={{marginTop: 7}}>
                        <InputLabel htmlFor="component-outlined" color="secondary">Description</InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            label="Description"
                            value={movieDescription}
                            onChange={handleDescriptionChange} color="secondary"
                        />
                    </FormControl>
                    <Button variant="contained" onClick={handleAddMovie} color="secondary" style={{marginTop: 7}}>Add
                        Movie</Button>
                </Box>
            </Container>
        </>
    )
}

export default MovieAdd;
