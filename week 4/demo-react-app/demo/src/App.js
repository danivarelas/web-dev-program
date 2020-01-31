import React from 'react';
import './App.scss';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddAuthor from './pages/AddAuthor';

function App() {
    return (
        <Router>
            <div>
                <NavBar></NavBar>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/author" component={AddAuthor}>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
