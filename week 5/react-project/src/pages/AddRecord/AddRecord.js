import React, { useState, useContext } from 'react';
import { RecordsContext } from '../../contexts/RecordsContext/RecordsContext';
import {
    activityTypes,
    runningDistances,
    swimmingDistances,
    cyclingDistances,
    triathlonDistances
} from '../../utils/variables';
import NavBar from '../../components/NavBar/NavBar';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import { format } from 'date-fns';

function AddRecord(props) {

    const [activity, setActivity] = useState("Cycling");
    const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
    const [distance, setDistance] = useState(cyclingDistances[0]);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [customDistances, setCustomDistances] = useState(cyclingDistances);

    const context = useContext(RecordsContext);

    const addRecord = () => {
        const totalSeconds = (hours * 3600) + (minutes * 60) + (seconds * 1);
        context.addRecord(activity, date, distance, totalSeconds);
        props.history.push("/dashboard");
    };

    const goBack = () => {
        props.history.push("/dashboard");
    };

    const handleActivityChange = event => {
        let value = event.target.value;
        setActivity(value);
        switch (value) {
            case 'Running':
                setCustomDistances(runningDistances);
                setDistance(runningDistances[0]);
                break;
            case 'Swimming':
                setCustomDistances(swimmingDistances);
                setDistance(swimmingDistances[0]);
                break;
            case 'Cycling':
                setCustomDistances(cyclingDistances);
                setDistance(cyclingDistances[0]);
                break;
            case 'Triathlon':
                setCustomDistances(triathlonDistances);
                setDistance(triathlonDistances[0]);
                break;
            default:
        }
    };

    const handleDateChange = event => {
        setDate(event.target.value);
    };

    const handleDistanceChange = event => {
        setDistance(event.target.value);
    };

    const handleHoursChange = event => {
        setHours(event.target.value);
    };

    const handleMinutesChange = event => {
        setMinutes(event.target.value);
    };

    const handleSecondsChange = event => {
        setSeconds(event.target.value);
    };

    return (
        <div>
            <NavBar></NavBar>
            <MenuHeader title="Log a new record"></MenuHeader>
            <div className="container">
                <div className="card card-form">
                    <form onSubmit={addRecord}>
                        <div className="form-group">
                            <label htmlFor="activity">Activity</label>
                            <select className="form-control" id="activity" onChange={handleActivityChange}>
                                {activityTypes.map((type, index) => {
                                    if (index === 0) {
                                        return <option key={type} selected>{type}</option>;
                                    } else {
                                        return <option key={type}>{type}</option>;
                                    }
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input required type="date" value={date} className="form-control" id="date" onChange={handleDateChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="distance">Distance</label>
                            <select className="form-control" id="distance" onChange={handleDistanceChange}>
                                {customDistances.map(dist => {
                                    return <option key={dist}>{dist}</option>;
                                })}
                            </select>
                        </div>
                        <div className="form-group">

                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="hours">Hours</label>
                                    <input type="number" min="0" className="form-control" id="hours" placeholder="00" onChange={handleHoursChange} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="minutes">Minutes</label>
                                    <input type="number" min="0" max="59" className="form-control" id="minutes" placeholder="00" onChange={handleMinutesChange} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="seconds">Seconds</label>
                                    <input type="number" min="0" max="59" className="form-control" id="seconds" placeholder="00" onChange={handleSecondsChange} />
                                </div>
                            </div>
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

export default AddRecord;