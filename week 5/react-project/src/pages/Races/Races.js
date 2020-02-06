import React from 'react';
import './Races.scss';
import RaceList from '../../components/RaceList/RaceList';
import AddRace from '../AddRace/AddRace';

function Races() {

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Races<button type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModalLong">
                    <i className="fas fa-plus "></i>
                </button></h4>
                <RaceList/>
            </div>
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <AddRace></AddRace>
            </div>
        </div>
    );
}

export default Races;