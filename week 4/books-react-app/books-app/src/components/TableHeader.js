import React from 'react';

function TableHeader() {
    const headers = this.props.headers;
    return (
        <tr>
            {headers.map((header) => {
                return(<th>{header}</th>);
            })
            }
        </tr>
    );
}

export default TableHeader;