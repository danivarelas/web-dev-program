import React from 'react';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.book = props.book;
    }
    
    render() {
        const { name, author, year } = this.book;
        return (
            <tr>
                <td>
                    <div className="form-check">
                        <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                    </div>
                </td>
                <td>{name}</td>
                <td>{author}</td>
                <td>{year}</td>
            </tr>
        );
    }
}

export default TableRow;