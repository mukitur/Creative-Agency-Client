import React, { useEffect, useState } from 'react';
import ShowOrder from './ShowOrder';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:8000/orders')
            .then(res=>res.json())
            .then(data=>setOrders(data))
    }, [])
    return (
        <div>
            <Typography style={{textAlign:'center'}} variant='h4'>Manage Orders</Typography>
            <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Cell</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.cell}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageOrders;