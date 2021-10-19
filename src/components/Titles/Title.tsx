import * as React from 'react';
import { FC } from 'react'
import { Box, Typography } from '@mui/material';

export const Title: FC<TitleProps> = ({
  label,
  color
}: TitleProps) => {
  return (
    <Box>
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
    </Box>
  )
}
export type TitleProps = {
  label: string
  color: string | '#000000'
};