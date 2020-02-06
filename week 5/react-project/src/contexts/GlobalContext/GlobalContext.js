import React from 'react';
import GoalsContextProvider from '../GoalsContext/GoalsContext';
import RecordsContextProvider from '../RecordsContext/RecordsContext';
import RacesContextProvider from '../RacesContext/RacesContext';

function GlobalContextProvider(props) {

    const { children } = props;

    return (
        <GoalsContextProvider>
            <RecordsContextProvider>
                <RacesContextProvider>
                    {children}
                </RacesContextProvider>
            </RecordsContextProvider>
        </GoalsContextProvider>
    );
}

export default GlobalContextProvider;