import React from 'react'
import { Box, Button, Typography } from '@mui/material'

function NextButton({...props}) {
    return (
        <Box sx={{ paddingTop: '2rem' }} >
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
                {...props}
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
    );
};

export default NextButton