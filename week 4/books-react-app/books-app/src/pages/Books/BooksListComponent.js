import React from 'react';
import Table from '../../components/Table';

function BooksListComponent(props) {
    const {headers, data} = props;
    return (
        <div className="App">
            <h1>List of Books</h1>
            <Table headers={headers} rows={data}></Table>
        </div>
    );
}

export default BooksListComponent;