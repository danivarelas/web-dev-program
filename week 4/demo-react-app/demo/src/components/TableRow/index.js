import React from 'react';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.author = props.author;
    }
    
    render() {
        const { name, country, age, books } = this.author;
        return (
            <tr>
                <td>{name}</td>
                <td>{country}</td>
                <td>{age}</td>
                <td>{books? books.length : 0}</td>
            </tr>
        );
    }
}

export default TableRow;