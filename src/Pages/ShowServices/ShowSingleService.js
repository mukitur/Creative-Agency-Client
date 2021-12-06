import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const ShowSingleService = ({service}) => {
    const {name, description,image, _id} = service;
    return (
        <>
            <Grid container item xs={4} sm={4} md={4}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 3, textAlign: 'center' }}>
                    <CardMedia
                        component="img"
                        style={{ width: '50%', height: '50%x', margin: '0 auto',padding:'5px' }}
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                        
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardContent>
                    {
                        <Link to = {`/services/${_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                           <Button variant="outlined">Details <DoubleArrowIcon/> </Button>
                        </Link>
                    }
                    </CardContent>
                </Card>
            </Grid>
        </>   


    );
};

export default ShowSingleService;