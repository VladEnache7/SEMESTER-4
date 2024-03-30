import { render, screen, fireEvent } from '@testing-library/react';
import MovieShowAllDataGrid from './MovieShowAllDataGrid.jsx';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

let history;
let route;

beforeEach(() => {
    history = createMemoryHistory();
    route = '/movies';
    history.push(route);
});

test('renders without crashing', (routes, opts) => {
    render(
        <Router location={history.location} navigator={history}>
            <MovieShowAllDataGrid />,
        </Router>,
    );
    const linkElement = screen.getByTestId('movies-table-container-grid');
    expect(linkElement).toBeInTheDocument();
});

// data grid has problems rendering the rows while testing
// test('details button navigates to the correct page', () => {
//     render(
//         <Router location={history.location} navigator={history}>
//             <MovieShowAllDataGrid />,
//         </Router>,
//     );
//     const detailsButton = screen.getAllByTestId('details-button')[0];
//     fireEvent.click(detailsButton);
//     expect(history.location.pathname).toBe('/movies/undefined/details');
// });
