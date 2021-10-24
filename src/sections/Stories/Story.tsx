import React from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import { Title } from '../../components/Titles/Title';
import orangeBlueBox from '../../assets/OrangeBlueBox.svg'
import orangeBigBox from '../../assets/OrangeBlueBox.svg'

const StoryBox = styled('div')(({ theme }) => ({
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
        },
        h5: { fontSize: '1rem' },
        span: {
            fontSize: '.7rem',
            textAlign: 'center'
        }
    },
    [theme.breakpoints.between('sm', 'md')]: {
        marginTop: '5rem',
        h1: {
            transform: "rotate(-90deg)",
            fontSize: "3rem",
            marginTop: "9rem",
            marginBottom: "2rem"          
        },
        h5: { fontSize: '1.2rem' },
        span: {
            fontSize: '.7rem',
            textAlign: 'left'
        }
    },
    [theme.breakpoints.between('md', 'lg')]: {
        marginTop: '5rem',
        h1: {
            transform: "rotate(-90deg)",
            fontSize: "4rem",   
            marginTop: "13rem",
            marginBottom: "2rem"
        },
        h5: { fontSize: '1.45rem' },
        span: { fontSize: '.8rem' }
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
        },
        h5: { fontSize: '1.58rem' },
        span: { fontSize: '1rem' }
    },
}
));

const ImgBox = styled('div')(({ theme }) => ({
    margin: 0,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        textAlign: '-webkit-right',
        alignContent: 'right',
        marginLeft: '6rem',
        marginTop: '-100px',
        overflow: 'hidden'
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

export const Story = () => {
    return (
        <StoryBox sx={{width: '100%'}}>
            <Grid container
                spacing={2}
                xs={12}
                sm={12}
                md={12}
                sx={{margin: 0, width: '100%'}}
            >
                <Grid item
                    xs={12}
                    sm={3}
                    md={3}
                    sx={{
                        padding: 0,
                        flexGrow: 0,
                        backgroundColor: '#fff',
                        alignSelf:'start'
                    }}
                >
                    <Title color='#D46918' label='OUR STORY' />
                </Grid>
                <Grid item
                    xs={12}
                    sm={9}
                    md={9}
                >
                    <Grid container
                        spacing={2}
                        xs={12}
                        sm={12}
                        md={12}
                        sx={{
                            paddingBottom: '4rem',
                            margin: 0,
                            justifyContent: 'space-between'
                        }}
                    >
                        <Grid container
                            direction='column'
                            spacing={2}
                            xs={12}
                            sm={6}
                            md={6}
                        >
                            <AlignTextBox>
                                <Grid item
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    sx={{
                                        textAlign: 'left',
                                        alignItems: 'bottom'
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
                                        alignItems: 'bottom'
                                    }}
                                >
                                    <Typography
                                        variant='h5'
                                        sx={{
                                            color: '#0D3475',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Kampanos is a full remote IT, tech and design solutions company based in Portugal.
                                    </Typography>
                                </Grid>
                                <Grid item
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    sx={{
                                        textAlign: 'left'
                                    }}
                                >
                                    <Typography
                                        variant='caption'
                                        sx={{
                                            color: '#0D3475',
                                            fontSize: '.8rem'
                                        }}
                                    >
                                        Our team is
                                        <Typography
                                            variant='caption'
                                            sx={{
                                                color: '#D46918',
                                                fontWeight: 'bold',
                                                fontSize: '.8rem'
                                            }}
                                        > focused, professional, experienced
                                        </Typography>
                                        <Typography
                                            variant='caption'
                                            sx={{
                                                color: '#0D3475',
                                                fontSize: '.8rem'
                                            }}
                                        > but always learning more and open to all kinds of input. Young and cooperative, we are engaged on working in the past present and future.
                                        </Typography>
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


                        <Grid container
                            direction='column'
                            spacing={2}
                            xs={12}
                            sm={6}
                            md={6}
                            sx={{
                                textAlign: 'right',
                                alignItems: 'right',
                                justifyContent: 'right',
                                alignSelf: 'right',
                            }}
                        >
                            <Grid item
                                xs={12}
                                sm={3}
                                md={3}
                                sx={{
                                    padding: 0,
                                    textAlign: 'right',
                                    alignItems: 'right',
                                    justifyContent: 'right',
                                    alignSelf: 'right',
                                    //maxWidth: 200
                                }}
                            >
                                <ImgBox
                                    sx={{
                                        padding: 0,
                                        textAlign: 'right',
                                        justifyContent: 'right'
                                    }}
                                >
                                    <img src={orangeBlueBox} alt='Orange Blue Box' title='Orange Blue Box' width='200px' />
                                </ImgBox>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </StoryBox>
    );
}