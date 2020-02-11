import React from 'react';
import './CalendarFooter.scss'

function CalendarFooter() {
    return (
        <div className="card-flex">
            <h5>Labels Description</h5>
            <span className="badge badge-pill badge-success">Completed Goals</span>
            <span className="badge badge-pill badge-danger">Pending Goals</span>
            <span className="badge badge-pill badge-warning">Records</span>
            <span className="badge badge-pill badge-info">Running Races</span>
            <span className="badge badge-pill badge-purple">Cycling Races</span>
            <span className="badge badge-pill badge-primary">Swimming Races</span>
            <span className="badge badge-pill badge-dark">Triathlon Races</span>
        </div>
    );
};

export default CalendarFooter;