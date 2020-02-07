import React from 'react';
import './RecordListItem.scss';

function RecordListItem(props) {

    const { activity, records } = props;

    const getRecords = () => {
        if (records && records.length) {
            return records.map(record => {
                return (
                    <p>
                        <span className="record-distance">{record.distance}: </span>{record.time}
                    </p>
                );
            });
        } else {
            return (
                <p>You haven't logged any records yet.</p>
            );
        }
    }

    const allRecords = getRecords();

    return (
        <div className="card">
            <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target={`#${activity}Collapse`} aria-expanded="false" aria-controls={`${activity}Collapse`}>
                        {activity} Records
                    </button>
                </h5>
            </div>
            <div id={`${activity}Collapse`} className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                    {allRecords}
                </div>
            </div>
        </div>
    );

}

export default RecordListItem;