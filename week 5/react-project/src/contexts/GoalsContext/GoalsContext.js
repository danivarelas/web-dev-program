import React, { createContext, Component } from 'react';

export const GoalsContext = createContext();

class GoalsContextProvider extends Component {

    state = {
        pending: [],
        completed: []
    };

    addGoal = (date, description, completed) => {
        this.setState({
            pending: [...this.state.pending, {
                date: date,
                description: description,
                completed: completed
            }]
        });
    };

    remove = (items,index) => {
        return [...items.slice(0,index),
                ...items.slice(index+1,items.length)];
    };

    completeGoal = (goal, index) => {
        let newPending = Object.assign({}, this.state.pending);
        newPending = this.remove(newPending, index);
        this.setState({pending: newPending});
        this.setState({
            completed: [...this.state.completed, goal]
        });
    };

    uncompleteGoal = (goal, index) => {
        let newCompleted = Object.assign({}, this.state.completed);
        newCompleted = this.remove(newCompleted, index);
        this.setState({pending: newCompleted});
        this.setState({
            completed: [...this.state.pending, goal]
        });
    };

    render() {
        return (
            <GoalsContext.Provider value={{
                ...this.state,
                addGoal: this.addGoal
            }}>
                {this.props.children}
            </GoalsContext.Provider>
        );
    }
}

export default GoalsContextProvider;