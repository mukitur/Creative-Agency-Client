import React from 'react';

const ShowMySingleOrder = ({order}) => {
    const {name} = order;
    return (
        <div>
             <h2>Show order {order.length}</h2>
           {name}
        </div>
    );
};

export default ShowMySingleOrder;