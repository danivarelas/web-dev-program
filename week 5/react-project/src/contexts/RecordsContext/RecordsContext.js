import React, { createContext, Component } from 'react';

export const RecordsContext = createContext();

class RecordsContextProvider extends Component {

    state = {
        records: []
    };
    
    addRecord = (activity, date, distance, time) => {
        this.setState({
            records: [...this.state.records, {
                activity: activity,
                date: date,
                distance: distance,
                time: time
            }]
        })
    };

    render() {
        return (
            <RecordsContext.Provider value={{
                ...this.state,
                addRecord: this.addRecord
            }}>
                {this.props.children}
            </RecordsContext.Provider>
        );
    }
}

export default RecordsContextProvider;