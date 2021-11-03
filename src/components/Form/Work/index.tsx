import React, { FC, useContext, useEffect, useState } from 'react'
import { useHistory } from "react-router"
import { formContext } from "../../../Contexts/formContext"
import { Box, TextField, Typography } from '@mui/material'
import NextButton from '../../Button/NextButton';

function Work() {
    const history = useHistory();

    const { setCompany, company } = useContext(formContext);   

    const handleClickNext = () => {
        setCompany(company)
        history.push("/contact/project");
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
                Who do you work for?
            </Typography>
            <TextField name="company"
            label="company"
            variant="standard"
            color="warning"
            />

            <NextButton onClick={handleClickNext} />
        </Box>
    );
};

export default Work