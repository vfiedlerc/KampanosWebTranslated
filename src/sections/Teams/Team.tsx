import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react'
import { MediaCard } from '../../components/Cards/MediaCard';
import andreasT from '../../assets/AndreasThomae.jpg';

export const Team: FC<TeamProps> = ({
  props
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
                <MediaCard image={andreasT} title='Andreas Thomae' text='CEO & Chief of Development' />
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