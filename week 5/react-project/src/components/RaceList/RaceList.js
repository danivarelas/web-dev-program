import React from 'react';
import './RaceList.scss';
import RaceListItem from '../RaceListItem/RaceListItem';

function RaceList(props) {

    const { races } = props;

    if (races && races.length) {
        return (
            <div className="row">
                {races.map((race, index) => {
                    return (
                        <RaceListItem key={race.name + index} race={race}></RaceListItem>
                    );
                })}
            </div>
        );
    } else {
        return (
            <div className="empty-message">
                No races found.
            </div>
        );
    }
}

export default RaceList;