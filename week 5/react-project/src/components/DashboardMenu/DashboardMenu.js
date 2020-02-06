import React from 'react';
import { Link } from 'react-router-dom';
//import './HomeMenu.scss';

function DashboardMenu() {

    return (
        <div>
            <hr />
            <div className="row">
                <div className="col">
                    <Link className="link" to="/dashboard/races">Races</Link>
                </div>
                <div className="col">
                    <Link className="link" to="/dashboard/records">Records</Link>
                </div>
                <div className="col">
                    <Link className="link" to="/dashboard/goals">Goals</Link>
                </div>
                <div className="col">
                    <Link className="link" to="/dashboard/workouts">Workouts</Link>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default DashboardMenu;