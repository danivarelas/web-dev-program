import React from 'react';
import './style.scss';
import { Link, Switch, Route } from 'react-router-dom';
import Races from '../Races';
import Records from '../Records';
import Goals from '../Goals';

function Dashboard() {

    return (
        <div >
            <div className="row">
                <div className="col">
                    <div className="container my-5">
                        <div>
                            <ul class="list-group">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <Link to="/dashboard/races"><span>Races</span> <span className="badge badge-primary badge-pill">14</span></Link>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <Link to="/dashboard/records">Records <span class="badge badge-primary badge-pill">2</span></Link>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <Link to="/dashboard/goals">Goals <span class="badge badge-primary badge-pill">5</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="container my-5">
                        <div>
                            <Switch>
                                <Route path="/dashboard/races" component={Races}/>
                                <Route path="/dashboard/records" component={Records}/>
                                <Route path="/dashboard/goals" component={Goals}/>
                            </Switch>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;