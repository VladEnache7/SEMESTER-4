import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CharactersContext from './../ContextComponent.jsx';
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
import Alert from '@mui/material/Alert';
import Container from 'react-bootstrap/Container';

function CharacterEdit() {
    const { movies, characters, editCharacter } = useContext(CharactersContext);
    const navigate = useNavigate();

    // take the character id from the url
    let { id } = useParams();

    id = parseInt(id);
    const character = characters.find((character) => character.id === id);

    const [name, setName] = useState('');
    const [movieName, setMovieName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (character) {
            setName(character.name);
            setMovieName(character.movieName);
            setDescription(character.description);
        }
    }, [character]);

    function characterUnchanged() {
        return (
            name === character.name &&
            movieName === character.movieName &&
            description === character.description
        );
    }

    function handleEditCharacter() {
        editCharacter(id, name, movieName, description);
        navigate(`/characters/${id}/details`);
    }

    return (
        <Container data-testid="edit-character-page">
            <h1 style={{ textAlign: 'center', marginTop: 20 }}>
                Edit Character
            </h1>
            <Box
                component={Paper}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 5,
                    backgroundColor: 'lightblue',
                    borderRadius: 4,
                    padding: 5,
                }}
                data-testid="character-edit-container"
            >
                <FormControl style={{ marginTop: 7 }}>
                    <InputLabel htmlFor="component-outlined" color="secondary">
                        Name
                    </InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        color="secondary"
                        inputProps={{ 'data-testid': 'character-name-input' }}
                    />
                </FormControl>
                <FormControl style={{ marginTop: 7 }}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        value={movieName}
                        isOptionEqualToValue={(option, value) =>
                            option === value
                        }
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
                        onChange={(e, value) => setMovieName(value)}
                    />
                </FormControl>
                <FormControl style={{ marginTop: 7 }}>
                    <InputLabel htmlFor="component-outlined" color="secondary">
                        Description
                    </InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        color="secondary"
                        inputProps={{
                            'data-testid': 'character-description-input',
                        }}
                    />
                </FormControl>
                <Button
                    variant="contained"
                    onClick={handleEditCharacter}
                    color="secondary"
                    style={{ marginTop: 7 }}
                    data-testid="edit-character-button"
                    disabled={characterUnchanged()}
                >
                    Edit Character
                </Button>
            </Box>
        </Container>
    );
}

export default CharacterEdit;
