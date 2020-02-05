import React from 'react';
import './Goals.scss'
import Modal from '../../components/Modal/Modal';

function Goals() {
  
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Goals<button type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModalLong">
                <i className="fas fa-plus "></i>
            </button></h4>
                <hr></hr>
                <p className="card-text">Test</p>
            </div>
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <Modal title="Set a new goal">
                    <p>Modal</p>
                    <p>Data</p>
                </Modal>
            </div>
        </div>
    );
}

export default Goals;