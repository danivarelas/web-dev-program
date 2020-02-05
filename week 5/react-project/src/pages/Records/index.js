import React from 'react';
import Modal from '../../components/Modal';

function Records() {
  
    return (
        <div>
            <div className="card-body">
                <h4 className="card-title">Records<button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModalLong">
                <i className="fas fa-plus "></i>
            </button></h4>
                <hr></hr>
                <p className="card-text">Test</p>
            </div>
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <Modal title="Add new personal record">
                    <p>Modal</p>
                    <p>Data</p>
                </Modal>
            </div>
        </div>
    );
}

export default Records;