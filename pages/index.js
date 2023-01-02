import React from "react";
import { 
  HeroSection,
  OurClients,
} from "molecules";
import SEO from "seo/SEO"; 

export const Home = () => {
  return (
    <>
      <SEO
        title="Sequelstring"
        //  currentURL="https://www.yatharthsah.co.in"
        //  description="A portfolio website developed by Yatharth Sah, who is a Frontend Enthusiast and skilled in Next Js, React Js and Headless CMS"
        //  keywords="Sequelstring"
      />
      <HeroSection />
      <OurClients />
    </>
  );
};

export default Home;
