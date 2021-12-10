import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Button, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { DataArray } from '@mui/icons-material';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [success, setSuccess] = useState(false);
    const {user} = useAuth();
    useEffect( ()=>{
        fetch('http://localhost:8000/orders')
            .then(res=>res.json())
            .then(data=>setOrders(data))
    }, [])

    //filter only my orders
    const getMyOrders = orders.filter(od=>od.email === user.email)
    //console.log(getMyOrders)

    //Delete User
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
                        setOrders(remaining)
                    }
                }
            })
       }   
    }
    return (
        <div>
             <Typography style={{textAlign:'center'}} variant='h4'>My Orders</Typography>
            <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow style={{background: '#f9f9f9'}}>
            <TableCell>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Cell</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getMyOrders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.cell}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">
                  <Button onClick= {()=>handleDeleteUser(row._id)}>Delete Order</Button>
            </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
            {
                success && <Alert severity="success">Successfully Delete Order from Database.</Alert>
            }
    </TableContainer>
            
        </div>
    );
};

export default MyOrders;