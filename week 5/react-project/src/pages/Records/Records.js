import React from 'react';
import './Records.scss';
import RecordList from '../../components/RecordList/RecordList';
import { Link } from 'react-router-dom';

function Records() {

    return (
        <div className="card card-section">
            <div className="card-header section-header">
                <h4 className="card-title">
                    Records
                    <Link to="/dashboard/addRecord" className="btn btn-primary btn-add float-right">
                        <i className="fas fa-plus "></i>
                    </Link>
                </h4>
            </div>
            <div className="card-body">
                <RecordList></RecordList>
            </div>
        </div>
    );
}

export default Records;