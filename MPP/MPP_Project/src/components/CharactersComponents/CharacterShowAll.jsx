import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import EntitiesContext from './../ContextComponent.jsx';
import Alert from '@mui/material/Alert';

function CharacterShowAll() {
    const { characters, deleteCharacter, error, currentUsername } =
        useContext(EntitiesContext);
    const [open, setOpen] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState({});
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        function updateOnlineStatus() {
            setIsOnline(navigator.onLine);
        }

        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        };
    }, []);

    if (!isOnline) {
        return (
            <Alert severity="error" style={{ marginTop: 30 }}>
                You are not connected to the internet
            </Alert>
        );
    }

    // for navigation between pages
    let navigate = useNavigate();
    if (!currentUsername) {
        navigate('/');
    }

    function handleDeletePopUp(character) {
        // open a pop up to confirm the delete
        // if confirmed, delete the character
        // if not, do nothing
        setOpen(true);
        setSelectedCharacter(character);
    }

    if (error) {
        // use an alert to show the error
        return (
            <Alert severity="error" style={{ marginTop: 30 }}>
                {error}
            </Alert>
        );
    }

    return (
        <TableContainer
            component={Paper}
            sx={{
                borderRadius: 3,
                width: 'fit-content',
                margin: 'auto',
                marginTop: 3,
                marginBottom: 10,
                backgroundColor: 'lightblue',
            }}
            data-testid="characters-table-container"
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: 20 }}>
                            Name
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: 20 }}>
                            Movie Name
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: 20 }}>
                            Action
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {characters.map((character) => (
                        <TableRow key={character.id}>
                            <TableCell data-testid="character-name">
                                {character.name}
                            </TableCell>
                            <TableCell data-testid="character-age">
                                {character.movieName}
                            </TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{ margin: 0.5 }}
                                    onClick={() => {
                                        navigate(
                                            `/characters/${character.id}/details`,
                                        );
                                    }}
                                    data-testid="details-button"
                                >
                                    Details
                                </Button>
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{ margin: 0.5 }}
                                    onClick={() => {
                                        navigate(
                                            `/characters/${character.id}/edit`,
                                        );
                                    }}
                                    data-testid="edit-button"
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{ margin: 0.5 }}
                                    onClick={() => {
                                        handleDeletePopUp(character);
                                    }}
                                    data-testid="delete-button"
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                BackdropProps={{ invisible: true }}
            >
                <DialogTitle>Delete Character</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete "{selectedCharacter.name}"?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>No</Button>
                    <Button
                        onClick={() => {
                            setOpen(false);
                            deleteCharacter(selectedCharacter.id);
                        }}
                        data-testid="confirm-delete-button"
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </TableContainer>
    );
}

export default CharacterShowAll;
