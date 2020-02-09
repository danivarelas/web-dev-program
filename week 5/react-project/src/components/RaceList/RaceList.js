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
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Date</th>
                        <th scope="col">Distance</th>
                    </tr>
                </thead>
                <tbody>
                    {allRaces.map((race) => {
                        return (
                            <RaceListItem race={race}></RaceListItem>
                        );
                    })}
                </tbody>
            </table>
        );
    } else {
        return (
            <div>
                No races added yet.
            </div>
        );
    }
}

export default RaceList;