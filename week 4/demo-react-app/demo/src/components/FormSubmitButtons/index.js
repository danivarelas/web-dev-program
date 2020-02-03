import React from 'react';

function FormSubmitButtons(props) {

    const { history } = props;
    
    const handleBack = event => {
        event.preventDefault();
        history.goBack();
    }

    return (
        <div className="float-right">
            <button type="submit" className="btn btn-success m-1">Add</button>
            <button type="cancel" className="btn btn-danger m-1" onClick={handleBack}>Cancel</button>
        </div>
    );
}

export default FormSubmitButtons;
