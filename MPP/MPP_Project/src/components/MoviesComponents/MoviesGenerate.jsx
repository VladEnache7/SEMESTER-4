import {
    Box,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    Paper,
} from '@mui/material';
import Container from 'react-bootstrap/Container';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import EntitiesContext from './../ContextComponent.jsx';

function MoviesGenerate() {
    const { generateMovies, currentUsername } = useContext(EntitiesContext);

    const [numberOfMovies, setNumberOfMovies] = React.useState(0);
    let navigate = useNavigate();
    if (!currentUsername) {
        navigate('/');
    }

    const handleGenerateMovies = () => {
        generateMovies(numberOfMovies);
        navigate('/');
    };

    return (
        <Container data-testid="add-movie-page">
            <h1 style={{ textAlign: 'center', marginTop: 20 }}>
                Generate Movies
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
                    <InputLabel htmlFor="component-outlined" color="secondary">
                        Number of movies
                    </InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        label="NumberOfMovies"
                        type={'number'}
                        value={numberOfMovies}
                        onChange={(e) => setNumberOfMovies(e.target.value)}
                        color="secondary"
                        inputProps={{
                            'data-testid': 'number-movies-generate-input',
                        }}
                    />
                </FormControl>
                <Button
                    variant="contained"
                    onClick={handleGenerateMovies}
                    color="secondary"
                    style={{ marginTop: 7 }}
                    data-testid="generate-movies-button"
                    disabled={numberOfMovies <= 0}
                >
                    Generate every sec
                </Button>
            </Box>
        </Container>
    );
}

export default MoviesGenerate;
