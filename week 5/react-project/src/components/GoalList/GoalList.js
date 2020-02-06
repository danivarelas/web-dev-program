import React, { useContext, useEffect } from 'react';
import './GoalList.scss';
import { GoalsContext } from '../../contexts/GoalsContext/GoalsContext';

function GoalList() {

    const { goals } = useContext(GoalsContext);

    useEffect(() => {

    }, [goals]);

    return (
        <div></div>
    );
}

export default GoalList;