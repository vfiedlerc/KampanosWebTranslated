import React, { FC } from "react";
import { Budget } from './Budget'
import { Details } from './Details'
import { Name } from './Name'
import { Project } from './Project'
import { Work } from './Work'
import { Box, Grid, styled, Typography } from "@mui/material";

const FormBox = styled('div')(({ theme }) => ({
    position: 'relative',
    zIndex: 1000,
    maxWidth: '1100px',
    margin: '80px auto 0',
    padding: 'auto',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 8px 45px rgba(56, 31, 115, 0.05)',
    borderRadius: '8px',
    minHeight: '600px',
    justifyContent: 'center',
    WebkitAlignSelf: 'center',
    display: 'flex',
    
    [theme.breakpoints.down("sm")]: {
        marginTop: '0px'
    }
}));

export const Form: FC<FormProps> = ({ props }: FormProps) => {
    return (
        <FormBox>
            <Box
                sx={{
                    justifyItems: 'center',
                    WebkitAlignSelf: 'center',
                    alignSelf: 'center'
                }}
            >
                <Name />
                {/* <Work />
                <Project />
                <Budget />
                <Details /> */}
            </Box>
        </FormBox>
    );
};
export type FormProps = {
    props: any;
};