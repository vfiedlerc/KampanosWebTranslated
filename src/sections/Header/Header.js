import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import centerLogo from '../../assets/KampanosLogo.svg'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const Header = () => {
  return (
    <>
    {/* <Navbar /> */}
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid
        item
        xs={4}
        sm={4}
        md={4}
        sx={{
          padding: 0,
          margin: 0,
          backgroundColor: '#fff'
        }}
      >
        <img src={centerLogo} alt='KampanosLogo' title='KampanosLogo' />
      </Grid>
    </Grid>
    </>
  )
}
export default Header
