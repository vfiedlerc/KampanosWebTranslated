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
        // width: '100%',
        // textAlign: '-webkit-right',
        // alignContent: 'right',
        // marginLeft: '8rem',
        // //marginTop: '-100px',
        // overflow: 'hidden'
        display: 'none'
    },
    [theme.breakpoints.between('sm', 'md')]: {
        textAlign: '-webkit-right',
        alignContent: 'right'
    },
    [theme.breakpoints.between('md', 'lg')]: {
        textAlign: '-webkit-right',
        alignContent: 'right'
    },
    [theme.breakpoints.up('lg')]: {
        textAlign: '-webkit-right',
        alignContent: 'right'
    }
}));

const AlignTextBox = styled('div')(({ theme }) => ({
    margin: 0,
    // [theme.breakpoints.between('xs', 'sm')]: {
    //     margin: '0 11rem 0 2rem',
    // },
    [theme.breakpoints.down('sm')]: {
        margin: '0 3rem 0 2rem',
        justifyContent: 'center'
    },
    [theme.breakpoints.between('sm', 'md')]: {
        margin: 0
    },
    [theme.breakpoints.between('md', 'lg')]: {
        margin: '1rem 1.5rem',
    },
    [theme.breakpoints.up('lg')]: {
        margin: '1rem 1.5rem',
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
        <PillarsBox sx={{ width: '100%' }}>
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
                    }}
                >
                    <Grid item
                        xs={12}
                        sm={12}
                        md={12}
                        sx={{
                            padding: 0,
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
                                textAlign: 'left',
                                justifyContent: 'left'
                            }}
                        >
                            <img src={orangeBox} alt='Orange  Box' title='Orange  Box' width='600px' />
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
                        sm={12}
                        md={12}
                        sx={{
                            //paddingBottom: '4rem',
                            margin: 0
                        }}
                    >
                        <Grid container
                            direction='row'
                            spacing={2}
                            xs={12}
                            sm={6}
                            md={6}
                        >
                            <Grid item>
                                <Grid container
                                    xs={12}
                                    sm={12}
                                    md={12}>
                                    <AlignTextBox>
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
                                        <Grid item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            sx={{
                                                textAlign: 'left',
                                                lineHeight: 1.2
                                            }}
                                        >
                                            <Typography
                                                variant='caption'
                                                sx={{
                                                    color: '#0D3475',
                                                    fontSize: '1.6rem',
                                                    lineHeight: 1.2,
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                Our pillars are
                                            </Typography>
                                            <Typography
                                                variant='caption'
                                                sx={{
                                                    color: '#D46918',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.6rem',
                                                    lineHeight: 1.2
                                                }}
                                            > strong
                                            </Typography>
                                            <Typography

                                                variant='caption'
                                                sx={{
                                                    color: '#0D3475',
                                                    fontSize: '1.6rem',
                                                    lineHeight: 1.2,
                                                    fontWeight: 'bold'
                                                }}
                                            > and our foundations are
                                            </Typography>
                                            <Typography
                                                variant='caption'
                                                sx={{
                                                    color: '#D46918',
                                                    fontSize: '1.6rem',
                                                    lineHeight: 1.2,
                                                    fontWeight: 'bold'
                                                }}
                                            > solid.
                                            </Typography>
                                        </Grid>
                                        <Grid item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            sx={{
                                                textAlign: 'left',
                                                marginTop: '1.2rem'
                                            }}
                                        >
                                            <Typography
                                                variant='caption'
                                                sx={{
                                                    color: '#0D3475',
                                                    fontSize: '1rem'
                                                }}
                                            > We lift up people and develop their skills, we grow together and we learn from each other. We celebrate each other, we celebrate you and your ideas! We encourage hobbies and activities outside the workplace to keep our minds and bodies active and stress-free.
                                            </Typography>
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
                                    </AlignTextBox>
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
                        width: '100%'
                    }}
                >
                    <SubtitleBox
                        sx={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden'
                        }}
                    >
                        <Subtitle color='#134487' label=' our pillars ' stroke='1px' direction='right' />
                    </SubtitleBox>
                </Grid>
            </Grid>
        </PillarsBox>
    );
}