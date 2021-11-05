import React from 'react';
import { Grid, styled, Typography } from '@mui/material';
import { Title } from '../../components/Titles/Title';
import orangeBox from '../../assets/OrangeBigBox.svg'
import { Subtitle } from '../../components/Titles/Subtitle';

const PillarsBox = styled('div')(({ theme }) => ({
    margin: 0,
    [theme.breakpoints.down('sm')]: {
        marginY: 5,
        h1: {
            transform: "none",
            fontSize: "2rem",
            textAlign: "left",
            textAlignLast: "left",
            marginLeft: "1rem",
            marginTop: "2rem",
            marginBottom: "2rem",
        }
    },
    [theme.breakpoints.between('sm', 'md')]: {
        marginTop: '5rem',
        h1: {
            transform: "rotate(-90deg)",
            fontSize: "3rem",
            marginTop: "9rem",
            marginBottom: "2rem"
        }
    },
    [theme.breakpoints.between('md', 'lg')]: {
        marginTop: '5rem',
        h1: {
            transform: "rotate(-90deg)",
            fontSize: "4rem",
            marginTop: "13rem",
            marginBottom: "2rem"
        }
    },
    [theme.breakpoints.up('lg')]: {
        marginTop: '5rem',
        h1: {
            transform: "rotate(-90deg)",
            fontSize: "4rem",
            textAlign: "left",
            textAlignLast: "left",
            marginLeft: "1rem",
            marginTop: "9rem",
            marginBottom: "2rem",
        }
    },
}
));

const ImgBox = styled('div')(({ theme }) => ({
    margin: 0,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
    [theme.breakpoints.between('sm', 'md')]: {
        textAlign: '-webkit-right',
        alignContent: 'right',
        marginLeft: 0
    },
    [theme.breakpoints.between('md', 'lg')]: {
        textAlign: '-webkit-right',
        alignContent: 'right',
        marginLeft: 0
    },
    [theme.breakpoints.up('lg')]: {
        textAlign: '-webkit-right',
        alignContent: 'right',
        marginLeft: 0
    }
}));

const AlignTitleBox = styled('div')(({ theme }) => ({
    margin: 0,
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
        lineHeight: 1
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.5rem',
        lineHeight: 1
    },
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '1.8rem',
        lineHeight: 1
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '2rem',
        lineHeight: 1
    },
}));

const AlignTextBox = styled('div')(({ theme }) => ({
    margin: 0,
    [theme.breakpoints.down('sm')]: {
        fontSize: '.7rem'
    },
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '.7rem'
    },
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '1rem'
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '1rem'
    },
}));

const SubtitleBox = styled('div')(({ theme }) => ({
    margin: 0,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
        span: {
            fontSize: '1.2rem',
            textAlign: 'center'
        }
    },
    [theme.breakpoints.between('sm', 'md')]: {
        span: {
            fontSize: '1.5rem',
            textAlign: 'center'
        }
    },
    [theme.breakpoints.between('md', 'lg')]: {
        span: { fontSize: '1.8rem' }
    },
    [theme.breakpoints.up('lg')]: {
        span: { fontSize: '2rem' }
    }
}));

