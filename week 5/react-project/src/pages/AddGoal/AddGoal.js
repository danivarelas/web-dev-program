import React, { useContext, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import { GoalsContext } from '../../contexts/GoalsContext/GoalsContext';

function AddGoal() {

    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    const context = useContext(GoalsContext);

    const addGoal = () => {
        context.addGoal(date, description);
    };

    const handleDateChange = event => {
        setDate(event.target.value);
    };

    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    };

    return (
        <Modal title="Set new goal">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Date</label>
                    <input type="date" className="form-control" id="name" onChange={handleDateChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" placeholder="Enter goal description here" onChange={handleDescriptionChange} />
                </div>
                <div className="modal-footer">
                    <button type="cancel" className="btn btn-danger" data-dismiss="modal">Close</button>
                    <button type="submit" onClick={addGoal} className="btn btn-primary" data-dismiss="modal">Add</button>
                </div>
            </form>
        </Modal>
    );
}

export default AddGoal;