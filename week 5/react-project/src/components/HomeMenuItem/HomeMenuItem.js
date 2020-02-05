import React from 'react';
import './HomeMenuItem.scss';
import { Link } from 'react-router-dom';

function HomeMenuItem(props) {

    const {title, link, description} = props;

    return (
        <div className="mt-5">
            <div className="card-body">
                <h4 className="card-title">{title} <button type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#exampleModalCenter">
                <i className="fas fa-plus "></i>
            </button></h4>
                <hr></hr>
                <p className="card-text">{description}</p>
                <Link className="btn btn-primary" to={link}>Go somewhere</Link>
            </div>
        </div>
    );
}

export default HomeMenuItem;