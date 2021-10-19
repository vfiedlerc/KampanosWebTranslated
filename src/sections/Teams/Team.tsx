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




export const Team: FC<TeamProps> = ({
  props
}: TeamProps) => {
  return (
    <Grid container spacing={2} >
      <Grid item md={4}>






        {/* <img src="./assets/andreasTh.jpg"/>  */}

        <Typography
        sx={{
          transform: 'rotate(-90deg)',
          fontSize: '88px',
          color: '#D46918;'
        }}
        >
          Our Team
        </Typography> 


      </Grid>
      <Grid item md={8}>
        <Grid container spacing={2} columns={3} rowSpacing={6}>
          <Grid item >
            <Grid container spacing={2} >
              <Grid item>

                <MediaCard image={andreas} title='Andreas Thomae' text='CEO & Chief of Development' />
              </Grid>
              <Grid item>

                <MediaCard image={rafael} title='Rafael Facadas' text='UX/UI & Visual Designer' />

              </Grid>
              <Grid item>

                <MediaCard image={michael} title='Michael Wiederkehr' text='Key-Account Manager' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={2} >
              <Grid item>
                <MediaCard image={vinicius} title='Vinícius Fiedler' text=' Full-Stack Developer' />
              </Grid>
              <Grid item>
                <MediaCard image={guilherme} title='Guilherme Lemos' text='UX/UI & Visual Designer' />
              </Grid>
              <Grid item>
                <MediaCard image={joao} title='João Bugarin' text='Software Developer' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <MediaCard image={eva} title='Eva Dias' text='UX/UI & Visual Designer' />
              </Grid>
              <Grid item>
                <MediaCard image={aline} title='Aline Souza' text='Software Developer' />
              </Grid>
              <Grid item>
                <MediaCard image={bruno} title='Bruno Buss' text='Web & Front-end Developer' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export type TeamProps = {
  props: any
};