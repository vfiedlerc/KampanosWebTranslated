import React, { FC, useContext, useEffect, useState } from 'react'
import { formContext } from "../../../Contexts/formContext"
import { Box, Button, TextField, Typography } from '@mui/material'
import { useHistory } from 'react-router'
import NextButton from '../../Button/NextButton';

function Details() {
    const { setEmail, setPhone, email, phone } = useContext(formContext);

    const history = useHistory();

    const handleClickNext = () => {
        setEmail(email)
        setPhone(phone)
        history.push("/home");
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    return (
        <Box
            sx={{
                justifyContent: 'center',
                alignSelf: 'center',
                WebkitAlignSelf: 'center',
                margin: 'auto',
                '& > :not(style)': { m: 1.5, width: '30ch' },
                '& .MuiInputBase-root:hover:not(disabled):before': { color: '#ED6C02', borderBottom: '1px solid #ED6C02' }
            }}>
            <Typography
                variant='body2'
                sx={{
                    fontWeight: 'light',
                    color: '#c2c2c2'
                }}
            >
                Hire us
            </Typography>
            <Typography
                variant='h4'
                sx={{
                    fontWeight: 'bold',
                    color: '#000'
                }}
            >
                Can we have your details?
            </Typography>
            <TextField name="email"
                label="email adress"
                variant="standard"
                color="warning"
            />
            <TextField name="phone"
                label="phone"
                variant="standard"
                color="warning"
            />

            <NextButton onClick={handleClickNext} />
        </Box>
    );
};

export default Details