import './App.css';
import AppNavbar from './components/AppNavbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { MoviesProvider } from './components/ContextComponent.jsx';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MovieDetails from './components/MoviesComponents/MovieDetails.jsx';
import MovieAdd from './components/MoviesComponents/MovieAdd.jsx';
import MovieShowAll from './components/MoviesComponents/MovieShowAll.jsx';
import MovieEdit from './components/MoviesComponents/MovieEdit.jsx';
import MovieShowAllDataGrid from './components/MoviesComponents/MovieShowAllDataGrid.jsx';
import ChartByYear from './components/MoviesComponents/MoviesChart.jsx';
import MoviesGenerate from './components/MoviesComponents/MoviesGenerate.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Container style={{ backgroundColor: 'white' }}>
                <AppNavbar />
                <MoviesProvider>
                    <Routes>
                        <Route path="/" element={<MovieShowAll />} />
                        <Route
                            path="/movies"
                            element={<MovieShowAllDataGrid />}
                        />
                        <Route path="/movies/add" element={<MovieAdd />} />
                        <Route
                            path="/movies/:movieId/details"
                            element={<MovieDetails />}
                        />
                        <Route
                            path="/movies/:movieId/edit"
                            element={<MovieEdit />}
                        />
                        <Route path="/movies/chart" element={<ChartByYear />} />
                        <Route
                            path="/movies/generate"
                            element={<MoviesGenerate />}
                        />
                        <Route path="*" element={<h1>Page Not Found</h1>} />
                    </Routes>
                </MoviesProvider>
            </Container>
        </BrowserRouter>
    );
};

export default App;
