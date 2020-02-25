import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory, Link } from 'react-router-dom';
import validate from '../../utils/JWTParser';
import Navbar from '../../components/Navbar/Navbar';
import './Payments.scss'
import Axios from 'axios';
import PaymentsChart from '../../components/PaymentsChart/PaymentsChart';

const Payments = () => {

    const history = useHistory();

    const [services, setServices] = useState([]);
    const [serviceTypes, setServiceTypes] = useState([]);

    const [cookies] = useCookies(['JWT']);

    if (!validate(cookies.JWT)) {
        history.push("/login");
    }

    useEffect(() => {
        Axios.get(`http://localhost:8081/api/v1/service`, {
            headers: { JWT: cookies.JWT }
        }).then(res => {
            const { data } = res;
            setServices(data);
        }).catch(e => {

        });
        Axios.get(`http://localhost:8081/api/v1/serviceType`, {
            headers: { JWT: cookies.JWT }
        }).then(res => {
            const { data } = res;
            setServiceTypes(data);
            
        }).catch(e => {

        });
    }, [cookies]);

    let values = [serviceTypes.length];
    for (var i=0; i<serviceTypes.length; i++){
        values[i] = serviceTypes.filter(type => type.id === i).length;
    }

    return (
        <div class="wrapper">
            <div id="content">
                <Navbar />
                <div>
                    <h2 className="page-title">All Payments</h2>
                </div>
                <div className="block-section container">
                    <div className="block-section-header">
                        <div className="block-section-header-edit">
                            <Link to="/payments/payServices" className="btn btn-outline-secondary">Pay Services</Link>
                        </div>
                        <h3 className="block-section-header-text">Monthly Payments Overview</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 payment-chart">
                            <h4>By Service Type</h4>
                            <PaymentsChart chartId="chartByType"/>
                        </div>
                        <div className="col-lg-6 payment-chart">
                            <h4>By Day</h4>
                            <PaymentsChart chartId="chartByDate"/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );

}

export default Payments;