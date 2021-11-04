import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from "react-router"
import { formContext } from "../../../Contexts/formContext"
import { Box, TextField, Typography } from '@mui/material'
import NextButton from '../../Button/NextButton';

function Name() {
    const history = useHistory();
    const [firstName, setFirstNameInput] = useState("")
    const [lastName, setLastNameInput] = useState("")
    const { setFirstName, setLastName} = useContext(formContext);   

    const handleClickNext = () => {
        setFirstName(firstName)
        setLastName(lastName)
        console.log(firstName)
        console.log(lastName)
        history.push("/contact/work");
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
                Hi there, what's your name?
            </Typography>
            <TextField name="first_name"
                label="first name"
                value={firstName}
                variant="standard"
                color="warning"      
                onChange={(e) => setFirstNameInput(e.target.value)}    
                type='text'     
            />
            <TextField name="last_name"
                label="last name"
                variant="standard"
                color="warning"
                value={lastName}
                onChange={(e) => setLastNameInput(e.target.value)}  
                type='text'
            />

            <NextButton onClick={handleClickNext} />
        </Box>
    );
}

export default Name