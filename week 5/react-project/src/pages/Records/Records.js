import React from 'react';
import './Records.scss';
import AddRecord from '../AddRecord/AddRecord';
import RecordList from '../../components/RecordList/RecordList';

function Records() {

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Records<button type="button" className="btn btn-primary btn-add float-right" data-toggle="modal" data-target="#exampleModalLong">
                    <i className="fas fa-plus"></i>
                </button></h4>
                <hr></hr>
                <RecordList></RecordList>
            </div>
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <AddRecord></AddRecord>
            </div>
        </div>
    );
}

export default Records;