import { useContext, useState } from 'react';
import EntitiesContext from './../ContextComponent.jsx';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
function MovieShowAllDataGrid() {
    // get the movies from the context
    const { movies, deleteMovie, currentUsername } = useContext(EntitiesContext);
    const [open, setOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({});

    function handleDeletePopUp(movie) {
        // open a pop up to confirm the delete
        // if confirmed, delete the movie
        // if not, do nothing
        setOpen(true);
        setSelectedMovie(movie);
    }

    // for navigation between pages
    let navigate = useNavigate();
    if (!currentUsername) {
        navigate('/');
    }

    // define the columns for the DataGrid
    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 2,
            renderCell: (params) => (
                <div data-testid="movie-name-grid">{params.value}</div>
            ),
        },
        {
            field: 'year',
            headerName: 'Year',
            flex: 1,
            renderCell: (params) => (
                <div data-testid="movie-year-grid">{params.value}</div>
            ),
        },
        {
            field: 'genre',
            headerName: 'Genre',
            flex: 2,
            renderCell: (params) => (
                <div data-testid="movie-genre-grid">{params.value}</div>
            ),
        },

        { field: 'duration', headerName: 'Duration', flex: 1 },
        {
            renderCell: (params) => (
                <div data-testid="action-buttons">
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 10 }}
                        onClick={() => {
                            navigate(`/movies/${params.row.id}/details`);
                        }}
                        data-testid="details-button"
                    >
                        Details
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 10 }}
                        onClick={() => {
                            navigate(`/movies/${params.row.id}/edit`);
                        }}
                        data-testid="edit-button"
                    >
                        Edit
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 10 }}
                        onClick={() => {
                            handleDeletePopUp(params.row);
                        }}
                        data-testid="delete-button"
                    >
                        Delete
                    </Button>
                </div>
            ),
            field: 'action',
            headerName: 'Action',
            flex: 2,
            minWidth: 255,
            sortable: false,
        },
    ];

    return (
        <div style={{ marginTop: 20 }}>
            <DataGrid
                data-testid="movies-table-container-grid"
                rows={movies}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[5, 10, 20]}
                sx={{
                    backgroundColor: 'lightblue',
                    borderRadius: 4,
                    '& .MuiDataGrid-columnHeaderTitle': {
                        color: 'black',
                        // have the text bold and bigger
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                }}
            />
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
        </div>
    );
}

export default MovieShowAllDataGrid;
