import * as React from 'react';
import Header from '../sections/Header/Header.js'
import { Service } from '../sections/Services/Service'
import { Story, Countries, Goals, Pillars } from '../sections/Stories'
import { Team } from '../sections/Teams/Team'
import Footer from '../sections/Footer/Footer.js'
import { Box } from '@mui/material';
import { About } from '../sections/About/About';

//import { MediaCard } from '../components/Cards/MediaCard';

function Home() {
    return (
        <Box>
           <Header />
            <About />
            <Service />
            <Story />
            <Goals />
            <Pillars />
            <Countries />
            <Team />
            <Footer />
        </Box>
    )
}
export default Home;




    
