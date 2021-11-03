import React, { FC, useContext, useEffect, useState } from 'react'
//import { useHistory } from "react-router-dom"
import { formContext } from "../../../Contexts/formContext"
import { Box, Button, TextField, Typography } from '@mui/material'

export const Name: FC<NameProps> = ({ }: NameProps) => {
    return (
        <Box
            sx={{
               
                justifyContent: 'center',
                alignSelf: 'center',
                WebkitAlignSelf: 'center',
                margin: 'auto',
                '& > :not(style)': { m: 1.5, width: '30ch' },
                input: {    
                    color: '#D46918',                
                    '&:hover:not(disabled):not(focused):not(error)': { color: '#D46918' },
                    '&notchedOutline': { color: '#D46918' },
                },
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
            <TextField name="first_name" label="first name" variant="standard" color="warning"/>
            <TextField name="last_name" label="last name" variant="standard" color="warning" />
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

export type NameProps = {};