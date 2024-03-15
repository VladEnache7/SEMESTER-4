// import { useState } from 'react'
//
// import './App.css'
//
// const movies = [
//     {id: 1, title: "The Psychology of Money", author: "Morgan Housel", description: "Timeless lessons on wealth, greed, and happiness"},
//     {id: 2, title: "Atomic Habits", author: "James Clear", description: "An easy & proven way to build good habits & break bad ones"},
//     {id: 3, title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson", description: "A guide to wealth and happiness"},
//     {id: 4, title: "The Lean Startup", author: "Eric Ries", description: "How today's entrepreneurs use continuous innovation to create radically successful businesses"},
//     {id: 5, title: "The Four Agreements", author: "Don Miguel Ruiz", description: "A practical guide to personal freedom"},
// ]
//
// function MovieList({onBookSelect}) { // when the function is created onBookSelect is set the be the function called when a row is clicked
//     // have the movies as rows in a table
//     const bookItems = movies.map((book) =>
//         <tr key={book.id} onClick={() => onBookSelect(book)}>
//             <td>{book.title}</td>
//             <td>{book.author}</td>
//             <td>{book.description}</td>
//         </tr>
//     )
//    
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Title</th>
//                     <th>Author</th>
//                     <th>Description</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {bookItems}
//             </tbody>
//         </table>
//     )
// }
//
// function BookForm({ book }) { // the BookForm is updated every time setSelectedBook is called
//     if (!book) return null;
//
//     return (
//         <form>
//             <label>
//                 <p>Title: </p> 
//                 <input type="text" value={book.title} readOnly />
//             </label>
//             <label>
//                 <p>Author:</p>
//                 <input type="text" value={book.author} readOnly />
//             </label>
//             <label>
//                 <p>Description:</p>
//                 <textarea value={book.description} readOnly/>
//                
//             </label>
//         </form>
//     )
// }
//
//
// function App() {
//     const [selectedBook, setSelectedBook] = useState(null)
//
//     return (
//         <>
//             <h1>Self Help Books</h1>
//             <MovieList onBookSelect={setSelectedBook} />
//             <BookForm book={selectedBook} />
//         </>
//     )
// }
//
// export default App
import './App.css'
import AppNavbar from "./components/AppNavbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import {MoviesProvider} from "./components/ContextComponent.jsx";
import {Route, Routes} from "react-router-dom";
import MovieDetails from "./components/MovieDetails.jsx";
import MovieAdd from "./components/MovieAdd.jsx";
import MovieShowAll from "./components/MovieShowAll.jsx";
import MovieEdit from "./components/MovieEdit.jsx";


const App = () => {

    return (
        <Container style={{backgroundColor: "white"}}>
            <AppNavbar/>
            <MoviesProvider>
                <Routes>
                    <Route path="/" element={<MovieShowAll/>}/>
                    <Route path="/movies" element={<MovieShowAll/>}/>
                    <Route path="/movies/add" element={<MovieAdd/>}/>
                    <Route path="/movies/:movieId/details" element={<MovieDetails/>}/>
                    <Route path="/movies/:movieId/edit" element={<MovieEdit/>}/>
                </Routes>
            </MoviesProvider>
        </Container>
    )
}

export default App