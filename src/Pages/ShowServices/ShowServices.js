import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowSingleService from './ShowSingleService';

const ShowServices = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:8000/services')
            .then(res=>res.json())
            .then(data=>setServices(data))
    }, [])

    return (

        <Container style={{marginTop: '10px', paddingLeft: '50px', paddingRight: '50px'}}>
        <Typography style={{textAlign: 'center', paddingBottom: '20px'}} variant="h5" gutterBottom component="div">
            Provide awesome <strong style={{color: '#fbd062'}}>services</strong>
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service=><ShowSingleService
                    key={service._id}
                    service={service}
                    >
                    </ShowSingleService>)
                }
        </Grid>
        <br/>
        <Box sx={{ minWidth: 275, border: 0, boxShadow: 3, textAlign: 'center' }}>
        <Link to ="/weoffer" style={{ textDecoration: 'none', color: 'black', paddingBottom: '15px' }}><Button variant="outlined">Explore All Services</Button></Link>
        </Box>
    </Container>

        
    );
};

export default ShowServices;