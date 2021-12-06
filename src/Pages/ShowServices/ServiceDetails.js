import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const ServiceDetails = () => {
    const [service, setService] = useState({});
    const {serviceId} = useParams();
    useEffect( ()=>{
        fetch(`http://localhost:8000/services/${serviceId}`)
            .then(res=>res.json())
            .then(data=>setService(data))

    } ,[])
    return (
        <div>
            <Navigation/>
            <Container style={{marginTop: '50px', marginBottom: '50px'}}>
                <h2>{service.name}</h2>
                <h2><img src={service.imagefordetail} alt=""/></h2>
                <Typography>{service.detaildescription}</Typography>
                <Typography style={{color: '#fbd062'}} variant='h4'>Price: BDT {service.price}</Typography>
                <Box sx={{ minWidth: 275, border: 0, boxShadow: 3, textAlign: 'center' }}>
                    <Link to ="/ordernow" style={{ textDecoration: 'none', color: 'black', paddingBottom: '15px' }}><Button variant="outlined">Order Now</Button></Link>
                </Box>
            </Container>
            
        </div>
    );
};

export default ServiceDetails;