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
import Goals from './pages/Goals';

function App() {
    return (
        <Router>
            <div>
                <NavBar></NavBar>
                <Switch>
                    <Route path="/calendar">
                        <Calendar />
                    </Route>
                    <Route path="/events">
                        <Races />
                    </Route>
                    <Route path="/goals">
                        <Goals />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
