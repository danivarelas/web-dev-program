import React from 'react';
import './Dashboard.scss';
import { Switch, Route } from 'react-router-dom';
import Races from '../Races/Races';
import Records from '../Records/Records';
import Goals from '../Goals/Goals';
import NavBar from '../../components/NavBar/NavBar';
import GlobalContextProvider from '../../contexts/GlobalContext/GlobalContext';
import DashboardMenu from '../../components/DashboardMenu/DashboardMenu';

function Dashboard() {

    return (
        <GlobalContextProvider>
            <div className="">
                <NavBar/>
                <div className="container main-container">
                    <DashboardMenu/>
                    <div className="row">
                        <Switch>
                            <Route path="/dashboard/races" component={Races} />
                            <Route path="/dashboard/records" component={Records} />
                            <Route path="/dashboard/goals" component={Goals} />
                        </Switch>
                    </div>
                </div>
            </div>
        </GlobalContextProvider>
    );
}

export default Dashboard;