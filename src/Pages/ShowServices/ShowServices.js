import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ShowSingleService from './ShowSingleService';

const ShowServices = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:8000/services')
            .then(res=>res.json())
            .then(data=>setServices(data))
    }, [])

    return (
        <Container>
            <h2>Total Services# {services.length}</h2>
            {
                services.map(service=><ShowSingleService
                key={service._id}
                service={service}
                >
                </ShowSingleService>)
            }
        </Container>
    );
};

export default ShowServices;