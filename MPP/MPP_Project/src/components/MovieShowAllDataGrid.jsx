import { useContext, useState } from 'react';
import MoviesContext from './ContextComponent.jsx';
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
    const { movies, deleteMovie } = useContext(MoviesContext);
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

    // define the columns for the DataGrid
    const columns = [
        { field: 'name', headerName: 'Name', flex: 2 },
        { field: 'year', headerName: 'Year', flex: 1 },
        { field: 'genre', headerName: 'Genre', flex: 2 },
        { field: 'duration', headerName: 'Duration', flex: 1 },
        {
            field: 'action',
            headerName: 'Action',
            flex: 2,
            minWidth: 255,
            sortable: false,
            renderCell: (params) => (
                <strong>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 10 }}
                        onClick={() => {
                            navigate(`/movies/${params.row.id}/details`);
                        }}
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
                    >
                        Delete
                    </Button>
                </strong>
            ),
        },
    ];

    const rows = movies.map((movie) => {
        return {
            id: movie.id,
            name: movie.name,
            year: movie.year,
            genre: movie.genre,
            duration: movie.duration,
            description: movie.description,
        };
    });

    return (
        <div style={{ marginTop: 20 }}>
            <DataGrid
                rows={rows}
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
