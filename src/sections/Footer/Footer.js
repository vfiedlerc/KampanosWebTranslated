import React from 'react';
import './Footer.css';
import { Box, Grid, Typography } from '@mui/material';

const Footer = () => {
  return (    
      <Box>
        <Grid container
        
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexGrow: 1,
          backgroundColor: '#4177B7',
          width: '100%',
          paddingY: '6rem'
        }}
        
        >

<Typography>
  Kampanos.
</Typography>





        </Grid>
      </Box>
  )
}
export default Footer


// < div className = "background" >
//   <h1>kampanos.</h1>
//   <a href="#Home">Home</a>
//   <a href="#AboutUs"> About us</a>
//   <a href="#OurServices">About us</a>
//   <a href="#OurHistory">Our history</a>
//   <a href="#JobOffers">job offers</a>
//   <div>
//     <p className="AllRightsReserved">2021 @ Kampanos All rights reserved.</p>
//   </div>
//   <a>Terms of use</a>
//   <a>Privacy Policy</a>
//   <a>Cookie Policy</a>
// </div >