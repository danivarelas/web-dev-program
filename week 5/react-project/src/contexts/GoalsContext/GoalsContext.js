import React, { createContext, Component } from 'react';

export const GoalsContext = createContext();

class GoalsContextProvider extends Component {

    state = {
        allGoals: []
    };

    addGoal = (id, date, description, completed) => {
        this.setState({
            allGoals: [...this.state.allGoals, {
                id: id,
                date: date,
                description: description,
                completed: completed
            }]
        });
    };

    toggleComplete = (id) => {
        const newGoals = this.state.allGoals.map(goal => {
            if(goal.id === id) {
                console.log(goal.completed);
                goal.completed = !goal.completed;
            }
            return goal;
        });
        this.setState({allGoals: newGoals});
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