import React from 'react';
import './MenuHeader.scss';

function MenuHeader(props) {

    const { title } = props;

    return (
        <div className="row row-menu">
            <div className="container">
                <div className="col">
                    <h2 className="section-title">{title}</h2>
                </div>
            </div>
            
        </div>
    );
}

export default MenuHeader;