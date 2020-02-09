import React from 'react';
import './Races.scss';
import RaceList from '../../components/RaceList/RaceList';
import AddRace from '../AddRace/AddRace';

function Races() {

    return (
        <div className="card">
            <div className="card-header section-header">
                <h4 className="card-title">
                Races
                <button type="button" className="btn btn-primary btn-add float-right" data-toggle="modal" data-target="#racesModal">
                    <i className="fas fa-plus "></i>
                </button></h4>
            </div>
            <div className="card-body">
                
                <RaceList/>
            </div>
            <div className="modal fade" id="racesModal" tabIndex="-1" role="dialog" aria-labelledby="racesModalTitle" aria-hidden="true">
                <AddRace></AddRace>
            </div>
        </div>
    );
}

export default Races;