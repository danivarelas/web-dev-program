import React from 'react';
import './Races.scss';
import RaceList from '../../components/RaceList/RaceList';
import { Link } from 'react-router-dom';

function Races() {

    return (
        <div className="card card-section">
            <div className="card-header section-header">
                <h4 className="card-title">
                    Races
                    <Link to="/dashboard/addRace" className="btn btn-primary btn-add float-right">
                        <i className="fas fa-plus "></i>
                    </Link>
                </h4>
            </div>
            <div className="card-body">  
                <RaceList/>
            </div>
        </div>
    );
}

export default Races;