// The Movies DataBase

import { useEffect, useState } from 'react';

const AddTMDBdata = () => {
    const [movies, setMovies] = useState([]);
    let index = 0;

    useEffect(() => {
        async function fetchMovies() {
            for (let i = 1; i <= 500; i++) {
                let response = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${i}&with_genres=10402&api_key=46ab06378ab7a7818a8f4c6587ea4816&sort_by=popularity.asc`,
                );

                let data = await response.json();
                console.log(data.results);
                // await new Promise((resolve) => setTimeout(resolve, 2000));
                //     add data to movies only if the index is grater then 10
                if (index % 2 === 0) {
                    setMovies((movies) => [...movies, ...data.results]);
                }

                index += 1;
                console.log(index);
            }
        }

        fetchMovies().then((r) => {
            console.log('done');
            console.log(
                movies.map((movie) => {
                    return {
                        name: movie.title,
                        year: parseInt(movie.release_date.split('-')[0]),
                        // random duration between 1h and 3h
                        duration: `${Math.floor(Math.random() * 3) + 1}h ${Math.floor(Math.random() * 60)}m`,
                        genre: 'Music',
                        description: movie.overview,
                    };
                }),
            );
        });
    }, []); // Empty array means this effect runs once on mount

    // console.log(movies);
};

export default AddTMDBdata;
