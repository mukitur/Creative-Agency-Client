import { Alert, Button, TextField, Typography } from '@mui/material';
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './MakeAdmin.css';


const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    

    /* const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:8000/services', data)
        .then(res=>{
            console.log(res);
            if(res.data.insertedId){
                alert('added successfully');
            }
            reset();
        })
    }     */
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = e => {
        const user= {email};
        fetch('http://localhost:8000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setSuccess(true);
        })
        e.preventDefault();
    }


    return (
        <div className="add-admin">
            <Typography  style={{textAlign:'center', paddingBottom:'20px'}} variant='h3'>Make an Admin</Typography>
            <form onSubmit={handleMakeAdmin}>
                <TextField
                    sx={{ width: '70%', m: 1 }}
                    id="outlined-size-small"
                    label="Email"
                    varient = "standard"
                    name="email"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <br/>
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {
            success && <Alert severity="success">Successfully added Admin!</Alert>
            }
        </div>
    );
};

export default MakeAdmin;