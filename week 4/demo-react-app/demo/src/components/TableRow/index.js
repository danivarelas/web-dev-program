import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function TableRow(props) {

    if(props.authors){
        const { id, name, books } = props.row;
        const handleDelete = () => {

            if ( books && (books.length > 0) ) {
                alert(`You can't delete an author with registered books.`);
            } else {
                Axios.delete(`http://localhost:8081/api/v1/author/${id}`)
                .then(res => {
                    console.log(res);
                });
            }
        }
        return (
            <tr>
                <td className="align-middle"><Link to={`/author/${id}`}>{name}</Link></td>
                <td className="align-middle">{( books && (books.length > 0) ) ? books.length : 'No books registered'}</td>
                <td><button className="btn btn-secondary" onClick={() => handleDelete()}><i className="fas fa-trash"></i></button></td>
            </tr>
        );
    } else {
        const { id, name } = props.row;
        return (
            <tr>
                <td className="align-middle"><Link to={`/book/${id}`}>{name}</Link></td>
            </tr>
        );
    }
    
}

export default TableRow;
