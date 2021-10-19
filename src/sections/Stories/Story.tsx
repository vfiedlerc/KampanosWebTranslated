import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

export const Story = () => {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#fff',
                width: '100%'
            }}
        >
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
            >
                <Typography
                    variant='h2'
                    sx={{
                        color: '#fff',
                        wordBreak: 'break-word'
                    }}
                >
                    OUR STORY
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
            >
                <Grid container>
                    
                </Grid>
            </Grid>
        </Grid>
    );
}