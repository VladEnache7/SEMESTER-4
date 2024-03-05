// import { useState } from 'react'
//
// import './App.css'
//
// const books = [
//     {id: 1, title: "The Psychology of Money", author: "Morgan Housel", description: "Timeless lessons on wealth, greed, and happiness"},
//     {id: 2, title: "Atomic Habits", author: "James Clear", description: "An easy & proven way to build good habits & break bad ones"},
//     {id: 3, title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson", description: "A guide to wealth and happiness"},
//     {id: 4, title: "The Lean Startup", author: "Eric Ries", description: "How today's entrepreneurs use continuous innovation to create radically successful businesses"},
//     {id: 5, title: "The Four Agreements", author: "Don Miguel Ruiz", description: "A practical guide to personal freedom"},
// ]
//
// function BookList({onBookSelect}) { // when the function is created onBookSelect is set the be the function called when a row is clicked
//     // have the books as rows in a table
//     const bookItems = books.map((book) =>
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
//             <BookList onBookSelect={setSelectedBook} />
//             <BookForm book={selectedBook} />
//         </>
//     )
// }
//
// export default App
import { useState } from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, InputLabel, Input, TextareaAutosize, Typography} from '@mui/material'

import './App.css'

const books = [
    {id: 1, title: "The Psychology of Money", author: "Morgan Housel", description: "Timeless lessons on wealth, greed, and happiness"},
    {id: 2, title: "Atomic Habits", author: "James Clear", description: "An easy & proven way to build good habits & break bad ones"},
    {id: 3, title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson", description: "A guide to wealth and happiness"},
    {id: 4, title: "The Lean Startup", author: "Eric Ries", description: "How today's entrepreneurs use continuous innovation to create radically successful businesses"},
    {id: 5, title: "The Four Agreements", author: "Don Miguel Ruiz", description: "A practical guide to personal freedom"},
    {id: 6, title: "The Power of Now", author: "Eckhart Tolle", description: "A guide to spiritual enlightenment"},
    {id: 7, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", description: "A counterintuitive approach to living a good life"},
    {id: 8, title: "The 5 AM Club", author: "Robin Sharma", description: "Own your morning, elevate your life"},
    {id: 9, title: "The Monk Who Sold His Ferrari", author: "Robin Sharma", description: "A fable about fulfilling your dreams and reaching your destiny"},
    {id: 10, title: "The Miracle Morning", author: "Hal Elrod", description: "The not-so-obvious secret guaranteed to transform your life before 8 am"},
]

function BookList({onBookSelect}) {
    const bookItems = books.map((book) =>
        <TableRow key={book.id} onClick={() => onBookSelect(book)}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.description}</TableCell>
        </TableRow>
    )

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bookItems}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

function BookForm({ book }) {
    if (!book) return null;

    return (
        <div>
            <FormControl>
                <InputLabel >Title</InputLabel>
                <Input value={book.title} readOnly color="secondary" />
            </FormControl>
            <FormControl>
                <InputLabel color="secondary">Author</InputLabel>
                <Input value={book.author} readOnly />
            </FormControl>
            <FormControl>
                <InputLabel color="secondary">Description</InputLabel>
                <TextareaAutosize value={book.description} readOnly />
            </FormControl>
        </div>
    )
}

function App() {
    const [selectedBook, setSelectedBook] = useState(null)

    return (
        <>
            <Typography  variant="h2">Self Help Books</Typography>
            <BookList onBookSelect={setSelectedBook} />
            <BookForm book={selectedBook} />
        </>
    )
}

export default App