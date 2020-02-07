import React, { useState, useContext } from 'react';
import Modal from '../../components/Modal/Modal';
import { RecordsContext } from '../../contexts/RecordsContext/RecordsContext';
import {
    activityTypes,
    runningDistances,
    swimmingDistances,
    cyclingDistances,
    triathlonDistances
} from '../../utils/variables';

function AddRecord() {

    const [activity, setActivity] = useState("Cycling");
    const [date, setDate] = useState("");
    const [distance, setDistance] = useState(cyclingDistances[0]);
    const [time, setTime] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [customDistances, setCustomDistances] = useState(cyclingDistances);

    const context = useContext(RecordsContext);

    const addRecord = () => {
        let totalSeconds = ( hours * 3600 ) + ( minutes * 60 ) + seconds;
        setTime(totalSeconds);
        context.addRecord(activity, date, distance, time);
    };

    const handleActivityChange = event => {
        let value = event.target.value;
        setActivity(value);
        switch(value) {
            case 'Running':
                setCustomDistances(runningDistances);
                break;
            case 'Swimming':
                setCustomDistances(swimmingDistances);
                break;
            case 'Cycling':
                setCustomDistances(cyclingDistances);
                break;
            case 'Triathlon':
                setCustomDistances(triathlonDistances);
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
        <Modal title="Add new personal record">
            <form>
                <div className="form-group">
                    <label htmlFor="activity">Activity</label>
                    <select className="form-control" id="activity" onChange={handleActivityChange}>
                        {activityTypes.map(type => {
                            return <option>{type}</option>;
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" className="form-control" id="date" onChange={handleDateChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="distance">Distance</label>
                    <select className="form-control" id="distance" onChange={handleDistanceChange}>
                        {customDistances.map(elem => {
                            return <option>{elem}</option>;
                        })}
                    </select>
                </div>
                <div className="form-group">

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="hours">Hours</label>
                            <input type="number" className="form-control" id="hours" placeholder="00" onChange={handleHoursChange} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="minutes">Minutes</label>
                            <input type="number" className="form-control" id="minutes" placeholder="00" onChange={handleMinutesChange} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="seconds">Seconds</label>
                            <input type="number" className="form-control" id="seconds" placeholder="00" onChange={handleSecondsChange} />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="cancel" className="btn btn-danger" data-dismiss="modal">Close</button>
                    <button type="submit" onClick={addRecord} className="btn btn-primary" data-dismiss="modal">Add</button>
                </div>
            </form>
        </Modal>
    );
}

export default AddRecord;