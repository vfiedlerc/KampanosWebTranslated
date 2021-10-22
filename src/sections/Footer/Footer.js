import React from 'react';

import { Box, Grid, Link, Typography, Icon } from '@mui/material';

import { ReactComponent as FacebookIcon } from '../../assets/FacebookIcon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/LinkedinIcon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/InstagramIcon.svg';


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


        <Grid item >

          {/* //2 */}




          <Grid container


            spacing={4} sx={{
              justifyContent: 'center',
              textAlign: 'center'
            }}>

            <Grid item >
              <Link  underline="hover" color="#FAFAFA" >Home</Link>
              {/* //1 */}
            </Grid>

            <Grid item>
              <Link href="" underline="hover" color="#FAFAFA" >About us</Link>
              {/* //2 */}
            </Grid>

            <Grid item>
              <Link underline="hover" color="#FAFAFA" >Our service</Link>
              {/* //3 */}
            </Grid>

            <Grid item>
              <Link underline="hover" color="#FAFAFA" >Our story</Link>
              {/* //4*/}
            </Grid>

            <Grid item >
              <Link underline="hover" color="#FAFAFA"  >Our team</Link>
              {/* //5 */}
            </Grid>

            <Grid item >
              <Link underline="hover" color="#FAFAFA"
              >Jobs offer</Link>
              {/* //6 */}
            </Grid>

          </Grid>

        </Grid>


        <Grid item>
          {/* //3 */}
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


        <Grid item >
          <Grid container sx={{ paddingRight: '5.5rem' }} spacing={2} justifyContent="right">


            <Grid item >
              <Link underline="hover" color="#FCEDD0" href="#"> Terms of use </Link>
            </Grid>

            <Grid item>
              <Link underline="hover" color="#FCEDD0" href="#">  Privacy Policy</Link>
            </Grid>

            <Grid item>
              <Link underline="hover" color="#FCEDD0" href="#"> Cookie Policy </Link>
            </Grid>
          </Grid>
        </Grid>



      </Grid>
    </Box>
  )
}
export default Footer


