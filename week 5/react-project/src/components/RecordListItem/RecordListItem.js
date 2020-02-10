import React from 'react';
import './RecordListItem.scss';

function RecordListItem(props) {

    const { activity, records } = props;

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
            <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                    <button className="btn btn-open collapsed" data-toggle="collapse" data-target={`#${activity}Collapse`} aria-expanded="false" aria-controls={`${activity}Collapse`}>
                        {activity} Records
                    </button>
                </h5>
            </div>
            <div id={`${activity}Collapse`} className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
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