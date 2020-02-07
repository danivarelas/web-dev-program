import React from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Calendar from './pages/Calendar/Calendar';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
    return (
        <Router>
            <div className="App">
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
