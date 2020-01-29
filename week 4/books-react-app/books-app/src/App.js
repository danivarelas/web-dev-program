import React from 'react';
import logo from './logo.svg';
import './App.scss';
import BooksListComponent from './pages/Books/BooksListComponent';

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
        'Id',
        'Name',
        'Author',
        'Year'
    ]
    
    let books = [
        {
            id: '1',
            name: 'Harry Potter',
            author: 'J.K. Rowling',
            published: 1997
        },
        {
            id: '2',
            name: 'The Lord Of The Rings',
            author: 'J.R.R. Tolkien',
            published: 1954
        },
        {
            id: '3',
            name: 'The Diary of a Young Girl',
            author: 'Anne Frank',
            published: 1947
        },
        {
            id: '4',
            name: 'The German Girl',
            author: 'Armando Lucas Correa',
            published: 2016
        }
    ]

    return (
        <BooksListComponent headers={headers} data={books}></BooksListComponent>
    );
}

export default App;
