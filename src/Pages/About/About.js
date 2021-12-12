import { Container, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const About = () => {
    return (
        <div>
            <Navigation/>
            <Container>
                <Typography variant='h3' style={{marginTop: "40px" ,marginBottom:'20px'}}>
                    About Us
                </Typography>
                <Typography varient='body2'>
                Creative Agency is a web design studio in Bangladesh. We focus on design, consulting, and development. We’ve been building digital products, platforms, and experiences for the past 11 years. Each of our endeavors is guided by a strong sense of craftsmanship and passion for the web. We strive to create meaning and value for our customers and their users and seek to imbue our products with a sense of wonder. We are a diverse team of creatives from many backgrounds with a shared desire to help make the web a better place by crafting the best digital experiences.
                </Typography><br/>
                <Typography varient='body2'>
                Sometimes you need a flexible agency in order to get a lot done. We help you meet your business goals through our services & solutions with custom-fit pricing models and processes. We aim to be a successful partner on the journey of your business growth by creating vibrant and relevant brand experiences on every level. Every client we work with becomes a part of the team. Together we face the challenges and celebrate the victories.
                </Typography><br/>
                <Typography varient='body2'>
                Creative Agency is a web design studio in Bangladesh. We focus on design, consulting, and development. We’ve been building digital products, platforms, and experiences for the past 11 years. Each of our endeavors is guided by a strong sense of craftsmanship and passion for the web. We strive to create meaning and value for our customers and their users and seek to imbue our products with a sense of wonder. We are a diverse team of creatives from many backgrounds with a shared desire to help make the web a better place by crafting the best digital experiences.
                </Typography>
            </Container>
            <Footer/>
        </div>
    );
};

export default About;