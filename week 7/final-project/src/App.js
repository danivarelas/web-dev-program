import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Login from './pages/Login/Login';
import { withCookies } from 'react-cookie';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/users" component={Users} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default withCookies(App);
