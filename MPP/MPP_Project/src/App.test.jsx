import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import MovieContext from './components/ContextComponent';

test('renders without crashing', () => {
    render(<App />);
    const linkElement = screen.getByText(/Disney Movies/i);
    expect(linkElement).toBeInTheDocument();
});

test('links to (add movie page) and (home page) works', () => {
    render(<App />);
    const addMovieLinkElement = screen.getByTestId('add-movie-link');
    fireEvent.click(addMovieLinkElement);
    const addMoviePageElement = screen.getByTestId('add-movie-page');
    expect(addMoviePageElement).toBeInTheDocument();

    const homeLinkElement = screen.getByTestId('home-link');
    fireEvent.click(homeLinkElement);
    const homePageElement = screen.getByTestId('movies-table-container');
    expect(homePageElement).toBeInTheDocument();
});

vi.mock('FastAPI.js', () => ({
    getMovies: vi.fn(() =>
        Promise.resolve({
            data: [
                {
                    id: 1,
                    name: 'Frozen',
                    year: 2013,
                    genre: 'Animation, Adventure, Comedy',
                    duration: '1h 42min',
                    description:
                        'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain',
                },
                {
                    id: 2,
                    name: 'Frozen 2',
                    year: 2019,
                    genre: 'Animation, Adventure, Comedy',
                    duration: '1h 43min',
                    description:
                        'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain',
                },
            ],
        }),
    ),
    deleteMovie: vi.fn(() => Promise.resolve({})),
    addMovie: vi.fn(() => Promise.resolve({})),
    editMovie: vi.fn(() => Promise.resolve({})),
}));

test('fetches movies and displays them', async () => {
    render(<App />);
    const homePageElement = screen.getByTestId('movies-table-container');
    expect(homePageElement).toBeInTheDocument();

    const movieNameElement = screen.getByText('Frozen');
    expect(movieNameElement).toBeInTheDocument();
});

global.fetch = vi.fn();
function createFetchResponse(data) {
    return { json: () => new Promise((resolve) => resolve(data)) };
}

test('makes a POST request to create a todo', async () => {
    render(<App />);
    const addMovieLinkElement = screen.getByTestId('add-movie-link');
    fireEvent.click(addMovieLinkElement);
    const addMoviePageElement = screen.getByTestId('add-movie-page');
    expect(addMoviePageElement).toBeInTheDocument();

    // Fill in the form
    const movieNameInput = screen.getByTestId('movie-name-input');
    fireEvent.change(movieNameInput, { target: { value: 'Test Movie' } });
    expect(movieNameInput.value).toBe('Test Movie');

    const movieYearInput = screen.getByTestId('movie-year-input');
    fireEvent.change(movieYearInput, { target: { value: 2013 } });
    expect(movieYearInput.value).toBe('2013');

    const movieDurationInput = screen.getByTestId('movie-duration-input');
    fireEvent.change(movieDurationInput, { target: { value: '1h 42min' } });
    expect(movieDurationInput.value).toBe('1h 42min');

    const movieGenreInput = screen.getByTestId('movie-genre-input');
    fireEvent.change(movieGenreInput, {
        target: { value: 'Animation, Adventure, Comedy' },
    });
    expect(movieGenreInput.value).toBe('Animation, Adventure, Comedy');

    const movieDescriptionInput = screen.getByTestId('movie-description-input');
    fireEvent.change(movieDescriptionInput, {
        target: {
            value: 'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain',
        },
    });

    // Mock the fetch function
    global.fetch = vi.fn().mockResolvedValueOnce(createFetchResponse({}));

    // Submit the form
    const addMovieButtonElement = screen.getByTestId('add-movie-button');
    fireEvent.click(addMovieButtonElement);
    expect(fetch).toHaveBeenCalledTimes(1);

    // Check if the movie was added without using the movies context
    const movieRowElement = screen.getByText('Test Movie');
    expect(movieRowElement).toBeInTheDocument();
});

test('add movie works', () => {
    render(<App />);
    const addMovieLinkElement = screen.getByTestId('add-movie-link');
    fireEvent.click(addMovieLinkElement);
    const addMoviePageElement = screen.getByTestId('add-movie-page');
    expect(addMoviePageElement).toBeInTheDocument();

    // Fill in the form
    const movieNameInput = screen.getByTestId('movie-name-input');
    fireEvent.change(movieNameInput, { target: { value: 'Test Movie' } });
    expect(movieNameInput.value).toBe('Test Movie');

    const movieYearInput = screen.getByTestId('movie-year-input');
    fireEvent.change(movieYearInput, { target: { value: 2013 } });
    expect(movieYearInput.value).toBe('2013');

    const movieDurationInput = screen.getByTestId('movie-duration-input');
    fireEvent.change(movieDurationInput, { target: { value: '1h 42min' } });
    expect(movieDurationInput.value).toBe('1h 42min');

    const movieGenreInput = screen.getByTestId('movie-genre-input');
    fireEvent.change(movieGenreInput, {
        target: { value: 'Animation, Adventure, Comedy' },
    });
    expect(movieGenreInput.value).toBe('Animation, Adventure, Comedy');

    const movieDescriptionInput = screen.getByTestId('movie-description-input');
    fireEvent.change(movieDescriptionInput, {
        target: {
            value: 'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain',
        },
    });

    // Submit the form
    const addMovieButtonElement = screen.getByTestId('add-movie-button');
    fireEvent.click(addMovieButtonElement);

    const homePageElement = screen.getByTestId('movies-table-container');
    expect(homePageElement).toBeInTheDocument();
    const movieRowElement = screen.getByText('Test Movie');
    expect(movieRowElement).toBeInTheDocument();
});

