import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import bannerpic from './../../../images/Frame.png';
import './Banner.css';

const Banner = () => {
    return (
        <div style={{background: '#fbd062', marginBottom: '50px'}}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} style={{marginTop:'50px', marginBottom: '50px'}}>
                        <Typography style={{fontWeight: '700'}} variant="h2">
                            Lst's Grow Your Brand To The Next Level! 
                        </Typography>
                        <Typography variant="body2">
                            <Link style={{textDecoration: 'none'}} to ="/portfolio"><Button style={{background: 'white', color: 'black', marginTop: '20px'}}  variant="contained">EXPLORE</Button> </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} style={{marginTop:'50px', marginBottom: '50px'}}>
                        <img width='100%' src={bannerpic} alt=""/>
                        
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;