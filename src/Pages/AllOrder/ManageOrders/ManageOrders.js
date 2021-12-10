import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState('pending');

    useEffect( ()=>{
        fetch('http://localhost:8000/orders')
            .then(res=>res.json())
            .then(data=>setOrders(data))
    }, [])
    return (
        <div>
            <Typography style={{textAlign:'center', marginBottom: '15px'}} variant='h4'>Manage Orders</Typography>
            <TableContainer component={Paper}>
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
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.cell}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">
                  <Button>Delete Order</Button>
                  <Button>UPDATE STATUS</Button>
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