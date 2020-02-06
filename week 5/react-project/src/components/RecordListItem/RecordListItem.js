import React, { useContext, useEffect } from 'react';
import './RecordList.scss';
import { RecordsContext } from '../../contexts/RecordsContext/RecordsContext';

function RecordListItem() {

    const { records } = useContext(RecordsContext);

    useEffect(() => {

    }, [records]);

    return (
        <div></div>
    );

    /*return (
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
                {records.map((race) => {
                    return (
                        <RaceListItem race={race}></RaceListItem>
                    );
                })}
            </tbody>
        </table>
    );*/
}

export default RecordListItem;