import React from 'react';
import './Dashboard.scss';
import Races from '../Races/Races';
import Records from '../Records/Records';
import Goals from '../Goals/Goals';
import NavBar from '../../components/NavBar/NavBar';
import MenuHeader from '../../components/MenuHeader/MenuHeader';

function Dashboard() {

    window.scrollTo( 0, 0 );

    return (
        <div>
            <NavBar/>
            <MenuHeader title="Dashboard"/>
            <div className="container main-container">
                
                <div className="row">
                    <Races></Races>
                    <Records></Records>
                    <Goals></Goals>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;