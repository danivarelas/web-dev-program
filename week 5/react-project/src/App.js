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
import GlobalContextProvider from './contexts/GlobalContext/GlobalContext';
import AddRace from './pages/AddRace/AddRace';
import AddRecord from './pages/AddRecord/AddRecord';
import AddGoal from './pages/AddGoal/AddGoal';

function App() {
    return (
        <Router>
            <GlobalContextProvider>
                <div className="App">
                    <Switch>
                        <Route path="/dashboard/addRecord" component={AddRecord} />
                        <Route path="/dashboard/addRace" component={AddRace} />
                        <Route path="/dashboard/addGoal" component={AddGoal} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/calendar" component={Calendar}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
            </GlobalContextProvider>
        </Router>
    );
}

export default App;
