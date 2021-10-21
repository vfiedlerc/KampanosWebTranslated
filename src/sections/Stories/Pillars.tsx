import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Title } from '../../components/Titles/Title';

export const Pillars = () => {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#fff',
                width: '100%',
                margin: '4rem auto'
            }}
        >
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
            >
                {/* <Title color='#D46918' label='OUR Goals' /> */}
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