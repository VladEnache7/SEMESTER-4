import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CharactersContext from './../ContextComponent.jsx';
import { Box, Paper, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';

function CharacterDetails() {
    const { characters, error, currentUsername } =
        useContext(CharactersContext);
    let navigate = useNavigate();
    if (!currentUsername) {
        navigate('/');
    }

    let { id } = useParams();
    id = parseInt(id);
    const character = characters.find((character) => character.id === id);

    if (!character) {
        return (
            <Alert severity="info" style={{ marginTop: 30 }}>
                Loading character...
            </Alert>
        );
    }

    return (
        <div data-testid="details-page">
            <h1 style={{ textAlign: 'center', marginTop: 15 }}>
                Character Details
            </h1>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 2,
                    backgroundColor: 'lightblue',
                    borderRadius: 4,
                    padding: 5,
                }}
            >
                <p>
                    <b>Name:</b> {character.name}
                </p>
                <p>
                    <b>ID:</b> {id}
                </p>
                <p>
                    <b>Movie Name:</b> {character.movieName}
                </p>
                <p>
                    <b>Description:</b> {character.description}
                </p>
            </Box>
        </div>
    );
}

export default CharacterDetails;
