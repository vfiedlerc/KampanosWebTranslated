import React, { FC, useContext, useEffect, useState } from 'react'
//import { useHistory } from "react-router-dom"
import { formContext } from "../../../Contexts/formContext"
import { Box, Button, TextField, Typography } from '@mui/material'

export const Work: FC<WorkProps> = ({ }: WorkProps) => {
    return (
        <Box
            sx={{
                '& > :not(style)': { m: 1.5, width: '30ch' },
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
                Who do you work for?
            </Typography>
            <TextField name="work" label="company" variant="standard" color="warning"/>
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

export type WorkProps = {};