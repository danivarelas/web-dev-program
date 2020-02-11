import React, { createContext, Component } from 'react';

export const GoalsContext = createContext();

class GoalsContextProvider extends Component {

    state = {
        allGoals: JSON.parse(localStorage.getItem('allGoals'))
    };

    getGoals = () => {
        return JSON.parse(localStorage.getItem('allGoals'));
    }

    addGoal = (id, date, description, completed) => {
        let goals = JSON.parse(localStorage.getItem('allGoals'));
        let newGoals = [];
        if (goals) {
            newGoals = [...goals, {
                id: id,
                date: date,
                description: description,
                completed: completed
            }];
        } else {
            newGoals = [...newGoals, {
                id: id,
                date: date,
                description: description,
                completed: completed
            }]
        }
        this.setState({ allGoals: newGoals });
        localStorage.setItem('allGoals', JSON.stringify(newGoals));
    };

    toggleComplete = (id) => {
        let goals = JSON.parse(localStorage.getItem('allGoals'));
        const newGoals = goals.map(goal => {
            if (goal.id === id) {
                goal.completed = !goal.completed;
            }
            return goal;
        });
        this.setState({ allGoals: newGoals });
        localStorage.setItem('allGoals', JSON.stringify(newGoals));
    };

    render() {
        return (
            <GoalsContext.Provider value={{
                ...this.state,
                addGoal: this.addGoal,
                toggleComplete: this.toggleComplete
            }}>
                {this.props.children}
            </GoalsContext.Provider>
        );
    }
}

export default GoalsContextProvider;