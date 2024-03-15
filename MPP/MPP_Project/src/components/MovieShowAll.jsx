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
import { useContext, useState } from 'react';
import MoviesContext from './ContextComponent.jsx';

function MovieShowAll() {
  const { movies, deleteMovie } = useContext(MoviesContext);
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  let navigate = useNavigate();

  function handleDeletePopUp(movie) {
    // open a pop up to confirm the delete
    // if confirmed, delete the movie
    // if not, do nothing
    setOpen(true);
    // console.log(movieId);
    setSelectedMovie(movie);
  }

  function handleDeleteMovieConfirmed(movieId) {}

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 3,
        width: 'fit-content',
        margin: 'auto',
        marginTop: 3,
        backgroundColor: 'lightblue',
      }}
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
              <TableCell>{movie.name}</TableCell>
              <TableCell>{movie.year}</TableCell>
              <TableCell>{movie.genre}</TableCell>

              <TableCell>
                <Button
                  variant="contained"
                  size="small"
                  sx={{ margin: 0.5 }}
                  onClick={() => {
                    navigate(`/movies/${movie.id}/details`);
                    // console.log('🚀 ~ MovieShowAll ~ movie.id:', movie.id);
                  }}
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
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}

export default MovieShowAll;
