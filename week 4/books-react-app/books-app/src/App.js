import React from 'react';
import logo from './logo.svg';
import './App.scss';
import BooksList from './pages/BooksList';

function App() {
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
    let headers = [
        'Select',
        'Name',
        'Author',
        'Year'
    ]
    
    let books = [
        {
            id: '1',
            name: 'Harry Potter',
            author: 'J.K. Rowling',
            year: 1997
        },
        {
            id: '2',
            name: 'The Lord Of The Rings',
            author: 'J.R.R. Tolkien',
            year: 1954
        },
        {
            id: '3',
            name: 'The Diary of a Young Girl',
            author: 'Anne Frank',
            year: 1947
        },
        {
            id: '4',
            name: 'The German Girl',
            author: 'Armando Lucas Correa',
            year: 2016
        }
    ]

    return (
        <BooksList headers={headers} data={books}></BooksList>
    );
}

export default App;
