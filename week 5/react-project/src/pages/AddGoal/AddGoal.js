import React, { useContext, useState } from 'react';
import "./AddGoal.scss";
import { GoalsContext } from '../../contexts/GoalsContext/GoalsContext';
import MenuHeader from '../../components/MenuHeader/MenuHeader';
import NavBar from '../../components/NavBar/NavBar';
import { format } from 'date-fns';

function AddGoal(props) {

    const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
    const [description, setDescription] = useState("");

    const context = useContext(GoalsContext);
    const uuidv4 = require('uuid/v4');

    const addGoal = () => {
        let id = uuidv4();
        
        context.addGoal(id, date, description, false);
        props.history.push("/dashboard");
    };

    const goBack = () => {
        props.history.push("/dashboard");
    };

    const handleDateChange = event => {
        setDate(event.target.value);
    };

    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    };

    return (
        <div>
            <NavBar></NavBar>
            <MenuHeader title="Set a new goal"></MenuHeader>
            <div className="container">
                <div className="card card-form">
                    <form onSubmit={addGoal}>
                        <div className="form-group">
                            <label htmlFor="name">Date</label>
                            <input required type="date" value={date} className="form-control" id="name" onChange={handleDateChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea required className="form-control" id="description" placeholder="Enter goal description here" onChange={handleDescriptionChange} />
                        </div>
                        <div className="modal-footer">
                            <button type="cancel" onClick={goBack} className="btn btn-danger btn-check-form">
                                <i className="fas fa-times"></i>
                            </button>
                            <button type="submit" className="btn btn-success btn-check-form">
                                <i className="fas fa-check"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddGoal;