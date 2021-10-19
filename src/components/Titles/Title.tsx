import * as React from 'react';
import { FC } from 'react'
import { Box, styled, Typography } from '@mui/material';

const TitleBox = styled('div')(({ theme }) => ({
  margin: 0,
  padding: 0,
  [theme.breakpoints.down('sm')]: {
    h1: {
      transform: 'none',
      fontSize: '2.35rem',
      textAlign: 'left',
      textAlignLast: 'left',
      marginLeft: '1rem',
      marginTop: '2rem',
      marginBottom: '2rem'
    }
  },
  [theme.breakpoints.between('sm', 'md')]: {
    h1: {
      transform: 'none',
      fontSize: '3rem',
      textAlign: 'left',
      textAlignLast: 'left',
      marginLeft: '1rem',
      marginTop: '2rem',
      marginBottom: '2rem'
    }
  },
  [theme.breakpoints.between('md', 'lg')]: {
    h1: {
      transform: 'rotate(-90deg)',
      fontSize: '4rem'
    }
  },
  [theme.breakpoints.up('lg')]: {
    h1: {
      transform: 'rotate(-90deg)',
      fontSize: '5rem'
    }
  }
}));

export const Title: FC<TitleProps> = ({
  label,
  color
}: TitleProps) => {
  return (
    <TitleBox>
      <Typography
        component='h1'
        variant='h2'
        sx={{
          color: `${color}`,
          WebkitTextFillColor: 'transparent',
          WebkitTextStrokeWidth: '0.5px',
          WebkitTextStrokeColor: `${color}`,
          fontWeight: 'bold'
        }}
      >
        {label}
      </Typography>
    </TitleBox>
  )
}
export type TitleProps = {
  label: string
  color: string | '#000000'
};