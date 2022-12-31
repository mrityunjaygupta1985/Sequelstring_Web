import React from "react";
import { 
  HeroSection, 
  ProgramBrochureSection,
  PricingSection,
  AskYourself,
} from "molecules";
import SEO from "seo/SEO"; 

export const Home = () => {
  return (
    <>
      <SEO
        title="Kashish Yoga"
        //  currentURL="https://www.yatharthsah.co.in"
        //  description="A portfolio website developed by Yatharth Sah, who is a Frontend Enthusiast and skilled in Next Js, React Js and Headless CMS"
        //  keywords="Kashish Yoga"
      />
      <HeroSection />   
          

       
    </>
  );
};

export default Home;
