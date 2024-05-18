import './App.css';
import AppNavbar from './components/AppNavbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { EntitiesProvider } from './components/ContextComponent.jsx';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MovieDetails from './components/MoviesComponents/MovieDetails.jsx';
import MovieAdd from './components/MoviesComponents/MovieAdd.jsx';
import MovieShowAll from './components/MoviesComponents/MovieShowAll.jsx';
import MovieEdit from './components/MoviesComponents/MovieEdit.jsx';
import MovieShowAllDataGrid from './components/MoviesComponents/MovieShowAllDataGrid.jsx';
import ChartByYear from './components/MoviesComponents/MoviesChart.jsx';
import MoviesGenerate from './components/MoviesComponents/MoviesGenerate.jsx';
import CharacterShowAll from './components/CharactersComponents/CharacterShowAll.jsx';
import CharacterAdd from './components/CharactersComponents/CharacterAdd.jsx';
import CharacterDetails from './components/CharactersComponents/CharacterDetails.jsx';
import CharacterEdit from './components/CharactersComponents/CharacterEdit.jsx';
import LoginSide from './components/LoginRegister/LoginSide.jsx';
import Register from './components/LoginRegister/Register.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Container style={{ backgroundColor: 'white' }}>
                <EntitiesProvider>
                    <AppNavbar />
                    <Routes>
                        <Route path="/" element={<LoginSide />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/movies" element={<MovieShowAll />} />
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
                        <Route
                            path="/characters"
                            element={<CharacterShowAll />}
                        />
                        <Route
                            path="/characters/add"
                            element={<CharacterAdd />}
                        />
                        <Route
                            path="/characters/:id/details"
                            element={<CharacterDetails />}
                        />
                        <Route
                            path="/characters/:id/edit"
                            element={<CharacterEdit />}
                        />

                        <Route path="*" element={<h1>Page Not Found</h1>} />
                    </Routes>
                </EntitiesProvider>
            </Container>
        </BrowserRouter>
    );
};

export default App;
