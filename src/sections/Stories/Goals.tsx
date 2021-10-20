import React from 'react';
import { Box, styled, Typography } from '@mui/material';

const GoalsBox = styled('div')(({ theme }) => ({
    margin: 'auto',    
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
        padding: '1rem',
        h6: { fontSize: '1rem' },
        span: { fontSize: '1rem' }
    },
    [theme.breakpoints.between('sm', 'md')]: {
        padding: '2rem',
        h6: { fontSize: '1.5rem' },
        span: { fontSize: '1.5rem' }
    },
    [theme.breakpoints.between('md', 'lg')]: {
        padding: '3rem',
        h6: { fontSize: '1.8rem' },
        span: { fontSize: '1.8rem' }
    },
    [theme.breakpoints.up('lg')]: {
        padding: '3rem',
        h6: { fontSize: '1.8rem' },
        span: { fontSize: '1.8rem' }
    },
}));

export const Goals = () => {
    return (
        <GoalsBox
            sx={{
                backgroundColor: '#F4F5F7',
                width: '100%',
                marginY: '2rem'
            }}>
            <Box
                sx={{
                    margin: 'auto',
                    width: 'fit-content'
                }}>
                <Typography
                    variant='h6'
                    sx={{
                        color: '#134487',
                        wordBreak: 'break-word',
                        fontWeight: 'bold'
                    }}
                >
                    The past to
                    <Typography
                        variant='caption'
                        sx={{
                            color: '#4177B7',
                            wordBreak: 'break-word',
                            letterSpacing: 0,
                            fontWeight: 'bold'
                        }}
                    > maintain your projects.
                    </Typography>
                </Typography>
                <Typography
                    variant='h6'
                    sx={{
                        color: '#134487',
                        wordBreak: 'break-word',
                        fontWeight: 'bold'
                    }}
                >
                    The present to
                    <Typography
                        variant='caption'
                        sx={{
                            color: '#4177B7',
                            wordBreak: 'break-word',
                            letterSpacing: 0,
                            fontWeight: 'bold'
                        }}
                    > work on your projects.
                    </Typography>
                </Typography>
                <Typography
                    variant='h6'
                    sx={{
                        color: '#134487',
                        wordBreak: 'break-word',
                        fontWeight: 'bold'
                    }}
                >
                    The future to
                    <Typography
                        variant='caption'
                        sx={{
                            color: '#D46918',
                            wordBreak: 'break-word',
                            letterSpacing: 0,
                            fontWeight: 'bold'
                        }}
                    > finish and celebrate your projects.
                    </Typography>
                </Typography>
            </Box>
        </GoalsBox>
    );
}