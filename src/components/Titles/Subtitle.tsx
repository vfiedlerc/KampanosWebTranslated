import * as React from 'react';
import "./Subtitle.css"
import { FC } from 'react'
import { Box, styled, Typography } from '@mui/material';
import Marquee from "react-fast-marquee";

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
  stroke,
  direction
}: SubtitleProps) => {
  return (
    <SubtitleBox>
      <Marquee
        direction={direction}
        speed={90}
        gradient={false}
        delay= {0}
      >
        <Typography
          variant='caption'
          sx={{
            color: `${color}`,
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: 'bold',
            paddingRight: '5px'
          }}
        > {label}
        </Typography>
        <Typography
          variant='caption'
          sx={{
            color: `${color}`,
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: 'bold',
            paddingRight: '5px'
          }}
        > {label}
        </Typography>
        <Typography
          variant='caption'
          sx={{
            color: `${color}`,
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: 'bold',
            paddingRight: '5px'
          }}
        > {label}
        </Typography>
        <Typography
          variant='caption'
          sx={{
            color: `${color}`,
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: 'bold',
            paddingRight: '5px'
          }}
        > {label}
        </Typography>
        <Typography
          variant='caption'
          sx={{
            color: `${color}`,
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: 'bold',
            paddingRight: '5px'
          }}
        > {label}
        </Typography>
        <Typography
          variant='caption'
          sx={{
            color: `${color}`,
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeWidth: `${stroke}`,
            WebkitTextStrokeColor: `${color}`,
            fontWeight: 'bold',
            paddingRight: '5px'
          }}
        > {label}
        </Typography>
      </Marquee>
    </SubtitleBox>
  )
}
export type SubtitleProps = {
  label: string
  color: string | '#000000'
  stroke: string
  direction: 'left' | 'right' | undefined
};