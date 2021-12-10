import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Button, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState('pending');
    const [success, setSuccess] = useState(false);

    useEffect( ()=>{
        fetch('http://localhost:8000/orders')
            .then(res=>res.json())
            .then(data=>setOrders(data))
    }, [])

    const handleDeleteUser = id =>{
        const proceed = window.confirm('Are you sure? Do you want to delete the order?')
       if(proceed){
            const url = `http://localhost:8000/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                    console.log(data)
                    setSuccess(true);
                    if(data.deletedCount>0){
                        const remaining =  orders.filter(odr=>odr._id!==id);
                        console.log(remaining)
                        setOrders(remaining)
                    }
                }
            })
       }   
    }


    return (
        <div>
            <Typography style={{textAlign:'center', marginBottom: '15px'}} variant='h4'>Manage Orders</Typography>
            <TableContainer component={Paper}>
                {
                    success && <Alert severity="success">Successfully Delete Order from Database.</Alert>
                }
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow style={{background: '#f9f9f9'}}>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Cell</TableCell>
                        <TableCell align="left">Address</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orders.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.cell}</TableCell>
                        <TableCell align="left">{row.address}</TableCell>
                        <TableCell align="left">{row.status}</TableCell>
                        <TableCell align="left">
                            <Button style={{fontSize: '12px'}} onClick= {()=>handleDeleteUser(row._id)}><DeleteForeverIcon/>Delete Order</Button>
                            <Button style={{fontSize: '12px'}}><UpdateIcon/>UPDATE STATUS</Button>
                        </TableCell>
                        
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageOrders;