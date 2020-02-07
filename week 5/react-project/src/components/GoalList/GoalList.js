import React, { useContext, useEffect, useState } from 'react';
import './GoalList.scss';
import { GoalsContext } from '../../contexts/GoalsContext/GoalsContext';
import GoalListItem from '../GoalListItem/GoalListItem';

function GoalList(props) {

    const { allGoals } = useContext(GoalsContext);
    const { isCompleted, emptyText } = props;
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        if (isCompleted) {
            setGoals(allGoals.filter(goal => {
                return goal.completed === true;
            }));
        } else {
            setGoals(allGoals.filter(goal => {
                return goal.completed === false;
            }));
        }
    }, [allGoals, isCompleted]);

    if (goals && goals.length) {
        return (
            <div className="goal-list">
                {goals.map(goal => {
                    return (
                        <GoalListItem goal={goal}></GoalListItem>
                    )
                })}
            </div>
        );
    } else {
        return (
            <div>{emptyText}</div>
        );
    }
}

export default GoalList;