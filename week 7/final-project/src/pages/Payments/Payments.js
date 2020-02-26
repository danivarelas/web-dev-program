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

    const [payments, setPayments] = useState([]);
    const [services, setServices] = useState([]);
    const [serviceTypes, setServiceTypes] = useState([]);

    const [cookies] = useCookies(['JWT']);

    if (!validate(cookies.JWT)) {
        history.push("/login");
    }

    useEffect(() => {
        const claims = validate(cookies.JWT);
        if (claims) {
            Axios.get(`http://localhost:8081/api/v1/payment/byUserId/${claims.id}`, {
                headers: { JWT: cookies.JWT }
            }).then(res => {
                const { data } = res;
                setPayments(data);
            }).catch(e => {

            });
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
        }
    }, [cookies]);

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
                            <PaymentsChart chartId="chartByType" payments={payments} serviceTypes={serviceTypes} services={services} isBar={false}/>
                        </div>
                        <div className="col-lg-6 payment-chart">
                            <h4>By Day</h4>
                            <PaymentsChart chartId="chartByDate" payments={payments} serviceTypes={serviceTypes} services={services} isBar={true}/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );

}

export default Payments;