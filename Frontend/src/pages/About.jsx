import React, { useEffect } from "react";
import OurTeam from "../sections/OurTeam";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <div>
     <OurTeam />
  </div>

  );
};

export default About;