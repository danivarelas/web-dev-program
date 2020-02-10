import React, { useEffect, useContext } from 'react';
import './GoalList.scss';
import GoalListItem from '../GoalListItem/GoalListItem';
import { GoalsContext } from '../../contexts/GoalsContext/GoalsContext';

function GoalList(props) {

    const { isCompleted, emptyText } = props;
    const { allGoals } = useContext(GoalsContext);

    useEffect(() => {

    }, [allGoals]);

    if (isCompleted) {
        let completedGoals = [];
        if (allGoals && allGoals.length) {
            completedGoals = allGoals.filter(goal => {
                return goal.completed;
            })
        }
        if (completedGoals && completedGoals.length) {
            return (
                <div className="goal-list">
                    {completedGoals.map(goal => {
                            return (
                                <GoalListItem key={goal.id} goal={goal}></GoalListItem>
                            )
                    })}
                </div>
            );
        } else {
            return (
                <div className="empty-message">{emptyText}</div>
            );
        }
    } else {
        let pendingGoals = [];
        if (allGoals && allGoals.length) {
            pendingGoals = allGoals.filter(goal => {
                return !goal.completed;
            })
        }
        if (pendingGoals && pendingGoals.length) {
            return (
                <div className="goal-list">
                    {pendingGoals.map(goal => {
                            return (
                                <GoalListItem key={goal.id} goal={goal}></GoalListItem>
                            )
                    })}
                </div>
            );
        } else {
            return (
                <div className="empty-message">{emptyText} Click on <strong className="bold">+</strong> to set a new goal.</div>
            );
        }
    }
}

export default GoalList;