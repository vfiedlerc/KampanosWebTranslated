import * as React from 'react';
import Topbar from '../components/Topbar/Topbar'
import Form  from '../components/Form/Form'
import Footer from '../sections/Footer/Footer.js'
import { Box, Grid, Typography, Link, styled } from '@mui/material'
import FaceIcon from "../assets/FacebookIcon.svg";
import LinkIcon from "../assets/LinkedinIcon.svg";
import InstaIcon from "../assets/InstagramIcon.svg";
import '@fontsource/roboto/400.css';

const ItemsBox = styled('div')(({ theme }) => ({
    marginTop: '10rem',
}));

function Contact() {
    return (
        <Box>
            <Topbar />
            <Grid container>
                {/* Redes */}
                <Grid item
                    xs={2}
                    sm={2}
                    md={2}
                    lg={2}
                    display={{ xs: 'none', sm: 'none', md: 'block' }}
                    sx={{
                        justifyContent: 'left',
                        margin: 'auto'
                    }}
                >
                    <Grid container
                        sx={{
                            WebkitWritingMode: 'vertical-lr',
                            transform: 'rotate(-180deg)',
                            alignItems: 'center',
                            marginTop: '80%'
                        }}
                    >
                        <Typography
                            variant='caption'
                            sx={{
                                margin: 0,
                                color: '#0D3475',
                                fontSize: '1rem'
                            }}
                        >
                            @kampanos 2021
                        </Typography>
                    </Grid>

                    <ItemsBox>
                        <Grid
                            container
                            sx={{ justifyContent: 'center', minHeight: 'max-content' }}
                        >
                            <Typography
                                sx={{
                                    margin: 0,
                                    height: 'fit-content'
                                }}
                                color=' #0D3475'
                            >
                                <Link
                                    href='https://www.facebook.com'
                                    sx={{
                                        margin: 0,
                                        padding: 0,
                                        justifyContent: 'center'
                                    }}
                                >
                                    <img src={FaceIcon} alt='Facebook' title='Facebook' />
                                </Link>
                            </Typography>
                        </Grid>

                        <Grid container sx={{ justifyContent: 'center' }}>
                            <Typography
                                sx={{
                                    margin: 0,
                                    height: 'fit-content'
                                }}
                                color=' #0D3475'
                            >
                                <Link
                                    href='https://www.linkedin.com/company/kampanos/'
                                    sx={{
                                        margin: 0,
                                        padding: 0,
                                        justifyContent: 'center'
                                    }}
                                >
                                    <img src={LinkIcon} alt='Linkedin' title='Linkedin' />
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid container sx={{ justifyContent: 'center' }}>
                            <Typography
                                sx={{
                                    margin: 0,
                                    height: 'fit-content'
                                }}
                                color=' #0D3475'
                            >
                                <Link
                                    href='https://www.instagram.com/kampanos.pt/'
                                    sx={{
                                        margin: 0,
                                        padding: 0,
                                        justifyContent: 'center'
                                    }}
                                >
                                    <img src={InstaIcon} alt='Instagram' title='Instagram' />
                                </Link>
                            </Typography>
                        </Grid>
                    </ItemsBox>
                </Grid>

                {/* Form */}
                <Grid item
                    xs={12}
                    sm={12}
                    md={10}
                    lg={10}
                    sx={{
                        justifyContent: 'center'
                    }}
                >
                    <Form />
                </Grid>
            </Grid>
            {/* <Footer /> */}
        </Box>
    )
}
export default Contact;