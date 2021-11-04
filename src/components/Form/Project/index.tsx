import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from "react-router"
import { formContext } from "../../../Contexts/formContext"
import { Box, TextField, Typography } from '@mui/material'
import NextButton from '../../Button/NextButton';

function Project() {
    const history = useHistory();
    const [project, setProjectInput] = useState("")
    const { setProject } = useContext(formContext);   

    const handleClickNext = () => {
        setProject(project)
        console.log(project)
        history.push("/contact/budget");
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    return (
        <Box
            sx={{
                justifyContent: 'center',
                alignSelf: 'center',
                WebkitAlignSelf: 'center',
                margin: 'auto',
                '& > :not(style)': { m: 1.5, width: '50ch' },
                '& .MuiInputBase-root:before': { color: '#ED6C02', borderBottom: '1px solid #ED6C02' },
                '& .MuiInputBase-root:hover:not(disabled):before': { color: '#ED6C02', borderBottom: '1px solid #ED6C02' }
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
                Tell us about __________ project
            </Typography>
            <TextField name="project"
                label="project"
                variant="standard"
                color="warning"
                multiline
                value={project}
                onChange={(e) => setProjectInput(e.target.value)}
                type='text'
            />
           
           <NextButton onClick={handleClickNext} />
        </Box>
    );
};

export default Project