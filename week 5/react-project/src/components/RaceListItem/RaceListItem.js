import React from 'react';
import './RaceListItem.scss';

function RaceListItem(props) {

    const { race } = props;

    return (
        <tr>
            <td>{race.name}</td>
            <td>{race.type}</td>
            <td>{race.date}</td>
            <td>{race.distance}</td>
        </tr>
    );
}

export default RaceListItem;