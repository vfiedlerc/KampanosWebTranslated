import * as React from 'react';
import { FC } from 'react'
import { Box, styled, Typography } from '@mui/material';

const SubtitleBox = styled('span')(({ theme }) => ({
  margin: 0,
  padding: 0,
  [theme.breakpoints.down('sm')]: {
    h6: {
    //   marginTop: '2rem',
    //   marginBottom: '2rem'
    }
  },
  [theme.breakpoints.between('sm', 'md')]: {
    h6: {
    //   marginTop: '2rem',
    //   marginBottom: '2rem'
    }
  },
  [theme.breakpoints.between('md', 'lg')]: {
    h6: {
    }
  },
  [theme.breakpoints.up('lg')]: {
    h6: {
    }
  }
}));

export const Subtitle: FC<SubtitleProps> = ({
  label,
  color,
  stroke
}: SubtitleProps) => {
  return (
    <SubtitleBox>
      <Typography
        variant='caption'
        sx={{
          color: `${color}`,
          WebkitTextFillColor: 'transparent',
          WebkitTextStrokeWidth: `${stroke}`,
          WebkitTextStrokeColor: `${color}`,
          fontWeight: 'bold'
        }}
      >
        {label}
      </Typography>
    </SubtitleBox>
  )
}
export type SubtitleProps = {
  label: string
  color: string | '#000000'
  stroke: string
};