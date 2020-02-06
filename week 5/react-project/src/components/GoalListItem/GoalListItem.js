import React, { useContext, useEffect } from 'react';
import './GoalListItem.scss';
import { GoalsContext } from '../../contexts/GoalsContext/GoalsContext';

function GoalListItem() {

    const { goals } = useContext(GoalsContext);

    useEffect(() => {

    }, [goals]);

    return (
        <div></div>
    );
}

export default GoalListItem;