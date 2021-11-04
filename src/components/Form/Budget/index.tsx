import React, { useContext, useEffect, useState } from 'react'
import { Box, MenuItem, TextField, Typography } from '@mui/material'
import { useHistory } from 'react-router'
import { formContext } from "../../../Contexts/formContext"
import NextButton from '../../Button/NextButton';

const currencies = [
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
        value: 'Not sure',
        label: 'I\'m not sure',
    }
];

function Budget() {
    const history = useHistory();
    const [budget, setBudgetInput] = useState(''); 
    const { setBudget } = useContext(formContext); 
  
    const handleClickNext = () => {
        setBudget(budget)
        console.log(budget)
        history.push("/contact/details");
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
                value={budget}
                onChange={(e) => setBudgetInput(e.target.value)}
            >
                {currencies.map((option) => (
                    <MenuItem                   
                    key={option.value}
                    value={option.value}
                    sx={{
                        color: "#ED6C02",
                        fontSize: '1.3rem',
                        justifyContent: 'center'
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