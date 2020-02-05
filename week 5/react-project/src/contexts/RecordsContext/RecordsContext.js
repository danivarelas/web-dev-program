import React, { createContext, Component } from 'react';

export const RecordsContext = createContext();

class RecordsContextProvider extends Component {

    state = {
        records: []
    };

    render() {
        return(
            <RecordsContext.Provider value={ {...this.state} }>
                {this.props.children}
            </RecordsContext.Provider>
        );
    }
}

export default RecordsContextProvider;