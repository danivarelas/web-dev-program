import React from 'react';
import './Goals.scss'
import AddGoal from '../AddGoal/AddGoal';
import GoalList from '../../components/GoalList/GoalList';

function Goals() {

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">
                    Goals
                    <button type="button" className="btn btn-primary btn-add float-right" data-toggle="modal" data-target="#exampleModalLong">
                        <i className="fas fa-plus"></i>
                    </button>
                </h4>
                <hr></hr>
                <div className="row">
                    <div className="col">
                        <h5 className="goals-title">Pending</h5>
                        <hr></hr>
                        <GoalList isCompleted={false} emptyText="You haven't set any goals yet.
                        Click on '+' to set a new goal."></GoalList>
                    </div>
                    <div className="col">
                        <h5 className="goals-title">Completed</h5>
                        <hr></hr>
                        <GoalList isCompleted={true} emptyText="You haven't completed any goals."></GoalList>
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