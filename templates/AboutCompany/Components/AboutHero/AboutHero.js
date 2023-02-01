import React from "react";
import { Grid, Box, Text, Flex, Heading, SubHeading, Description } from "atoms";
import Image from "next/image";

export const AboutHero = () => {
  return (
    <>
      <Box
        as="section"
        bg="primary.2400"
        maxWidth={{ lg: "100%", xl: "144rem" }}
      >
        <Box
          p={{
            xs: "4rem 2.4rem",
            md: "5rem 4rem",
            xm: "6rem 6rem",
            lg: "8rem 12rem",
          }}
        >
          <Heading
            textAlign="center"
            fontSize={{ xs: "2.8rem", md: "3.8rem", lg: "4.8rem" }}
            mb="1.5rem"
            Heading="About Us"
          />
          <Description
            textAlign="center"
            Description="We are leading automation company helping various industries by building solutions on RPA and Block chain."
          />
          {/* </Box>
        <Box
          p={{
            xs: "3rem 2.4rem",
            md: "3rem 4rem",
            xm: "3rem 6rem",
            lg: "4rem 12rem",
          }}

           background="linear-gradient(185.29deg, #25215c57 5.49%, #25215c08 52.78%);"
        > */}
          <SubHeading mt="4rem" SubHeading="Sequelstring" />
          <Description
            mt="1.5rem"
            Description="In June 2018, Sequelstring was founded by Ravish Sahay, promoted and supported by alumnus of Harvard, IIT and IIM. Sequelstring is an automation start-up based in Mumbai, India."
          />
          <Description
            mt="1.5rem"
            Description="As on date have customers across the industry, using their solution. To name few like Mahindra Home Finance, Cosmo Films, Piramal, E&Y, Luminous, Indus Towers, Times Of India, Mahindra Integrated Business Solutions, Shahi Exports, Oberoi Group, Hero MotoCorp, DB Corp, Aknamed, Brookfield and many more."
          />
          <Description
            mt="1.5rem"
            Description="Sequelstring is currently building solutions on RPA and Block chain, which is based on Python and extensively using machine learning. We have also set up an R&D Lab in Don Bosco Institute of Technology-one of the Premium Technical Institute of Country."
          />
          {/* <Description
            mt="1.5rem"
            Description="SequelString is having clear vision and Roadmap to create Value under H1- Horizon One ( Exploit) and H2 – Horizon Two (Explore) framework."
          />
          <Description
            mt="1.5rem"
            Description="Under H1 Roadmap venture is focusing on Organisation’s current problem and addressing it through its Integrated Automation Platform."
          /> */}
        </Box>
      </Box>
    </>
  );
};
