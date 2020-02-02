import React from 'react';
import './App.scss';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddAuthor from './pages/AddAuthor';
import AuthorList from './pages/AuthorList';
import AddBook from './pages/AddBook';

function App() {
    return (
        <Router>
            <div>
                <NavBar></NavBar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/author" component={AuthorList} />
                    <Route path="/addAuthor" component={AddAuthor} />
                    <Route path="/addBook/:authorId" component={AddBook} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
