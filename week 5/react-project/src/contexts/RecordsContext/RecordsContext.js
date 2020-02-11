import React, { createContext, Component } from 'react';

export const RecordsContext = createContext();

class RecordsContextProvider extends Component {

    state = {
        runningRecords: JSON.parse(localStorage.getItem('runningRecords')),
        swimmingRecords: JSON.parse(localStorage.getItem('swimmingRecords')),
        cyclingRecords: JSON.parse(localStorage.getItem('cyclingRecords')),
        triathlonRecords: JSON.parse(localStorage.getItem('triathlonRecords'))
    };
    
    addRecord = (activity, date, distance, time) => {
        let records = [];
        switch (activity) {
            case 'Running':
                records = JSON.parse(localStorage.getItem('runningRecords'));
                records = this.updateRecord(activity, date, distance, time, records);
                this.setState({ runningRecords: records });
                localStorage.setItem('runningRecords', JSON.stringify(records));
                break;
            case 'Swimming':
                records = JSON.parse(localStorage.getItem('swimmingRecords'));
                records = this.updateRecord(activity, date, distance, time, records);
                this.setState({ swimmingRecords: records });
                localStorage.setItem('swimmingRecords', JSON.stringify(records));
                break;
            case 'Cycling':
                records = JSON.parse(localStorage.getItem('cyclingRecords'));
                records = this.updateRecord(activity, date, distance, time, records);
                this.setState({ cyclingRecords: records });
                localStorage.setItem('cyclingRecords', JSON.stringify(records));
                break;
            case 'Triathlon':
                records = JSON.parse(localStorage.getItem('triathlonRecords'));
                records = this.updateRecord(activity, date, distance, time, records);
                this.setState({ triathlonRecords: records });
                localStorage.setItem('triathlonRecords', JSON.stringify(records));
                break;
            default:
        }
    };

    updateRecord = (activity, date, distance, time, records) => {
        let found = false;
        let newRecords = [];
        if (records) {
            newRecords = records.map(record => {
                if(record.distance === distance) {
                    record.date = date;
                    record.time = time;
                    found = true;
                }
                return record;
            });
        }
        if (!found) {
            newRecords = [...newRecords, {
                activity: activity,
                date: date,
                distance: distance,
                time: time
            }];
        }
        return newRecords;
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