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
    let headers = {
        h1: 'Id',
        h2: 'Name',
        h3: 'Author',
        h4: 'Year'
    }
    let books = {
        book1: {
            id: '1',
            name: 'Harry Potter',
            author: 'J.K. Rowling',
            published: 1997
        },
        book2: {
            id: '2',
            name: 'The Lord Of The Rings',
            author: 'J.K. Rowling',
            published: 1954
        }
    }
    return (
        <BooksListComponent headers={headers} data={books}></BooksListComponent>
    );
}

export default App;
