import React from 'react';
import './Records.scss';
import AddRecord from '../AddRecord/AddRecord';
import RecordList from '../../components/RecordList/RecordList';

function Records() {

    return (
        <div className="card">
            <div className="card-header section-header">
                <h4 className="card-title">
                Records
                <button type="button" className="btn btn-primary btn-add float-right" data-toggle="modal" data-target="#recordsModal">
                    <i className="fas fa-plus "></i>
                </button></h4>
            </div>
            <div className="card-body">
                <RecordList></RecordList>
            </div>
            <div className="modal fade" id="recordsModal" tabIndex="-1" role="dialog" aria-labelledby="recordsModalTitle" aria-hidden="true">
                <AddRecord></AddRecord>
            </div>
        </div>
    );
}

export default Records;