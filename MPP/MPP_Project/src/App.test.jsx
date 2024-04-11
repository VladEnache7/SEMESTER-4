import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import FastAPI from './FastAPI.js';
import { act } from 'react-dom/test-utils';

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

vi.mock('./FastAPI.js', () => ({
    __esModule: true, // this property makes it work
    default: {
        get: vi.fn(() =>
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
        post: vi.fn(() => Promise.resolve({})),
        put: vi.fn(() => Promise.resolve({})),
        delete: vi.fn(() => Promise.resolve({})),
    },
}));

test('FastAPI.get is mocked correctly', async () => {
    const response = await FastAPI.get('/movies');
    expect(response).toEqual({
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
    });
});

test('FastAPI.put is mocked correctly', async () => {
    const response = await FastAPI.put('/movies/1', {
        name: 'Frozen',
        year: 2013,
        genre: 'Animation, Adventure, Comedy',
        duration: '1h 42min',
        description:
            'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain',
    });
    expect(response).toEqual({});
});

test('FastAPI.post is mocked correctly', async () => {
    const response = await FastAPI.post('/movies', {
        name: 'Frozen',
        year: 2013,
        genre: 'Animation, Adventure, Comedy',
        duration: '1h 42min',
        description:
            'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain',
    });
    expect(response).toEqual({});
});

test('FastAPI.delete is mocked correctly', async () => {
    const response = await FastAPI.delete('/movies/1');
    expect(response).toEqual({});
});

test('fetches movies and displays them', async () => {
    // spy on the FastAPI.get function
    const spy = vi.spyOn(FastAPI, 'get');

    render(<App />);
    const homePageElement = screen.getByTestId('movies-table-container');
    expect(homePageElement).toBeInTheDocument();

    // expected "wrap" to be called at least once
    expect(FastAPI.get).toHaveBeenCalled();

    // check if the movies are displayed
    const movieNameElements = screen.getAllByTestId('movie-name');
    expect(movieNameElements.length).toBe(2);

    const movieYearElements = screen.getAllByTestId('movie-year');
    expect(movieYearElements.length).toBe(2);

    const movieGenreElements = screen.getAllByTestId('movie-genre');
    expect(movieGenreElements.length).toBe(2);
});

test('add movie works', () => {
    const spy = vi.spyOn(FastAPI, 'post');

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

    // Check if the post function was called
    expect(FastAPI.post).toHaveBeenCalled();

    const homePageElement = screen.getByTestId('movies-table-container');
    expect(homePageElement).toBeInTheDocument();
});

test('edit movie works', () => {
    const spy = vi.spyOn(FastAPI, 'put');

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
    act(() => {
        fireEvent.click(updateMovieButtonElement);
    });

    const homePageElementAfterEdit = screen.getByTestId(
        'movies-table-container',
    );
    expect(homePageElementAfterEdit).toBeInTheDocument();

    // Check if the post function was called
    expect(FastAPI.put).toHaveBeenCalled();
});

test('details button works', async () => {
    // spy on the FastAPI.get function
    const spy = vi.spyOn(FastAPI, 'get');
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
    //console.log(firstMovie);

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

    // expected "wrap" to be called at least once
    expect(FastAPI.get).toHaveBeenCalled();
});

test('delete movie works', () => {
    const spy = vi.spyOn(FastAPI, 'delete');

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

    // expected "wrap" to be called at least once
    expect(FastAPI.delete).toHaveBeenCalled();
});
