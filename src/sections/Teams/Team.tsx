import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react'
import {MediaCard} from '../../components/Cards/MediaCard';

import AndreasThomae from '../../assets/AndreasThomae.jpg';

//export const Team = () => {

  //const eva = 'Eva Dias';
  //const bruno = 'Bruno Buss';
  //const rafael = 'Rafael Facadas';
  //const andreas = 'Andreas Thomae';
  //const vinicius = 'Vinicius Fiedler';
  //const guilherme = 'Guilherme';
  //const michael = 'Michael Wiederkehr';
  //const aline = 'Aline Souza';
  //const joao = 'Joao Bugarin';

  


  export const Team: FC<TeamProps> = ({
   andreas
}: TeamProps) => {
  return (
    <Grid container>
       <Grid item>

        <Typography>
          Our Team
        </Typography>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <Grid container>
              <Grid item>
                <MediaCard  image={andreas.image} title={andreas.title} text={andreas.text}/>
              </Grid>
              <Grid item>
              {/* <MediaCard  img={img1} title={bruno} text={text}/> */}
              </Grid>
              <Grid item>
              {/* <MediaCard  img={img1} title={bruno} text={text}/> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
              {/* <MediaCard  img={img1} title={bruno} text={text}/> */}
              </Grid>
              <Grid item>
              {/* <MediaCard  img={img1} title={bruno} text={text}/> */}
              </Grid>
              <Grid item>
              {/* <MediaCard  img={img1} title={bruno} text={text}/> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                {/* <MediaCard img={img1} title={ michael} text={text} /> */}
              </Grid>
              <Grid item>
                {/* <MediaCard img={img1} title={aline } text={text} /> */}
              </Grid>
              <Grid item>
                {/* <MediaCard img={img1} title={joao } text={text} /> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid> 
    </Grid>
  );
}
export type TeamProps = {
  andreas: {

    image: '../../assets/AndreasThomae.jpg', 
    title: 'Andreas Thomae',
    text: 'CEO & Chief of Development'
  }
};