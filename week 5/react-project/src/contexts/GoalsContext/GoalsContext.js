import React, { createContext, Component } from 'react';

export const GoalsContext = createContext();

class GoalsContextProvider extends Component {

    state = {
        goals: []
    };

    render() {
        return(
            <GoalsContext.Provider value={ {...this.state} }>
                {this.props.children}
            </GoalsContext.Provider>
        );
    }
}

export default GoalsContextProvider;