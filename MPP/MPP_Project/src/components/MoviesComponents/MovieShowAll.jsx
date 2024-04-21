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
    TablePagination,
    TableRow,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import MoviesContext from './../ContextComponent.jsx';
import Alert from '@mui/material/Alert';

function MovieShowAll() {
    const { movies, deleteMovie, getMovies, error } = useContext(MoviesContext);
    const [open, setOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({});
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

    function handleDeletePopUp(movie) {
        // open a pop up to confirm the delete
        // if confirmed, delete the movie
        // if not, do nothing
        setOpen(true);
        // console.log(movieId);
        setSelectedMovie(movie);
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
            data-testid="movies-table-container"
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: 20 }}>
                            Name
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: 20 }}>
                            Year
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: 20 }}>
                            Genre
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: 20 }}>
                            Action
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {movies.map((movie) => (
                        <TableRow key={movie.id}>
                            <TableCell data-testid="movie-name">
                                {movie.name}
                            </TableCell>
                            <TableCell data-testid="movie-year">
                                {movie.year}
                            </TableCell>
                            <TableCell data-testid="movie-genre">
                                {movie.genre}
                            </TableCell>

                            <TableCell>
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{ margin: 0.5 }}
                                    onClick={() => {
                                        navigate(`/movies/${movie.id}/details`);
                                        // console.log('🚀 ~ MovieShowAll ~ movie.id:', movie.id);
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
                                        navigate(`/movies/${movie.id}/edit`);
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
                                        handleDeletePopUp(movie);
                                        // console.log(movie.id);
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
                <DialogTitle>Delete Movie</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete "{selectedMovie.name}"?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>No</Button>
                    <Button
                        onClick={() => {
                            setOpen(false);
                            deleteMovie(selectedMovie.id);
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

export default MovieShowAll;
