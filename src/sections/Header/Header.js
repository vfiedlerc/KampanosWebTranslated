import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import centerLogo from '../../assets/KampanosLogo.svg'
import headerPhrase from '../../assets/headerphrases.png'
import Topbar from '../../components/Topbar/Topbar'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const Header = () => {
  return (
    <>
      <Topbar />
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '90vh' }}
      >
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
      <Box 
      sx={{ width: '100%', height: 185, bottom: 0, 
      backgroundImage: `url(${headerPhrase})`,
      backgroundSize: 'cover',
      }}>
      </Box>
    </>
  )
}
export default Header
