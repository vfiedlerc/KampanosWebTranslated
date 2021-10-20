import React from 'react';
import { Box, styled, Typography, Grid } from '@mui/material';
import mapaMundi from '../../assets/WorldMap.svg'

const CountriesBox = styled('div')(({ theme }) => ({
    margin: 'auto',
    textAlign: 'center',
    lineHeight: 1,
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        paddingTop: '3rem',
        paddingBottom: '5rem',
        span: { fontSize: '1rem', letterSpacing: 0 }
    },
    [theme.breakpoints.between('sm', 'md')]: {
        paddingTop: '6rem',
        paddingBottom: '6rem',
        span: { fontSize: '1.5rem', letterSpacing: 0 }
    },
    [theme.breakpoints.between('md', 'lg')]: {
        paddingTop: '8rem',
        paddingBottom: '8rem',
        span: { fontSize: '1.5rem', letterSpacing: 0 }
    },
    [theme.breakpoints.up('lg')]: {
        paddingTop: '8rem',
        paddingBottom: '8rem',
        span: { fontSize: '1.8rem', letterSpacing: 0 }
    },
}));

export const Countries = () => {
    return (
        <CountriesBox
            sx={{
                backgroundImage: `URL(${mapaMundi})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                alignItems: 'center'
            }}>
            <Grid container
                xs={10}
                sm={9}
                md={8}
                lg={6}
                sx={{
                    margin: 'auto',
                    width: 'fit-content',
                    textAlign: 'center',
                    alignItems: 'center',
                }}>
                <Grid item>
                    <Typography
                        variant='caption'
                        sx={{
                            color: '#134487',
                            wordBreak: 'break-word',
                            alignItems: 'center',
                        }}
                    >
                        We have
                        <Typography
                            variant='caption'
                            sx={{
                                color: '#D46918',
                                wordBreak: 'break-word',
                                letterSpacing: 0,
                                fontWeight: 'bold'
                            }}
                        > developers
                        </Typography>    
                        <Typography
                            variant='caption'
                            sx={{
                                color: '#134487',
                                wordBreak: 'break-word'
                            }}
                        > from several countries working together every day to achieve amazing results.
                        </Typography>                   
                    </Typography>
                    
                    <Typography
                        variant='caption'
                        sx={{
                            color: '#134487',
                            wordBreak: 'break-word'
                        }}
                    >
                        We value loyalty and freedom. We create leaders and relationships. We are motivated and passionate.
                    </Typography>
                </Grid>
            </Grid>
        </CountriesBox>
    );
}