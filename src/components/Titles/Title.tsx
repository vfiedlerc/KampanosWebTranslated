import * as React from 'react';
import { FC } from 'react'
import { Box, Typography } from '@mui/material';

export const Title: FC<TitleProps> = ({
  label,
  color
}: TitleProps) => {
  return (
    <Box
      sx={{
        transform: 'rotate(-90deg)'
      }}
    >
      <Typography
        component='h2'
        variant='h2'
        sx={{
          color: `${color}`
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