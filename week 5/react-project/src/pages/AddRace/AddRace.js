import React, { useState, useContext } from 'react';
import Modal from '../../components/Modal/Modal';
import { RacesContext } from '../../contexts/RacesContext/RacesContext';
import { activityTypes } from '../../utils/variables';

function AddRace() {

    const [name, setName] = useState("");
    const [distance, setDistance] = useState(0);
    const [date, setDate] = useState("");
    const [type, setType] = useState("");

    const context = useContext(RacesContext);

    const addRace = () => {
        context.addRace(name, type, date, distance);
    };

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleTypeChange = event => {
        setType(event.target.value);
    };

    const handleDateChange = event => {
        setDate(event.target.value);
    };

    const handleDistanceChange = event => {
        setDistance(event.target.value);
    };

    return (
        <Modal title="Add new race">
            <form >
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Race" onChange={handleNameChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="date" className="form-control" id="date" onChange={handleDateChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="type">Type:</label>
                    <select className="form-control" id="type" onChange={handleTypeChange}>
                        {activityTypes.map(type => {
                            return <option>{type}</option>;
                        })}
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
                    <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={addRace}>Add</button>
                </div>
            </form>
        </Modal>
    );
}

export default AddRace;