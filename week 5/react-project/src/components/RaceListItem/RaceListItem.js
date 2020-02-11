import React from 'react';
import './RaceListItem.scss';
import { format } from 'date-fns';

function RaceListItem(props) {

    const { race } = props;

    const chooseIcon = type => {
        switch (type) {
            case 'Running':
                return (
                    <i className="fas fa-running race-icon"></i>
                );
            case 'Cycling':
                return (
                    <i className="fas fa-biking race-icon"></i>
                );
            case 'Swimming':
                return (
                    <i className="fas fa-swimmer race-icon"></i>
                );
            case 'Triathlon':
                return (
                    <div>
                        <i className="fas fa-swimmer race-icon-tri"></i>
                        <i className="fas fa-biking race-icon-tri"></i>
                        <i className="fas fa-running race-icon-tri"></i>
                    </div>
                );
            default:
                break;
        }
    };

    const icon = chooseIcon(race.type);

    return (
        <div className="col-lg-4 col-md-6">
            <div className="race-element">
                {icon}
                <p className="race-title">{race.name}</p>
                <div className="race-info">
                    <p><strong>Date:</strong> {format(new Date(race.date), "MM/dd/yyyy")}</p>
                    <p><strong>Distance:</strong> {race.distance} km</p>
                </div>
            </div>
        </div>
    );
}

export default RaceListItem;