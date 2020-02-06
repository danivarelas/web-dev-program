import React, { createContext, Component } from 'react';

export const RacesContext = createContext();

class RacesContextProvider extends Component {

    state = {
        races: []
    };

    addRace = (name, type, date, distance) => {
        this.setState({
            races: [...this.state.races, {
                name: name,
                type: type,
                date: date,
                distance: distance
            }]
        })
    };

    getRaces = () => {
        return this.state.races;
    }

    render() {
        return (
            <RacesContext.Provider value={{
                ...this.state,
                addRace: this.addRace,
                getRaces: this.getRaces
            }}>
                {this.props.children}
            </RacesContext.Provider>
        );
    }
}

export default RacesContextProvider;
