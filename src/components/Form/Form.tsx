import React, { FC } from "react";
import Budget from './Budget'
import Details from './Details'
import Name from './Name'
import Project from './Project'
import Work from './Work'
import { Box, Grid, styled, Typography } from "@mui/material";

function Form() {
    const FormBox = styled('div')(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        minHeight: '620px',
        height: '100%',
        [theme.breakpoints.down("sm")]: {
            margin: '80px auto 0',
            padding: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }
    }));
    return (
        <FormBox>
            <Grid container
                sx={{
                    justifyItems: 'center',
                    WebkitAlignSelf: 'center',
                    alignContent: 'center',
                    flexBasis: 'content',
                    textAlign: 'left'
                }}
            >
                <Grid item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                >
                    <Name />
                </Grid>
                <Grid item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                >
                    {/* <Work /> */}
                </Grid>
                <Grid item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                >
                    {/* <Project /> */}
                </Grid>
                <Grid item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                >
                    {/* <Details /> */}
                </Grid>
                <Grid item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                >
                    {/* <Budget /> */}
                </Grid>
            </Grid>
        </FormBox>
    );
};

export default Form