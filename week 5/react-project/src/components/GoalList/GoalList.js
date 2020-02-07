import React, { useContext, useEffect, useState } from 'react';
import './GoalList.scss';
import { GoalsContext } from '../../contexts/GoalsContext/GoalsContext';

function GoalList(props) {

    const { pending, completed } = useContext(GoalsContext);
    const { isCompleted } = props;
    const [goals,setGoals] = useState([]);

    useEffect(() => {
        if (isCompleted) {
            setGoals(completed);
        } else {
            setGoals(pending);
        }
    }, [pending, completed, goals, isCompleted]);

    if (goals && goals.length) {
        return (
            <div>{goals.map(goal => {
                return (<div>{goal.description}</div>)
            })}</div>
        );
    } else {
        return (
            <div>No goals yet.</div>
        );
    }
}

export default GoalList;