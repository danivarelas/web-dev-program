import React from 'react';
import './App.scss';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Calendar from './pages/Calendar';
import Races from './pages/Races';
import Records from './pages/Records';
import Goals from './pages/Goals';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <Router>
            <div>
                <NavBar></NavBar>
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/calendar" component={Calendar}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
