import React, { useContext, useEffect } from 'react';
import './RecordList.scss';
import { RecordsContext } from '../../contexts/RecordsContext/RecordsContext';
import { activityTypes } from '../../utils/variables';
import RecordListItem from '../RecordListItem/RecordListItem';

function RecordList() {

    const { runningRecords,
        swimmingRecords,
        cyclingRecords,
        triathlonRecords } = useContext(RecordsContext);

    useEffect(() => {

    }, [runningRecords, swimmingRecords, cyclingRecords, triathlonRecords]);

    return (
        <div id="accordion">
            <RecordListItem activity={activityTypes[0]} records={cyclingRecords}></RecordListItem>
            <RecordListItem activity={activityTypes[1]} records={runningRecords}></RecordListItem>
            <RecordListItem activity={activityTypes[2]} records={swimmingRecords}></RecordListItem>
            <RecordListItem activity={activityTypes[3]} records={triathlonRecords}></RecordListItem>
        </div>
    );
}

export default RecordList;