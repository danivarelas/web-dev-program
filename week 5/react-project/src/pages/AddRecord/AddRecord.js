import React, { useState, useContext } from 'react';
import Modal from '../../components/Modal/Modal';
import { RecordsContext } from '../../contexts/RecordsContext/RecordsContext';

function AddRecord() {

    const [activity, setActivity] = useState("");
    const [date, setDate] = useState("");
    const [distance, setDistance] = useState(0);
    const [time, setTime] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const context = useContext(RecordsContext);

    const addRecord = () => {
        context.addRecord(activity, date, distance, time);
    };

    const handleActivityChange = event => {
        setActivity(event.target.value);
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
                        <option>Bike</option>
                        <option>Swim</option>
                        <option>Run</option>
                        <option>Triathlon</option>
                        <option>Duathlon</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" className="form-control" id="date" onChange={handleDateChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="distance">Distance</label>
                    <select className="form-control" id="distance" onChange={handleDistanceChange}>
                        <option>100m</option>
                        <option>200m</option>
                        <option>1/4 mile</option>
                        <option>1/2 mile</option>
                        <option>1k</option>
                        <option>1 milw</option>
                        <option>5k</option>
                        <option>10k</option>
                        <option>Half marathon</option>
                        <option>Marathon</option>
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