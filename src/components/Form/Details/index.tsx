import React, { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import { formContext } from "../../../Contexts/formContext"
import { Box, Button, TextField, Typography } from '@mui/material'
import { useHistory } from 'react-router'
import NextButton from '../../Button/NextButton';
import validator from 'validator'
import Project from '../Project';

function Details() {
    const [email, setEmailInput] = useState("")
    const [phone, setPhoneInput] = useState("")
    const [errorType, setErrorType] = useState('')
    const [isDataSent, setIsDataSent] = useState(false)
    const { setEmail, setPhone, sendFormData } = useContext(formContext);

    const history = useHistory();

    const handleSubmit = async (event: FormEvent) => {
        console.log(errorType)
        event.preventDefault()

        const emailRegex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

        const testEmail = emailRegex.test(email)
        const validateEmail = validator.isEmail(email)
        if (testEmail === true && validateEmail === true) {
            setEmail(email)
            setPhone(phone)
            setErrorType('')
            setIsDataSent(true)
            console.log(email)
            console.log(phone)
        } else {
            setErrorType('Invalid email')
        }
    };

    useEffect(() => {
        if (isDataSent) {
            (async () => {
                try {
                    await sendFormData()                    
                    //history.push("/contact/thankyou")
                } catch (error) {
                    console.error(error)
                }
            })()
            setIsDataSent(() => false)
        }
    }, [isDataSent, sendFormData, setIsDataSent])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    return (
        <Box
            component='form'
            onSubmit={handleSubmit}
            // onSubmit={(e: any) => handleSubmit(e)}

            sx={{
                justifyContent: 'center',
                alignSelf: 'center',
                WebkitAlignSelf: 'center',
                margin: 'auto',
                '& > :not(style)': { m: 1.5, width: '30ch' },
                '& .MuiInputBase-root:before': { color: '#ED6C02', borderBottom: '1px solid #ED6C02' },
                '& .MuiInputBase-root:hover:not(disabled):before': { color: '#ED6C02', borderBottom: '1px solid #ED6C02' }
            }}
        >
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
                type='text'
            />
            <TextField name="phone"
                label="phone"
                variant="standard"
                color="warning"
                value={phone}
                onChange={(e) => setPhoneInput(e.target.value)}
                type='text'
            />

            {/* <NextButton type='submit' onSubmit={(event: any) => handleSubmit(event)}  /> */}
            {/* <NextButton onClick={handleSubmit}/> */}
            <NextButton type='submit' />
        </Box>
    );
};

export default Details