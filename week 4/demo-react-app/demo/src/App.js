import React from 'react';
import './App.scss';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddAuthor from './pages/AddAuthor';
import AuthorList from './pages/AuthorList';
import AddBook from './pages/AddBook';
import BookInfo from './pages/BookInfo';
import BookList from './pages/BookList';
import AuthorInfo from './pages/AuthorInfo';

function App() {
    return (
        <Router>
            <div>
                <NavBar></NavBar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/author" component={AuthorList} />
                    <Route path="/author/:authorId" component={AuthorInfo} />
                    <Route path="/addAuthor" component={AddAuthor} />
                    <Route path="/addBook/:authorId" component={AddBook} />
                    <Route exact path="/book" component={BookList} />
                    <Route path="/book/:bookId" component={BookInfo} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
