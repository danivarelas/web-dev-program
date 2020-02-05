import React from 'react';
import './Records.scss';
import Modal from '../../components/Modal/Modal';

function Records() {
  
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Records<button type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModalLong">
                <i className="fas fa-plus "></i>
            </button></h4>
                <hr></hr>
                <p className="card-text">Test</p>
            </div>
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <Modal title="Add new personal record">
                    <p>Modal</p>
                    <p>Data</p>
                </Modal>
            </div>
        </div>
    );
}

export default Records;