import React from 'react';

function TableHeader(props) {
    const { header } = props;
    return (
        <tr>
            {header.map((header) => {
                return(<th>{header}</th>);
            })
            }
        </tr>
    );
}

export default TableHeader;