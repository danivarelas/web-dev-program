import React from 'react';
import Modal from '../../components/Modal';

function Races() {

    return (
        <div>
            <div className="card-body">
                <h4 className="card-title">Races<button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModalLong">
                    <i className="fas fa-plus "></i>
                </button></h4>
                <hr></hr>
                <p className="card-text">Test</p>
            </div>
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <Modal title="Add new race">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" id="name" placeholder="Race" />
                    </div>
                    <div class="form-group">
                        <label for="type">Type:</label>
                        <select class="form-control" id="type">
                            <option>Bike</option>
                            <option>Swim</option>
                            <option>Run</option>
                            <option>Triathlon</option>
                            <option>Duathlon</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="distance">Distance</label>
                        <div className="form-row">
                            
                            <div className="form-group col-md-9">
                            <input type="number" className="form-control" id="distance" placeholder="1" />
                            </div>
                            <div className="form-group col-md-3">
                            <select class="form-control " id="type">
                                <option>km</option>
                                <option>mi</option>
                            </select>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Races;