test('edit movie works', () => {
    render(<App />);
    const homeLinkElement = screen.getByTestId('home-link');
    fireEvent.click(homeLinkElement);
    const homePageElement = screen.getByTestId('movies-table-container');
    expect(homePageElement).toBeInTheDocument();

    const editButtonElement = screen.getAllByTestId('edit-button')[0];
    fireEvent.click(editButtonElement);

    const editMoviePageElement = screen.getByTestId('edit-movie-page');
    expect(editMoviePageElement).toBeInTheDocument();

    const movieNameInput = screen.getByTestId('movie-name-input');
    fireEvent.change(movieNameInput, { target: { value: 'Frozen 2' } });
    expect(movieNameInput.value).toBe('Frozen 2');

    const movieYearInput = screen.getByTestId('movie-year-input');
    fireEvent.change(movieYearInput, { target: { value: 2019 } });
    expect(movieYearInput.value).toBe('2019');

    const movieDurationInput = screen.getByTestId('movie-duration-input');
    fireEvent.change(movieDurationInput, { target: { value: '1h 43min' } });
    expect(movieDurationInput.value).toBe('1h 43min');

    const movieGenreInput = screen.getByTestId('movie-genre-input');
    fireEvent.change(movieGenreInput, {
        target: { value: 'Animation, Adventure, Comedy' },
    });
    expect(movieGenreInput.value).toBe('Animation, Adventure, Comedy');

    const movieDescriptionInput = screen.getByTestId('movie-description-input');
    fireEvent.change(movieDescriptionInput, {
        target: {
            value: 'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain',
        },
    });

    const updateMovieButtonElement = screen.getByTestId('update-movie-button');
    fireEvent.click(updateMovieButtonElement);

    const homePageElementAfterEdit = screen.getByTestId(
        'movies-table-container',
    );
    expect(homePageElementAfterEdit).toBeInTheDocument();
    const movieRowElement = screen.getByText('Frozen 2');
    expect(movieRowElement).toBeInTheDocument();
});

test('details button works', async () => {
    render(<App />);
    const homeLinkElement = screen.getByTestId('home-link');
    fireEvent.click(homeLinkElement);

    const homePageElement = screen.getByTestId('movies-table-container');
    expect(homePageElement).toBeInTheDocument();

    // get the data about the first movie from the row
    const firstMovie = {
        name: screen.getAllByTestId('movie-name')[0].textContent,
        year: screen.getAllByTestId('movie-year')[0].textContent,
        genre: screen.getAllByTestId('movie-genre')[0].textContent,
    };
    console.log(firstMovie);

    // click the details button on the first movie
    const detailsButtonElement = screen.getAllByTestId('details-button')[0];
    fireEvent.click(detailsButtonElement);

    // check if the details page is displayed
    const detailsPageElement = screen.getByTestId('details-page');
    expect(detailsPageElement).toBeInTheDocument();

    // check if the details of the first movie are displayed
    const movieNameElement = screen.getByText(firstMovie.name);
    expect(movieNameElement).toBeInTheDocument();
    const movieYearElement = screen.getByText(firstMovie.year);
    expect(movieYearElement).toBeInTheDocument();
    const movieGenreElement = screen.getByText(firstMovie.genre);
    expect(movieGenreElement).toBeInTheDocument();
});

test('delete movie works', () => {
    render(<App />);
    const homeLinkElement = screen.getByTestId('home-link');
    fireEvent.click(homeLinkElement);
    const homePageElement = screen.getByTestId('movies-table-container');
    expect(homePageElement).toBeInTheDocument();

    // get the name of the first movie from the row
    const movieName = screen.getAllByTestId('movie-name')[0].textContent;

    const deleteButtonElement = screen.getAllByTestId('delete-button')[0];
    fireEvent.click(deleteButtonElement);

    const confirmDeleteButtonElement = screen.getByTestId(
        'confirm-delete-button',
    );
    fireEvent.click(confirmDeleteButtonElement);

    const homePageElementAfterDelete = screen.getByTestId(
        'movies-table-container',
    );
    expect(homePageElementAfterDelete).toBeInTheDocument();
    const movieRowElement = screen.queryByText(movieName);
    expect(movieRowElement).not.toBeInTheDocument();
});
