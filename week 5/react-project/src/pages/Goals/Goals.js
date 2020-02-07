import React from 'react';
import './Goals.scss'
import AddGoal from '../AddGoal/AddGoal';
import GoalList from '../../components/GoalList/GoalList';

function Goals() {

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Goals<button type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModalLong">
                    <i className="fas fa-plus "></i>
                </button></h4>
                <hr></hr>
                <div className="row">
                    <div className="col">
                        <h5>Pending</h5>
                        <GoalList isCompleted={false}></GoalList>
                    </div>
                    <div className="col">
                        <h5>Completed</h5>
                        <GoalList isCompleted={true}></GoalList>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <AddGoal></AddGoal>
            </div>
        </div>
    );
}

export default Goals;