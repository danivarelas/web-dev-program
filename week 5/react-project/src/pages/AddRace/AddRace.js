import React, { useState, useContext } from 'react';
import "./AddRace.scss";
import { RacesContext } from '../../contexts/RacesContext/RacesContext';
import { activityTypes } from '../../utils/variables';
import NavBar from '../../components/NavBar/NavBar';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import { format } from 'date-fns';

function AddRace(props) {

    const [name, setName] = useState("");
    const [distance, setDistance] = useState(0);
    const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
    const [type, setType] = useState("Cycling");

    const context = useContext(RacesContext);

    const addRace = () => {
        context.addRace(name, type, date, distance);
        props.history.push("/dashboard");
    };

    const goBack = () => {
        props.history.push("/dashboard");
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
        <div>
            <NavBar></NavBar>
            <MenuHeader title="Add a new race"></MenuHeader>
            <div className="container">
                <div className="card card-form">
                    <form onSubmit={addRace}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input required type="text" className="form-control" id="name" placeholder="Race" onChange={handleNameChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <input required type="date" value={date} className="form-control" id="date" onChange={handleDateChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type:</label>
                            <select className="form-control" id="type" onChange={handleTypeChange}>
                                {activityTypes.map(type => {
                                    return <option key={type}>{type}</option>;
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="distance">Distance in km:</label>
                            <input required type="number" min="0.1" step="any" className="form-control" id="distance" placeholder="1" onChange={handleDistanceChange} />
                        </div>
                        <div className="modal-footer">
                            <button type="cancel" onClick={goBack} className="btn btn-danger btn-check-form">
                                <i className="fas fa-times"></i>
                            </button>
                            <button type="submit" className="btn btn-success btn-check-form">
                                <i className="fas fa-check"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddRace;