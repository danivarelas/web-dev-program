import React, { createContext, Component } from 'react';

export const RacesContext = createContext();

class RacesContextProvider extends Component {

    state = {
        allRaces: JSON.parse(localStorage.getItem('allRaces')),
        filteredRaces: []
    };

    getRaces = () => {
        return JSON.parse(localStorage.getItem('allRaces'));
    }

    addRace = (name, type, date, distance) => {
        let races = JSON.parse(localStorage.getItem('allRaces'));
        let newRaces = [];
        if (races) {
            newRaces = [...races, {
                name: name,
                type: type,
                date: date,
                distance: distance
            }];
        } else {
            newRaces = [...newRaces, {
                name: name,
                type: type,
                date: date,
                distance: distance
            }];
        }
        this.setState({ allRaces: newRaces });
        localStorage.setItem('allRaces', JSON.stringify(newRaces));
    };

    filterRaces = (filterText) => {
        const races = JSON.parse(localStorage.getItem('allRaces'));
        const text = filterText.toLowerCase()
        const newRaces = races.filter((race) => {
            return race.name.toLowerCase().includes(text);
        });
        return newRaces;
    }

    render() {
        return (
            <RacesContext.Provider value={{
                ...this.state,
                addRace: this.addRace,
                filterRaces: this.filterRaces,
                getRaces: this.getRaces
            }}>
                {this.props.children}
            </RacesContext.Provider>
        );
    }
}

export default RacesContextProvider;
