import React, { useContext, useState } from 'react';
import './Races.scss';
import RaceList from '../../components/RaceList/RaceList';
import { Link } from 'react-router-dom';
import { RacesContext } from '../../contexts/RacesContext/RacesContext';

function Races() {

    const { allRaces, filterRaces } = useContext(RacesContext);

    const [ races, setRaces ] = useState(allRaces);

    const handleSearchChange = event => {
        if (event.target.value === "") {
            setRaces(allRaces);
        } else {
            const filteredRaces = filterRaces(event.target.value);
            setRaces(filteredRaces);
        }
    };

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
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fas fa-search search-icon"></i></div>
                    </div>
                    <input type="text" className="form-control" onChange={handleSearchChange} placeholder="Search for races..."></input>
                </div>
                <RaceList races={races}/>
            </div>
        </div>
    );
}

export default Races;