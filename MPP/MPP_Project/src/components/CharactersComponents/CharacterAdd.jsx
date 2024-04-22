import Container from 'react-bootstrap/Container';
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    Paper,
} from '@mui/material';
import React, { useContext, useState } from 'react';

import CharactersContext from './../ContextComponent.jsx';
import { useNavigate } from 'react-router-dom';

function CharacterAdd() {
    const { addCharacter } = useContext(CharactersContext);
    let navigate = useNavigate();
    // initial state to be the characters
    const [characterName, setCharacterName] = useState('');
    const [characterAge, setCharacterAge] = useState(0);
    const [characterRole, setCharacterRole] = useState('');
    const [characterDescription, setCharacterDescription] = useState('');

    function allFieldsFilled() {
        return (
            characterName !== '' &&
            characterRole !== '' &&
            characterDescription !== ''
        );
    }

    function handleAddCharacter() {
        addCharacter(
            characterName,
            characterAge,
            characterRole,
            characterDescription,
        );
        setCharacterName('');
        setCharacterAge(0);
        setCharacterRole('');
        setCharacterDescription('');
        navigate(`/`);
    }

    function handleNameChange(event) {
        setCharacterName(event.target.value);
    }

    function handleAgeChange(event) {
        setCharacterAge(event.target.value);
    }

    function handleRoleChange(event) {
        setCharacterRole(event.target.value);
    }

    function handleDescriptionChange(event) {
        setCharacterDescription(event.target.value);
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
                        backgroundColor: 'lightblue',
                        borderRadius: 4,
                        padding: 5,
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
                        <InputLabel
                            htmlFor="component-outlined"
                            color="secondary"
                        >
                            Age
                        </InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            label="Age"
                            type={'number'}
                            value={characterAge}
                            onChange={handleAgeChange}
                            color="secondary"
                            inputProps={{
                                'data-testid': 'character-age-input',
                            }}
                        />
                    </FormControl>

                    <FormControl style={{ marginTop: 7 }}>
                        <InputLabel
                            htmlFor="component-outlined"
                            color="secondary"
                        >
                            Role
                        </InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            label="Role"
                            value={characterRole}
                            onChange={handleRoleChange}
                            color="secondary"
                            inputProps={{
                                'data-testid': 'character-role-input',
                            }}
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
