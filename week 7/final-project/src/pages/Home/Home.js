import React from 'react';
import { useCookies } from 'react-cookie';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {

    const [cookies, setCookies] = useCookies(['JWT']);

    return(
        <div>
            <Navbar/>
        </div>
    );
}

export default Home;