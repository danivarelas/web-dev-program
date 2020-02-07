import React, { useContext } from 'react';
import './GoalListItem.scss';
import { GoalsContext } from '../../contexts/GoalsContext/GoalsContext';

function GoalListItem(props) {

    const { goal } = props;
    const { toggleComplete } = useContext(GoalsContext);
    const buttonGoal = () => {
        if (goal.completed) {
            return (
                <div>
                    <button className="btn btn-danger btn-check" onClick={() => toggleComplete(goal.id)}>
                        <i class="fas fa-times"></i>
                    </button>
                    <span className="goal-text-completed">{goal.description}</span>
                </div>
            );
        } else {
            return (
                <div>
                    <button className="btn btn-success btn-check" onClick={() => toggleComplete(goal.id)}>
                        <i class="fas fa-check"></i>
                    </button>
                    <span className="goal-text">{goal.description}</span>
                </div>
            );
        }
    }

    const item = buttonGoal();

    return (
        <div className="goal-item">
            {item}
        </div>
    );
}

export default GoalListItem;