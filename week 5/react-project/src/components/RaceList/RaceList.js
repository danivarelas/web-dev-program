import React, { useContext, useEffect } from 'react';
import './RaceList.scss';
import { RacesContext } from '../../contexts/RacesContext/RacesContext';
import RaceListItem from '../RaceListItem/RaceListItem';

function RaceList() {

    const { allRaces } = useContext(RacesContext);

    useEffect(() => {

    }, [allRaces]);

    if (allRaces && allRaces.length) {
        return (
            <div className="row">
                {allRaces.map((race) => {
                    return (
                        <RaceListItem race={race}></RaceListItem>
                    );
                })}
            </div>
        );
    } else {
        return (
            <div className="empty-message">
                No races added yet.
            </div>
        );
    }
}

export default RaceList;