import React, { FC, useContext, useEffect, useState } from 'react'
//import { useHistory } from "react-router-dom"
import { formContext } from "../../../Contexts/formContext"
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material'

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

export const Budget: FC<BudgetProps> = ({ }: BudgetProps) => {
    const [currency, setCurrency] = React.useState('0');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };
    return (
        <Box
            sx={{
                '& > :not(style)': { m: 1.5, width: '40ch' },
                justifyContent: 'center',
                alignSelf: 'center',
                WebkitAlignSelf: 'center',
                margin: 'auto'
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
            <Box
                sx={{
                    paddingTop: '2rem'
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#0D3475',
                        color: '#fff',
                        fontWeight: 'light',
                        textTransform: 'lowercase',
                        fontSize: '1.2rem',
                        padding: '0.5rem 1.5rem'
                    }}
                >
                    next
                </Button>
                <Typography
                    variant='caption'
                    sx={{
                        color: '#0D3475',
                        margin: 'auto 2rem 0',
                        fontSize: '1rem'
                    }}
                >press

                    <Typography
                        variant='caption'
                        sx={{
                            color: '#0D3475',
                            fontWeight: 'bold',
                            margin: 'auto',
                            fontSize: '1.05rem'
                        }}
                    > ENTER
                    </Typography>
                </Typography>
            </Box>
        </Box>
    );
};

export type BudgetProps = {};