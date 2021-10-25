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
       marginTop: '4rem',
       marginBottom: '4rem',
       minHeight: '200px',
        span: { fontSize: '1rem', letterSpacing: 0 }
    },
    [theme.breakpoints.between('sm', 'md')]: {
        marginTop: '4rem',
        marginBottom: '4rem',
       minHeight: '400px',
        span: { fontSize: '1.5rem', letterSpacing: 0 }
    },
    [theme.breakpoints.between('md', 'lg')]: {
       marginTop: '2rem',
       marginBottom: '8rem',       
       minHeight: '600px',
        span: { fontSize: '1.5rem', letterSpacing: 0 }
    },
    [theme.breakpoints.up('lg')]: {
       marginTop: '2rem',
       marginBottom: '8rem',       
       minHeight: '600px',
        span: { fontSize: '1.8rem', letterSpacing: 0 }
    },
}));

export const Countries = () => {
    return (
        <CountriesBox
            sx={{
                width: '100%',
                backgroundImage: `URL(${mapaMundi})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                alignItems: 'center',
                alignSelf: 'center'
                // margin: '2rem auto 6rem'
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
                    minHeight: 'inherit',
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