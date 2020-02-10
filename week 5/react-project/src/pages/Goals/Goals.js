import React from 'react';
import './Goals.scss'
import GoalList from '../../components/GoalList/GoalList';
import { Link } from 'react-router-dom';

function Goals() {

    return (
        <div className="card">
            <div className="card-header section-header">
                <h4 className="card-title">
                    Goals
                    <Link to="/dashboard/addGoal" className="btn btn-primary btn-add float-right">
                        <i className="fas fa-plus"></i>
                    </Link>
                </h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="col-goals">
                            <h5 className="goals-title">Pending</h5>
                            <hr></hr>
                            <GoalList isCompleted={false} emptyText="You don't have any goals yet."></GoalList>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="col-goals">
                            <h5 className="goals-title">Completed</h5>
                            <hr></hr>
                            <GoalList isCompleted={true} emptyText="You haven't completed any goals."></GoalList>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Goals;