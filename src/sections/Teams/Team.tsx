import React from 'react';
import { Box, Grid, styled, Typography } from '@mui/material';
import { FC } from 'react'
import { MediaCard } from '../../components/Cards/MediaCard';
import andreas from '../../assets/Andreas.jpg';
import rafael from '../../assets/Rafael.jpg';
import michael from '../../assets/Michael.jpg';
import vinicius from '../../assets/Vinicius.jpg';
import guilherme from '../../assets/Guilherme.jpg';
import joao from '../../assets/Joao.jpg';
import eva from '../../assets/Eva.jpg';
import aline from '../../assets/Aline.jpg';
import bruno from '../../assets/Bruno.jpg';
import Button from '@mui/material/Button';
import OurTeamEffect from '../../assets/OurTeamEffect.png';
import OurTeamEffects from '../../assets/OurTeamEffect.svg';
import { Title } from '../../components/Titles/Title';
import { Subtitle } from '../../components/Titles/Subtitle';

const FontsBox = styled("div")(({ theme }) => ({
  margin: 0,
  padding: 0,

  [theme.breakpoints.down("sm")]: {
    h1: {
      transform: "none",
      fontSize: "2rem",
      textAlign: "left",
      textAlignLast: "left",
      marginLeft: "1rem",
      marginTop: "2rem",
      marginBottom: "2rem",
    },
  },
  [theme.breakpoints.between("sm", "md")]: {
    h1: {
      transform: "none",
      fontSize: "2.5rem",
      textAlign: "left",
      textAlignLast: "left",
      marginLeft: "1rem",
      marginTop: "2rem",
      marginBottom: "2rem",
    }
  },
  [theme.breakpoints.between("md", "lg")]: {
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
  [theme.breakpoints.up("lg")]: {
    h1: {
      transform: "rotate(-90deg)",
      fontSize: "5rem",
      textAlign: "left",
      textAlignLast: "left",
      marginLeft: "1rem",
      marginTop: "9rem",
      marginBottom: "2rem",
    }
  },
}));
const SubtitleBox = styled('span')(({ theme }) => ({
  margin: 0,
  padding: 0,
  [theme.breakpoints.down('sm')]: {
    span: {
      fontSize: '1.5rem',
      textAlign: 'center',
      lineHeight: 1.35

    }
  },
  [theme.breakpoints.between('sm', 'md')]: {
    span: {
      fontSize: '2rem',
      textAlign: 'center',
      lineHeight: 1.35
    }
  },
  [theme.breakpoints.between('md', 'lg')]: {
    span: {
      fontSize: '2.5rem',
      textAlign: 'center',
      lineHeight: 1.35
    }
  },
  [theme.breakpoints.up('lg')]: {
    span: {
      fontSize: '3.2rem',
      textAlign: 'center',
      lineHeight: 1.35
    }
  }
}));

export const Team: FC<TeamProps> = ({
  props
}: TeamProps) => {
  return (
    <FontsBox>

      <Grid container spacing={2} sx={{
        width: '100%',
        alignItems: 'center',
        backgroundImage: `URL(${OurTeamEffects})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',        
        margin: '2rem 2rem 6rem 4rem',
      }} >

        <Grid item xs={12} md={4} sx={{
          alignSelf: 'start',
          zIndex: 900
        }}>
          <Title color="#D46918" label="OUR TEAM" />
        </Grid>

        <Grid item xs={6} md={8}>

          {/* <Grid container spacing={2} columns={3} rowSpacing={6} sx={{ textAlign: 'center', zIndex: 900, marginTop: '-250px' }}> */}
          <Grid container spacing={2} columns={3} rowSpacing={6} sx={{ textAlign: 'center' }}>
            <Grid item sx={{ textAlign: 'center', zIndex: 900 }}>
              <Grid container spacing={2} >
                <Grid item>
                  <MediaCard image={andreas} title='Andreas Thomae' text='CEO & Chief of Development' />
                </Grid>
                <Grid item>
                  <MediaCard image={andreas} title='Rafael Facadas' text='UX/UI & Visual Designer' />
                </Grid>
                <Grid item>
                  <MediaCard image={andreas} title='Michael Wiederkehr' text='Key-Account Manager' />
                </Grid>
              </Grid>
            </Grid>

            <Grid item >
              <Grid container spacing={2}>
                <Grid item>
                  <MediaCard image={andreas} title='Vinícius Fiedler' text='  Full-Stack Developer' />
                </Grid>
                <Grid item>
                  <MediaCard image={andreas} title='Guilherme Lemos' text='UX/UI & Visual Designer' />
                </Grid>
                <Grid item>
                  <MediaCard image={andreas} title='João Bugarin' text='Software Developer' />
                </Grid>
              </Grid>
            </Grid>

            <Grid item >
              <Grid container spacing={2}>
                <Grid item>
                  <MediaCard image={andreas} title='Eva Dias' text='UX/UI & Visual Designer' />
                </Grid>
                <Grid item>
                  <MediaCard image={andreas} title='Aline Souza' text='Software Developer' />
                </Grid>
                <Grid item>
                  <MediaCard image={andreas} title='Bruno Buss' text='Web & Front-end Developer' />
                </Grid>
              </Grid>
            </Grid>



          </Grid>

        </Grid>
        
      </Grid>
    </FontsBox >
  );
}
export type TeamProps = {
  props: any
}

{/*   <SubtitleBox
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          transform: 'rotate(-20deg)',
          zIndex: -999,
          height: '100%',
          alignSelf: 'center',
          position: 'relative'
        }}
      >
        <Subtitle color='#6AA2DB' label="WE'RE PEOPLE. WE'RE TEAM. WE'RE REMOTE COMPANY. WE'RE PASSION. " stroke='2px' direction='right' />
        <Subtitle color='#D46918' label="WE'RE PEOPLE. WE'RE TEAM. WE'RE REMOTE COMPANY. WE'RE PASSION. " stroke='2px' direction='left' />
        <Subtitle color='#6AA2DB' label="WE'RE PEOPLE. WE'RE TEAM. WE'RE REMOTE COMPANY. WE'RE PASSION. " stroke='2px' direction='right' />
      </SubtitleBox> */}