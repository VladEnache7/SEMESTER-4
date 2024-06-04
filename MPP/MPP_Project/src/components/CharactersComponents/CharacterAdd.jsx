import Container from 'react-bootstrap/Container';
import {
    Autocomplete,
    Box,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    Paper,
    TextField,
} from '@mui/material';
import React, { useContext, useState } from 'react';

import EntitiesContext from './../ContextComponent.jsx';
import { useNavigate } from 'react-router-dom';

function CharacterAdd() {
    const { movies, addCharacter, currentUsername, fetchCharacters } =
        useContext(EntitiesContext);
    let navigate = useNavigate();
    if (!currentUsername) {
        navigate('/');
    }

    // initial state to be the characters
    const [characterName, setCharacterName] = useState('');
    const [characterMovieName, setCharacterMovieName] = useState('');
    const [characterDescription, setCharacterDescription] = useState('');

    function allFieldsFilled() {
        return (
            characterName !== '' &&
            characterMovieName !== '' &&
            characterDescription !== ''
        );
    }

    function handleAddCharacter() {
        addCharacter(characterName, characterMovieName, characterDescription);
        setCharacterName('');
        setCharacterMovieName('');
        setCharacterDescription('');
        fetchCharacters();
        navigate(`/characters`);
    }

    function handleNameChange(event) {
        setCharacterName(event.target.value);
        console.log(characterName);
    }

    function handleMovieNameChange(event, value) {
        setCharacterMovieName(value);
        console.log(characterMovieName);
    }

    function handleDescriptionChange(event) {
        setCharacterDescription(event.target.value);
        console.log(characterDescription);
    }

    return (
        <>
            <Container data-testid="add-character-page">
                <h1 style={{ textAlign: 'center', marginTop: 20 }}>
                    Add Character
                </h1>
                <Box
                    component={Paper}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: 5,
                        marginX: 15,
                        backgroundColor: 'lightblue',
                        borderRadius: 4,
                        padding: 5,

                        //     center the box
                        alignSelf: 'center',
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
                            value={characterName}
                            onChange={handleNameChange}
                            color="secondary"
                            inputProps={{
                                'data-testid': 'character-name-input',
                            }}
                        />
                    </FormControl>

                    <FormControl style={{ marginTop: 7 }}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            sx={{}}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    color="secondary"
                                    inputProps={{
                                        ...params.inputProps,
                                        'data-testid': 'movie-name-input',
                                    }}
                                    label="Movie Name"
                                />
                            )}
                            options={movies.map((movie) => movie.name)}
                            onChange={handleMovieNameChange}
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
                            value={characterDescription}
                            onChange={handleDescriptionChange}
                            color="secondary"
                            inputProps={{
                                'data-testid': 'character-description-input',
                            }}
                        />
                    </FormControl>
                    <Button
                        variant="contained"
                        onClick={handleAddCharacter}
                        color="secondary"
                        style={{ marginTop: 7 }}
                        data-testid="add-character-button"
                        disabled={!allFieldsFilled()}
                    >
                        Add Character
                    </Button>
                </Box>
            </Container>
        </>
    );
}

export default CharacterAdd;
