import React, { useState, useEffect } from 'react';
import './RecordListItem.scss';

function RecordListItem(props) {

    const { activity, records } = props;
    const [selected, setSelected] = useState(false);
    const [buttonClass, setButtonClass] = useState("");

    useEffect(() => {
        selected ? setButtonClass("btn btn-open collapsed selected float-right") : setButtonClass("btn btn-open collapsed float-right");
    }, [buttonClass, selected]);

    const formatTime = timeInSeconds => {
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        if (timeInSeconds >= 3600) {
            hours = Math.floor(timeInSeconds / 3600);
            minutes = timeInSeconds - (hours * 3600);
            minutes = Math.floor(minutes / 60);
            seconds = timeInSeconds - (hours * 3600) - (minutes * 60);
        } else if (timeInSeconds >= 60 && timeInSeconds < 3600) {
            minutes = Math.floor(timeInSeconds / 60);
            seconds = timeInSeconds - (minutes * 60);
        } else if (timeInSeconds < 60) {
            seconds = timeInSeconds;
        }
        return (
            <span>{hours} h {minutes} min {seconds} s</span>
        );
    }

    const getRecords = () => {
        if (records && records.length) {
            return records.map(record => {
                const time = formatTime(record.time);
                return (
                    <div key={record.distance} className="col-lg-3 col-md-6">
                        <div className="record-element">
                        <p className="record-distance"><i className="fas fa-medal record-icon"></i> {record.distance}</p>
                        {time}
                    </div>
                    </div>
                );
            });
        } else {
            return (
                <p className="empty-message">You haven't logged any <span className="text-lowercase">{activity}</span> records yet.</p>
            );
        }
    }

    const allRecords = getRecords();

    return (
        <div className="card card-accordion">
            <div className="card-header" id={`${activity}Heading`}>
                <h5 className="accordion-title">
                    <span className="font-weight-bold align-middle">{activity} Records</span>
                    <button onClick={ () => {setSelected(!selected)}} className={buttonClass} data-toggle="collapse" data-target={`#${activity}Collapse`} aria-expanded="false" aria-controls={`${activity}Collapse`}>
                        <i className="fas fa-chevron-circle-up"></i>
                    </button>
                </h5>
            </div>
            <div id={`${activity}Collapse`} className="collapse" aria-labelledby={`${activity}Heading`} data-parent={`#accordion${activity}`}>
                <div className="card-body">
                    <div className="row">
                        {allRecords}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default RecordListItem;