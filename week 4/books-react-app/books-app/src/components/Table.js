import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

class Table extends React.Component{
    render() {
        return (
            <table class="table">
                <thead>
                    {this.renderHeader()}
                </thead>
                <tbody>
                    {this.renderData()}
                </tbody>
            </table>
        );
    }

    renderHeader() {
        const {headers} = this.props;
        return (
            <TableHeader header={headers}></TableHeader>
        );
    }
    
    renderData() {
        const {rows} = this.props;
        return rows.map((row) => {
            return (
                <TableRow book={row}></TableRow>
            );
        });
    }
  
}

export default Table;