export const Pillars = () => {
    return (
        <PillarsBox sx={{ width: '100%', margin: 0 }}>
            <Grid container
                spacing={2}
                xs={12}
                sm={12}
                md={12}
                sx={{ margin: 0, width: '100%' }}
            >
                <Grid container
                    direction='row'
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{
                        textAlign: 'left',
                        alignItems: 'left',
                        justifyContent: 'left',
                        alignSelf: 'left',
                        margin: 0
                    }}
                >
                    <Grid item
                        xs={12}
                        sm={12}
                        md={12}
                        sx={{
                            padding: 0,
                            marginLeft: 0,
                            textAlign: 'left',
                            alignItems: 'left',
                            justifyContent: 'left',
                            alignSelf: 'center',
                            //maxWidth: 200
                        }}
                    >
                        <ImgBox
                            sx={{
                                padding: 0,
                                marginLeft: 0,
                                textAlign: 'left',
                                justifyContent: 'left'
                            }}
                        >
                            <img src={orangeBox} alt='Orange  Box' title='Orange Box' style={{width: '100%', maxWidth:'618px',padding:0, margin:0}} />
                        </ImgBox>
                    </Grid>
                </Grid>

                <Grid item
                    xs={12}
                    sm={6}
                    md={8}
                    sx={{
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}
                >
                    <Grid container
                        spacing={2}
                        xs={12}
                        sm={9}
                        md={9}
                        sx={{
                            margin: 0,
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center'
                        }}
                    >
                        <Grid container
                            direction='row'
                            spacing={2}
                            xs={12}
                            sm={9}
                            md={9}
                        >
                            <Grid item>
                                <Grid container
                                    xs={12}
                                    sm={12}
                                    md={12}>

                                    <Grid item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        sx={{
                                            textAlign: 'left',
                                            marginBottom: '1rem'
                                        }}
                                    >
                                        <Typography
                                            variant='h6'
                                            sx={{
                                                color: '#0D3475',
                                                fontWeight: 'bold',
                                                fontSize: '2rem',
                                                borderColor: '#0D3475',
                                                borderRadius: '10%'
                                            }}
                                        >
                                            __
                                        </Typography>
                                    </Grid>
                                    <AlignTitleBox>
                                        <Grid item
                                            xs={12}
                                            sm={10}
                                            md={10}
                                            sx={{
                                                textAlign: 'left'
                                            }}
                                        >
                                            <Typography
                                                variant='caption'
                                                sx={{
                                                    color: '#0D3475',
                                                    //fontSize: '2rem',
                                                    fontWeight: 'bold',
                                                    fontSize: '2rem'
                                                }}
                                            >
                                                Our pillars are
                                            </Typography>
                                            <Typography
                                                variant='caption'
                                                sx={{
                                                    color: '#D46918',
                                                    fontWeight: 'bold',
                                                    fontSize: '2rem'
                                                }}
                                            > strong
                                            </Typography>
                                            <Typography

                                                variant='caption'
                                                sx={{
                                                    color: '#0D3475',
                                                    //fontSize: '2rem',
                                                    fontWeight: 'bold',
                                                    fontSize: '2rem'
                                                }}
                                            > and our foundations are
                                            </Typography>
                                            <Typography
                                                variant='caption'
                                                sx={{
                                                    color: '#D46918',
                                                    //fontSize: '2rem',
                                                    fontWeight: 'bold',
                                                    fontSize: '2rem'
                                                }}
                                            > solid.
                                            </Typography>
                                        </Grid>
                                    </AlignTitleBox>
                                    <AlignTextBox>
                                        <Grid item
                                            xs={12}
                                            sm={12}
                                            md={10}
                                            sx={{
                                                textAlign: 'left',
                                                marginTop: '1.2rem'
                                            }}
                                        >
                                            <Typography
                                                variant='h6'
                                                sx={{
                                                    color: '#0D3475',
                                                    //fontSize: '1.1rem'
                                                }}
                                            > We lift up people and develop their skills, we grow together and we learn from each other. We celebrate each other, we celebrate you and your ideas! We encourage hobbies and activities outside the workplace to keep our minds and bodies active and stress-free.
                                            </Typography>
                                        </Grid>
                                    </AlignTextBox>
                                    <Grid item
                                        xs={12}
                                        sm={12}
                                        md={12}
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        <Typography
                                            variant='h6'
                                            sx={{
                                                color: '#0D3475',
                                                fontWeight: 'bold',
                                                fontSize: '2rem',
                                                borderColor: '#0D3475',
                                                borderRadius: '10%'
                                            }}
                                        >
                                            __
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item
                    xs={12}
                    sm={12}
                    md={12}
                    sx={{
                        width: '100%',
                        zIndex: -100,
                        marginTop: -8,
                        marginLeft: 0,
                        padding: 0
                    }}
                >
                    <SubtitleBox
                        sx={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            margin: 0,
                            padding: 0
                        }}
                    >
                        <Subtitle color='#134487' label=' our pillars - foundations - celebrate - skills - ' stroke='1px' direction='right' />
                    </SubtitleBox>
                </Grid>
            </Grid>
        </PillarsBox>
    );
}