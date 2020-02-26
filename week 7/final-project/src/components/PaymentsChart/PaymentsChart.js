import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import validate from '../../utils/JWTParser';
import Chart from 'chart.js';

const PaymentsChart = (props) => {

    const history = useHistory();

    const { serviceTypes, services, payments, chartId, isBar } = props;

    const [cookies] = useCookies(['JWT']);

    if (!validate(cookies.JWT)) {
        history.push("/login");
    }

    useEffect(() => {
        if (serviceTypes) {
            let valuesCRC = [serviceTypes.length];
            let titles = [serviceTypes.length];
            for (var i = 0; i < serviceTypes.length; i++) {
                valuesCRC[i] = 0;
                titles[i] = serviceTypes[i].serviceTypeName;
            }
            let paymentsInCRC = [];
            let paymentsInUSD = [];
            if (payments) {
                paymentsInCRC = payments.filter((payment) => payment.currency === "CRC");
                paymentsInUSD = payments.filter((payment) => payment.currency === "USD");

                if (paymentsInCRC && paymentsInCRC.length) {
                    for (var j = 0; j < paymentsInCRC.length; j++) {
                        let payment = paymentsInCRC[j];
                        let amount = parseFloat(payment.amount);
                        let serviceTypeId = services.filter((service) => payment.serviceId === service.id);
                        serviceTypeId = serviceTypeId[0];
                        if (serviceTypeId) {
                            serviceTypeId = serviceTypeId.serviceTypeId;
                            valuesCRC[serviceTypeId - 1] = valuesCRC[serviceTypeId - 1] + amount;
                        }
                    }
                }
            }

            var context = document.getElementById(chartId);
            let options = isBar ? { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } } : {};
            var myChart = new Chart(context, {
                type: 'doughnut',
                data: {
                    labels: titles,
                    datasets: [{
                        label: '# of Votes',
                        data: valuesCRC,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(255, 206, 86, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(153, 102, 255, 0.5)',
                            'rgba(255, 159, 64, 0.5)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: options
            });
        }




    }, [chartId, isBar, payments, serviceTypes, services, cookies]);

    return (
        <canvas id={chartId}></canvas>
    );

}

export default PaymentsChart;