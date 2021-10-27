import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import centerLogo from '../../assets/KampanosLogo.svg'
import headerPhrase from '../../assets/headerphrases.png'
import Topbar from '../../components/Topbar/Topbar'
import { Subtitle } from '../../components/Titles/Subtitle'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const SubtitleBox = styled('div')(({ theme }) => ({
  margin: 0,
  padding: 0,
  [theme.breakpoints.down('sm')]: {
    span: {
      fontSize: '1.5rem',
      textAlign: 'center',
      lineHeight: 1.35

    }
  },
  [theme.breakpoints.between('sm', 'md')]: {
    span: {
      fontSize: '2rem',
      textAlign: 'center',
      lineHeight: 1.35
    }
  },
  [theme.breakpoints.between('md', 'lg')]: {
    span: {
      fontSize: '2.5rem',
      textAlign: 'center',
      lineHeight: 1.35
    }
  },
  [theme.breakpoints.up('lg')]: {
    span: {
      fontSize: '3rem',
      textAlign: 'center',
      lineHeight: 1.35
    }
  }
}));

const HeaderBox = styled('div')(({ theme }) => ({
  margin: 0,
  padding: 0,
  display: 'flex',
  
  [theme.breakpoints.down('sm')]: {
    minHeight: '80vh'
  },
  [theme.breakpoints.between('sm', 'md')]: {
    minHeight: '75vh'
  },
  [theme.breakpoints.between('md', 'lg')]: {
    minHeight: '70vh'
  },
  [theme.breakpoints.up('lg')]: {
    minHeight: '65vh'
  }
}));

const Header = () => {
  return (
    <>
      <Topbar />
      <HeaderBox>
        <Grid container id="header"
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
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
            <img src={centerLogo} alt='Kampanos' title='Kampanos' />
          </Grid>
        </Grid>
      </HeaderBox>
      <SubtitleBox
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }}
      >
        <Subtitle color='#6AA2DB' label="WE'RE PEOPLE. WE'RE TEAM. WE'RE REMOTE COMPANY. WE'RE PASSION. " stroke='1.4px' direction='right' />
        <Subtitle color='#D46918' label="WE'RE PEOPLE. WE'RE TEAM. WE'RE REMOTE COMPANY. WE'RE PASSION. " stroke='1.4px' direction='left' />
        <Subtitle color='#6AA2DB' label="WE'RE PEOPLE. WE'RE TEAM. WE'RE REMOTE COMPANY. WE'RE PASSION. " stroke='1.4px' direction='right' />
      </SubtitleBox>

    </>
  )
}
export default Header
