import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddServices.css';
import { Typography } from '@mui/material';


const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:8000/services', data)
        .then(res=>{
            console.log(res);
            if(res.data.insertedId){
                alert('added successfully');
            }
            reset();
        })
    }    
    return (
        <>
            <div className="add-services">
                <Typography style={{textAlign: 'center'}} variant="h3" className="my-5">Please add services</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("name", { required: true, maxLength: 80 })} placeholder="Name"/>
                    <textarea {...register("description", { required: true, maxLength: 300 })} placeholder="Service Short Description" />
                    <textarea {...register("detaildescription", { required: true, maxLength: 800 })} placeholder="Service Detail Description" />
                    <input {...register("image")} placeholder="Image for short description" />
                    <input {...register("imagefordetail")} placeholder="Image for Detail description" />
                    <input {...register("price")} placeholder="Price" />
                    <input type="submit"/>
                </form>
            </div>
        </>
);
};

export default AddServices;