import React, { useContext, useEffect, useState } from 'react'
import { Box, MenuItem, TextField, Typography } from '@mui/material'
import { useHistory } from 'react-router'
import { formContext } from "../../../Contexts/formContext"
import NextButton from '../../Button/NextButton';

const currencies = [
    {
        value: '0',
        label: 'Please select',
    },
    {
        value: '5k_10k',
        label: '€5k - 10k',
    },
    {
        value: '10k_20k',
        label: '€10k - 20k',
    },
    {
        value: '20k_30k',
        label: '€20k - 30k',
    },
    {
        value: '+30k',
        label: '€30k +',
    },
    {
        value: 'none',
        label: 'I\'m not sure',
    }
];

function Budget() {

    const history = useHistory();
    const [currency, setCurrency] = React.useState('0'); 
    const { setBudget, budget } = useContext(formContext); 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };
    const handleClickNext = () => {
        setBudget(budget)
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
                Have a budget in mind?
            </Typography>
            <TextField
                select
                name="budget"
                placeholder="Please select your budget"
                variant="standard"
                color="warning"
                value={currency}
                onChange={handleChange}
            >
                {currencies.map((option) => (
                    <MenuItem                   
                    key={option.value}
                    value={option.value}
                    sx={{
                        color: "#252525"
                    }}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
           
            <NextButton onClick={handleClickNext} />
        </Box>
    );
};

export default Budget