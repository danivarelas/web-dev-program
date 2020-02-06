import React, { createContext, Component } from 'react';

export const GoalsContext = createContext();

class GoalsContextProvider extends Component {

    state = {
        goals: []
    };

    addGoal = (date, description) => {
        this.setState({
            goals: [...this.state.goals, {
                date: date,
                description: description
            }]
        })
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