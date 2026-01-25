// import React, { useEffect } from 'react'
// import Hero from '../sections/Hero'
// import OurServices from '../sections/OurServices'
// import Testimonials from '../sections/Testimonials'
// import Blogs from '../sections/Blogs'
// import OurClients from '../sections/OurClients'
// import OurTeam from '../sections/OurTeam'
// import Careers from '../sections/Careers'
// import CTA from '../sections/CTA'

// const LandingPage = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className='font-inter'>
//       <Hero/>
//       <OurClients/>
//       <OurServices/>

//       <OurTeam/>
//       <Testimonials/>
//       <Blogs/>
//       <Careers/>
//       <CTA/>
//     </div>
//   )
// }

// export default LandingPage

import React, { useEffect } from "react";
import Hero from "../sections/Hero";
import OurServices from "../sections/OurServices";
import Testimonials from "../sections/Testimonials";
import Blogs from "../sections/Blogs";
import OurClients from "../sections/OurClients";
import OurTeam from "../sections/OurTeam";
import Careers from "../sections/Careers";
import CTA from "../sections/CTA";
import WhoWeAre from "../sections/WhoWeAre";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-inter">
      <div id="hero">
        <Hero />
      </div>{" "}
      {/* <OurClients /> */}
      <div id="who-we-are" className="">
        <WhoWeAre />
      </div>


      {/* 🔥 OFFERINGS TARGET */}
      <div id="offerings">
        <OurServices />
      </div>

      {/* <OurTeam /> */}
      {/* <Testimonials /> */}
      {/* <Blogs /> */}
      {/* <Careers /> */}
      <CTA />
    </div>
  );
};

export default LandingPage;
