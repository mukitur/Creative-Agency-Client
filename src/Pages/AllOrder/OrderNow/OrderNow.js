import { Typography } from '@mui/material';
import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './OrderNow.css';

const OrderNow = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:8000/orders', data)
        .then(res=>{
            console.log(res);
            if(res.data.insertedId){
                alert('Your Order placed successfully. Thank you!');
            }
            reset();
        })
    }   

    return (
        <>
             <Navigation/>
            <div className="add-orders">
                <Typography style={{textAlign: 'center'}} variant="h3" className="my-5">
                    Order Page
                </Typography>
                <Typography style={{textAlign: 'center'}} variant="body2" className="my-5">
                    Thanks for choosing Creative Agency!
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("name", { required: true, maxLength: 80 })} placeholder="Name"/>
                    <input  {...register("email", { required: true, maxLength: 30 })} placeholder="Email"/>
                    <input  {...register("cell", { required: true, maxLength: 30 })} placeholder="Cell Number"/>
                    <textarea {...register("address", { required: true, maxLength: 800 })} placeholder="Shipping Address" />
                    <input type="submit"/>
                </form>
            </div>
        </>
    );
};

export default OrderNow;