import React from 'react';

function PropertyLabel(props) {

    const { label, value } = props;

    return (
        <div className="row justify-content-start">
            <div className="col-2">
                <label className="font-weight-bold">{label}</label>
            </div>
            <div className="col-2">
                <label>{value}</label>
            </div>
        </div>
    );
}

export default PropertyLabel;