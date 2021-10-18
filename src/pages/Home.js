import * as React from 'react';
import Header from '../sections/Header/Header.js'
import About from '../sections/About/About.js'
import { Service } from '../sections/Services/Service'
import { Story } from '../sections/Stories/Story'
//import Team from '../sections/Team/Team.js'
import Footer from '../sections/Footer/Footer.js'
import { Box } from '@mui/material';
import {MediaCard} from '../components/Cards/MediaCard';


function Home() {
    return (
        <Box>
            {/*<Header />
            <About />
            {/* <Service /> 
            <Story /> 
           
            <Footer /> */}

            <MediaCard />
        </Box>
    )
}
export default Home;




    //< div >
    //         <div >
    //             <KampanosLogo className="logo" />
    //         </div>
    //         <div >
    //             <p>@ Kampanos 2021</p>
    //         </div>
    //         <div >
    //             <FacebookIcon />
    //         </div>
    //         <div >
    //             <LinkedinIcon />
    //         </div>
    //         <div >
    //             <InstagramIcon />
    //         </div>
    //         <div>
    //             <CompanyEffect />
    //             <CompanyEffect />
    //             <CompanyEffect />
    //         </div>
    //         <div className="container1">
    //             <h1 className="IlustrationTitle1">Kampanos is a fully remote IT and tech solutions company...</h1>
    //             <p className="IlustrationParagraph1">that aims to create the best apps, websites, landing pages, tech and visual solutions for our clients.
    //                 Working at Kampanos means working remotely. We strongly believe that remote jobs are the future and sucess can be achieved through this.
    //             </p>
    //             <Image1 />
    //         </div>
    //         <div className="container2">
    //             <Image2 />
    //             <h1 className="IlustrationTitle2">Success comes from passion and motivation...</h1>
    //             <p className="IlustrationParagraph2">the love for being part of something that makes a difference in the world, that drives people, companies and projects
    //                 Grabbing our digital construction tools from home allows us to build amazing things in this incredible and ever-growing digital world.
    //             </p>
    //         </div>
    //         <div className="container3">
    //             <h1 className="IlustrationTitle3">We celebrate loyalty and achievements.</h1>
    //             <p className="IlustrationParagraph3">We want to help you achieve your goals and your dreams.
    //             </p>
    //             <Image3 />
    //         </div>
    //         <div className="container4">
    //             <Image4 />
    //             <h1 className="IlustrationTitle4">We offer a slate of services regarding IT...</h1>
    //             <p className="IlustrationParagraph4">and Technology aswell as App Design and Development, Web Design solutions, Marketing and Social Media, Branding, Graphic Design, Programming and more.
    //             </p>
    //             <TimeToFly />
    //         </div>
    //         <div className="container5">
    //             <p className="HighTech">We use High technology that works. We always get it done</p>
    //             <div className="HighT">
    //                 <HighTechnology />
    //             </div>
    //             <div className="OurService">
    //                 <OurService />
    //             </div>
    //             <div>
    //                 <UxUiDesign />
    //                 <p className="UxUiDesignPhrase">
    //                     Mobile & Web Design
    //                     Visual Design
    //                     User Testing
    //                     Design System
    //                     Prototype
    //                     Presentations
    //                 </p>
    //             </div>
    //             <div>
    //                 <UxUiDesign2 />
    //             </div>
    //             <div>
    //                 <FrontEnd />
    //                 <p className="FrontEndPhrase">
    //                     Component based Front-End
    //                     Web & Mobile
    //                     Native apps
    //                     API Connections
    //                     React Native
    //                     Fast Development
    //                     Trustable & Fast Delivery
    //                 </p>
    //             </div>
    //             <div>
    //                 <OurStory />
    //             </div>
    //             <div className="Rectangle">
    //                 <Rectangle />
    //             </div>
    //             <div className="descriptionKampanos">
    //                 <p>
    //                     Kampanos is a full remote IT, tech and design solutions company based in Portugal.
    //                 </p>
    //                 <div className="subdescriptionKampanos">
    //                     <p>
    //                         Our team is focused, professional, experienced but always learning more and open to all kinds of input. Young and cooperative, we are engaged on working in the past present and future.
    //                     </p>
    //                 </div>
    //             </div>
    //             <div className="Rectangle2">
    //                 <Rectangle />
    //             </div>
    //             <div>
    //                 <Degrade />
    //             </div>
    //             <div className="parafrase">
    //                 <p>
    //                     The past to maintain your projects.
    //                     The present to work on your projects.
    //                     The future to finish and celebrate your projects.
    //                 </p>
    //             </div>
    //             <div>
    //                 <Degrade2 />
    //             </div>
    //             <div className="Rectangle3">
    //                 <Rectangle />
    //             </div>
    //             <div> <p className="parafrase2">Our pillars are strong and our foundations are solid. </p></div>
    //             <div>
    //                 <p className="parafrase3">

    //                     We lift up people and develop their skills, we grow together and we learn from each other. We celebrate each other, we celebrate you and your ideas! We encourage hobbies and activities outside the workplace to keep our minds and bodies active and stress-free.
    //                 </p>
    //             </div>
    //             <div className="Rectangle4">
    //                 <Rectangle />
    //             </div>
    //             <div>
    //                 <OurPillars />
    //                 <OurPillars />
    //                 <OurPillars />
    //                 <OurPillars />
    //             </div>
    //             <div className="parafrase4">
    //                 <p>
    //                     We have from several countries working together every day to achieve amazing results.
    //                     We value loyalty and freedom. We create leaders and relationships. We are motivated and passionate.
    //                 </p>
    //             </div>
    //             <div>
    //                 <OurTeam />
    //             </div>
    //             <div>
    //                 <OrangeCard />
    //                 <BlueCard />
    //                 <OrangeCard />
    //                 <BlueCard />
    //                 <OrangeCard />
    //                 <BlueCard />
    //                 <OrangeCard />
    //                 <BlueCard />
    //                 <OrangeCard />
    //                 <Effect4 />
    //             </div>
    //             <div>
    //                 <ReadyToFly />
    //             </div>
    //             <div>
    //                 <a className="InternalLinkLetsWorkTogether" href="#">Let's Work together!</a>

    //                 <div className="paddinForVerticalOrangeLine">
    //                     <VerticalOrangeLine />
    //                 </div>
    //             </div>
    //             <div>
    //                 <WorkWithUs2 />
    //             </div>
    //             <div>
    //             </div>
    //         </div>
    //     </div >
