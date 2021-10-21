import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
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



export const Team: FC<TeamProps> = ({
  props
}: TeamProps) => {
  return (
    <Grid container spacing={2} sx={{
      width: '100%',
      backgroundImage: `URL(${OurTeamEffects})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      alignItems: 'center',
      margin: '2rem 2rem 6rem 4rem'
    }} >
      <Grid item xs={12} md={4} sx={{ alignSelf: 'start' }}>
        <Title color="#D46918" label="OUR TEAM" />
      </Grid>
      <Grid item xs={6} md={8}
      >
        <Grid container spacing={2} columns={3} rowSpacing={6} sx={{ textAlign: 'center' }}>
          <Grid item >
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
          <Grid item>
            <Grid container spacing={2} >

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
          <Grid item>
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
    // </Box>
  );
}
export type TeamProps = {
  props: any
}