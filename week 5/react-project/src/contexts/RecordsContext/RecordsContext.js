import React, { createContext, Component } from 'react';

export const RecordsContext = createContext();

class RecordsContextProvider extends Component {

    state = {
        runningRecords: [],
        swimmingRecords: [],
        cyclingRecords: [],
        triathlonRecords: []
    };
    
    addRecord = (activity, date, distance, time) => {
        switch (activity) {
            case 'Running':
                this.setState({
                    runningRecords: this.updateRecord(distance, date, time, this.state.runningRecords)
                });
                break;
            case 'Swimming':
                this.setState({
                    swimmingRecords: this.updateRecord(distance, date, time, this.state.swimmingRecords)
                });
                break;
            case 'Cycling':
                this.setState({
                    cyclingRecords: this.updateRecord(distance, date, time, this.state.cyclingRecords)
                });
                break;
            case 'Triathlon':
                this.setState({
                    triathlonRecords: this.updateRecord(distance, date, time, this.state.triathlonRecords)
                });
                break;
            default:
        }
    };

    updateRecord = (distance, date, time, records) => {
        let found = false;
        const oldRecords = records.map(record => {
            if(record.distance === distance) {
                record.date = date;
                record.time = time;
                found = true;
            }
            return record;
        });
        if (!found) {
            const newRecords = [...oldRecords, {
                date: date,
                distance: distance,
                time: time
            }];
            console.log(newRecords + " new records")
            return newRecords;
        }
        console.log(oldRecords + " old records")
        return oldRecords;
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