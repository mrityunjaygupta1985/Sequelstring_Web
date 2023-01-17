import React from "react";
import { Grid, Box, Flex, Text, Heading, Description, SubHeading } from "atoms";
import Image from "next/image";

const dataImpact = [
  { title: "85%", stitle: "Reduction", text: "In Human-Agent Requirement" },
  { title: "90%", stitle: "Increase", text: "In Customer Engagement 24X7" },
  {
    title: "5x",
    stitle: "Advanced",
    text: "Automated Lead Verification & Qualification",
  },
  {
    title: "300%",
    stitle: "Advance",
    text: "In Unified Customer Digital Experience",
  },
];

export const BestInMarket = () => {
  return (
    <Box
      as="section"
      m={{
        xs: "4rem 2.4rem",
        md: "5rem 4rem",
        xm: "5rem 6rem",
        lg: "6rem 16rem",
      }}
      maxWidth={{ lg: "100%", xl: "144rem" }}
    >
      <Grid
        mt="4rem"
        gridTemplateColumns="1fr 1fr"
        gridColumnGap="3rem"
        justifyItems="end"
      >
        <Box>
          <Heading mb="1.5rem" Heading="Why we are the best in Market?" />
          <Description
            Description="SequelString is having clear vision and Roadmap to create Value under H1- Horizon One ( Exploit) and H2 – Horizon Two (Explore) framework.
Under H1 Roadmap venture is focusing on Organisation’s current problem and addressing it through its Integrated Automation Platform."
          />
        </Box>

        <Box width="50rem" height="32.5rem">
          <Image
            src="/images/about-page-1.jpg"
            alt="about-page-1"
            quality={100}
            objectFit="contain"
            width={500}
            height={325}
          />
        </Box>
      </Grid>
    </Box>
  );
};
