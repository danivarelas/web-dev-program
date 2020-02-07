import React from 'react';
import './HomeMenu.scss';
import HomeMenuItem from '../HomeMenuItem/HomeMenuItem';

function HomeMenu() {

    return (
        <div >
            <HomeMenuItem title="Races" description="list of races" link="/races"/>
            <HomeMenuItem title="Goals" description="list of goals" link="/goals"/>
            <HomeMenuItem title="Records" description="list of records" link="/records"/>
        </div>
    );
}

export default HomeMenu;