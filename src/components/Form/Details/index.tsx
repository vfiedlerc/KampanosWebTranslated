import React, { FC, useContext, useEffect, useState } from 'react'
import { formContext } from "../../../Contexts/formContext"
import { Box, Button, TextField, Typography } from '@mui/material'
import { useHistory } from 'react-router'
import NextButton from '../../Button/NextButton';
import validator from 'validator'

function Details() {
    const [email, setEmailInput] = useState("")
    const [phone, setPhoneInput] = useState("")
    const [isEmailValid, setIsEmailValid] = useState(true);
    const { setEmail, setPhone } = useContext(formContext);

    const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

    const testEmail = emailRegex.test(email)
    const validateEmail = validator.isEmail(email)    
   

    const history = useHistory();

    const handleClickNext = () => {
        if (testEmail === true && validateEmail === true) {
            setIsEmailValid(true)  
            setEmail(email)
            setPhone(phone)
            console.log(email)
            console.log(phone)
            history.push("/contact/name");    
        } else {
            setIsEmailValid(false)
        }
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
                '& .MuiInputBase-root:before': { color: '#ED6C02', borderBottom: '1px solid #ED6C02' },
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
                value={email}
                onChange={(e) => setEmailInput(e.target.value)}
            />
            <TextField name="phone"
                label="phone"
                variant="standard"
                color="warning"
                value={phone}
                onChange={(e) => setPhoneInput(e.target.value)}
            />

            <NextButton onClick={handleClickNext} />
        </Box>
    );
};

export default Details