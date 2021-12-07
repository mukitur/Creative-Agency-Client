import React, { useEffect, useState } from 'react';
import ShowOrder from './ShowOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:8000/orders')
            .then(res=>res.json())
            .then(data=>setOrders(data))
    }, [])
    return (
        <div>
            <h2>Manage Orders</h2>
            {
                orders.map(order=><ShowOrder
                    key={order._id}
                    order={order}
                ></ShowOrder>)
            }
        </div>
    );
};

export default ManageOrders;