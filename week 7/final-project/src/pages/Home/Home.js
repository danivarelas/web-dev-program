import React from 'react';
import { useCookies } from 'react-cookie';
import Navbar from '../../components/Navbar/Navbar';
import './Home.scss';

const Home = () => {

    const [cookies, setCookies] = useCookies(['JWT']);

    return(
        <div className="page-container">
            <Navbar/>
        </div>
    );
}

export default Home;