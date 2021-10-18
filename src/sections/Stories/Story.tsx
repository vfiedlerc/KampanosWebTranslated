import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

export const Story = () => {
    return (
        <Grid
            container
            spacing={2}
            // sx={{
            //     backgroundColor: '#0D3475',
            //     width: '100%'
            // }}
        >
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                // sx={{
                //     // backgroundColor: '#0D3475',
                //     minWidth: '330px',
                //     margin: 'auto'
                // }}
            >
                <Typography
                    variant='h2'
                    // sx={{
                    //     color: '#fff',
                    //     wordBreak: 'break-word'
                    // }}
                >
                    Story
                </Typography>
            </Grid>
        </Grid>
    );
}