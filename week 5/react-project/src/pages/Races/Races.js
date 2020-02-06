import React, { useState, useEffect, useContext } from 'react';
import './Races.scss';
import Modal from '../../components/Modal/Modal';
import RaceList from '../../components/RaceList/RaceList';
import { RacesContext } from '../../contexts/RacesContext/RacesContext';

function Races() {

    const [name, setName] = useState("");
    const [distance, setDistance] = useState(0);
    const [date, setDate] = useState(new Date());
    const [type, setType] = useState("");

    const { addRace } = useContext(RacesContext);

    const addNewRace = () => {
        addRace(name, type, date, distance);
    };

    const handleNameChange = event => {
        setName(event.target.value);
    }

    const handleTypeChange = event => {
        setType(event.target.value);
    }

    const handleDateChange = event => {
        setDate(event.target.value);
    }

    const handleDistanceChange = event => {
        setDistance(event.target.value);
    }

    useEffect(() => {

    }, []);

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Races<button type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModalLong">
                    <i className="fas fa-plus "></i>
                </button></h4>
                <RaceList/>
            </div>
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <Modal title="Add new race">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Race" onChange={handleNameChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <input type="date" className="form-control" id="date" onChange={handleDateChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type:</label>
                            <select className="form-control" id="type" onChange={handleTypeChange}>
                                <option>Bike</option>
                                <option>Swim</option>
                                <option>Run</option>
                                <option>Triathlon</option>
                                <option>Duathlon</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="distance">Distance</label>
                            <div className="form-row">
                                <div className="form-group col-md-9">
                                    <input type="number" className="form-control" id="distance" placeholder="1" onChange={handleDistanceChange} />
                                </div>
                                <div className="form-group col-md-3">
                                    <select className="form-control" >
                                        <option>km</option>
                                        <option>mi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="cancel" className="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="submit" onClick={addNewRace} className="btn btn-primary" data-dismiss="modal">Add</button>
                        </div>
                    </form>
                </Modal>
            </div>
        </div>
    );
}

export default Races;