import { Container, Grid, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import './Footer.css';
import emailjs from 'emailjs-com';


const Footer = () => {
    const { register, reset } = useForm();
    //for email js
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_Creative_h1pkj05', 'template_sc88ryi', form.current, 'user_jdWKYuVPcrmQs5UerXt2S')
        .then((result) => {
            alert('thank you email sent successfully');
            reset();
        }, (error) => {
            alert('message');
        });
        
    };

    return (
        <div style={{background: '#fbd062', marginTop: '50px'}}>
            <Container>
                <Grid container spacing={3} >
                    <Grid item xs={12} md={6} style={{marginTop: '50px', marginBottom: '50px'}}>
                        <Typography variant='h4'>
                            Let us handle your projects, Professionally
                        </Typography>
                        <Typography variant='body2'>
                            With well written codes, we build amazing apps for all platforms, Mobile and web Apps in general.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} style={{marginTop: '50px', marginBottom: '50px'}}>
                        <div className="add-footer">
                            <form ref={form} onSubmit={sendEmail}>
                                <input  {...register("email", { required: true, maxLength: 80 })} placeholder="your email address"/>
                                <input  {...register("name", { required: true, maxLength: 80 })} placeholder="your name/company name"/>
                                <textarea {...register("message", { required: true, maxLength: 300 })} placeholder="your message" />
                                <input type="submit"/>
                            </form>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={2} className="App">
                    <Grid item xs={12} md={12} style={{marginTop: '30px', marginBottom: '10px'}}>
                        copyright@2021. Creative Agency. All rights reserved.
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Footer;