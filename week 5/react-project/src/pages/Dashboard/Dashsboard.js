import React from 'react';
import './Dashboard.scss';
import { Link, Switch, Route } from 'react-router-dom';
import Races from '../Races/Races';
import Records from '../Records/Records';
import Goals from '../Goals/Goals';
import NavBar from '../../components/NavBar/NavBar';
import RacesContextProvider from '../../contexts/RacesContext/RacesContext';

function Dashboard() {

    return (
        <RacesContextProvider>
            <div className="full">
                <NavBar></NavBar>
                <div className="container main-container">
                    <div className="row">
                        <div className="col">
                            <div className="container">
                                <div>
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/dashboard/races">Races</Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/dashboard/records">Records</Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/dashboard/goals">Goals</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="container">
                                <div>
                                    <Switch>
                                        <Route path="/dashboard/races" component={Races} />
                                        <Route path="/dashboard/records" component={Records} />
                                        <Route path="/dashboard/goals" component={Goals} />
                                    </Switch>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </RacesContextProvider>
    );
}

export default Dashboard;