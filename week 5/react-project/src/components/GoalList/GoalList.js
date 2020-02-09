import React, { useEffect, useState, useContext } from 'react';
import './GoalList.scss';
import GoalListItem from '../GoalListItem/GoalListItem';
import { GoalsContext } from '../../contexts/GoalsContext/GoalsContext';

function GoalList(props) {

    const { isCompleted, emptyText } = props;
    const { allGoals } = useContext(GoalsContext);

    useEffect(() => {

    }, [allGoals]);

    if (allGoals && allGoals.length) {
        if (isCompleted) {
            return (
                <div className="goal-list">
                    {allGoals.map(goal => {
                        if (goal.completed) {
                            return (
                                <GoalListItem key={goal.id} goal={goal}></GoalListItem>
                            )
                        }
                    })}
                </div>
            );
        } else {
            return (
                <div className="goal-list">
                    {allGoals.map(goal => {
                        if (!goal.completed) {
                            return (
                                <GoalListItem key={goal.id} goal={goal}></GoalListItem>
                            )
                        }
                    })}
                </div>
            );
        }
        
    } else {
        return (
            <div>{emptyText}</div>
        );
    }
}

export default GoalList;