import React from 'react';

import { Box, Grid, Link, Typography, Icon,  styled} from '@mui/material';

import { ReactComponent as FacebookIcon } from '../../assets/FacebookIcon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/LinkedinIcon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/InstagramIcon.svg';



const Terms = styled('div')(({ theme }) => ({
  padding: 0,
  marginTop: '2rem',
  [theme.breakpoints.down('sm')]: {
   justifyContent: "center",
   paddingRight: 0
  },
  [theme.breakpoints.between('sm', 'md')]: {
    justifyContent: "center",
   paddingRight: 0
  },
  [theme.breakpoints.between('md', 'lg')]: {
    justifyContent: "right",
   paddingRight: '3rem',
  },
  [theme.breakpoints.up('lg')]: {
    justifyContent: "right",
   paddingRight: '3rem',
  },
}));





const Footer = () => {
  return (
    <Box sx= {{marginY: '6rem'}}>
      <Grid container 
        xs={12}
        sm={12}
        md={12}
        lg={12}
        direction='column'
        rowSpacing={3}

        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexGrow: 1,
          backgroundColor: '#4177B7',
          width: '100%',
          paddingBottom: '2.5rem',
          paddingTop: '5rem',
          textAlign: 'center',
          
        }}


      >


        <Grid item>
          {/* //1 */}
          <Typography
            color="white" variant="h4"
          >kampanos.</Typography>
        </Grid>


        <Grid item  
       
        >
          <Grid container
            spacing={4} sx={{
              justifyContent: 'center',
              textAlign: 'center'
            }}>
            <Grid item 
             xs={12}
             sm={12}
             md={1}
             lg={1}>
              <Link  href="#header" underline="hover" color="#FAFAFA" >Home</Link>
            </Grid>
            <Grid item
            xs={12}
            sm={12}
            md={1}
            lg={1}>
              <Link href="#about" underline="hover" color="#FAFAFA" >About us</Link>
            </Grid>
            <Grid item
            xs={12}
            sm={12}
            md={1}
            lg={1}>
              <Link  href="#service" underline="hover" color="#FAFAFA" >Our service</Link>
            </Grid>
            <Grid item
            xs={12}
            sm={12}
            md={1}
            lg={1}>
              <Link  href="#story" underline="hover" color="#FAFAFA" >Our story</Link>
            </Grid>
            <Grid item
            xs={12}
            sm={12}
            md={1}
            lg={1} >
              <Link   href="#team" underline="hover" color="#FAFAFA"  >Our team</Link>
            </Grid>
            <Grid item >
              <Link href="https://www.linkedin.com/company/kampanos/"  underline="hover" color="#FAFAFA"
              >Jobs offer</Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container sx={{
            justifyContent: 'center'
          }}>
            <Grid item>
              <Link href="#"><FacebookIcon /> </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.linkedin.com/company/kampanos/" ><LinkedinIcon /> </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.instagram.com/kampanos.pt/" ><InstagramIcon /> </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            color="#D9DBE1"
          > 2021 © Kampanos All rights reserved.️ </Typography>
        </Grid>

        <Terms> 
        <Grid item >
          <Grid container  spacing={2} >
            <Grid item xs={12}
            sm={12}
            md={1}
            lg={1} >
              <Link underline="hover" color="#FCEDD0" href="#">Terms of use</Link>
            </Grid>
            <Grid item xs={12}
            sm={12}
            md={1}
            lg={1}>
              <Link underline="hover" color="#FCEDD0" href="#">Privacy Policy</Link>
            </Grid>
            <Grid item xs={12}
            sm={12}
            md={1}
            lg={1}>
              <Link underline="hover" color="#FCEDD0" href="#">Cookie Policy</Link>
            </Grid>
          </Grid>
        </Grid>
        </Terms>


      </Grid>
    </Box>
  )
}
export default Footer


