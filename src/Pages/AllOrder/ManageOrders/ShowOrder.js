import React from 'react';

const ShowOrder = ({order}) => {
    const {name, email, cell, address} = order;
    return (
        <div>
            <h2>Show order {order.length}</h2>
            {name}
        </div>
    );
};

export default ShowOrder;