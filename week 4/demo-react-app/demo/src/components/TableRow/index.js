import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import AuthorInfo from '../../pages/AuthorInfo';

function TableRow(props) {

        const { url } = useRouteMatch();
    
        const { id, name, country, age, books } = props.row;
        return (
            <tr>
                <td><Link to={`${url}/${id}`}>{name}</Link></td>
                <td>{country}</td>
                <td>{age}</td>
                <td>{books? books.length : 'No books registered'}</td>
            </tr>
        );

}

export default TableRow;
