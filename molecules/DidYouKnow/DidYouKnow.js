import React from "react";
import { Grid, Box, Flex, Heading, Description, SubHeading } from "atoms";
import Image from "next/image";

export const DidYouKnow = () => {
  return (
    <Box
      as="section"
      p={{
        xs: "4rem 2.4rem",
        md: "5rem 4rem",
        xm: "5rem 6rem",
        lg: "6rem 12rem",
      }}
      mt="8rem"
      bg="primary.2400"
      maxWidth={{ lg: "100%", xl: "144rem" }}
    >
      <Heading textAlign="center" Heading="Did You Know?" />

      <Grid
        mt="4rem"
        gridTemplateColumns="1fr 1fr"
        gridColumnGap="6rem"
        alignItems="center"
      >
        <Box>
          <Description Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

          {/* <SubHeading SubHeading="Hadoop" />
          <Description
            mt="1.5rem"
            Description="Estimate that the potential savings that companies will experience with RPA by 2025 is between $5 trillion to $7 trillion."
          />
          <Description
            mt="1.5rem"
            Description="It also predicts that RPA softwares will be able to perform tasks equal to the output of 140 million FTEs by the same year."
          />

          <SubHeading mt="2.5rem" SubHeading="Gartner" />
          <Description
            mt="1.5rem"
            Description="RPA Market Forecast to Grow at Double-Digit Rates Through 2024 Despite Economic Pressures from COVID-19."
          />
          <Description
            mt="1.5rem"
            Description="Through 2024, large organizations will triple the capacity of their existing RPA portfolios."
          />

          <SubHeading mt="2.5rem" SubHeading="McKinsey" />
          <Description
            mt="1.5rem"
            Description="RPA is a promising new development in business automation that offers a potential ROI of 30–200 percent—in the first year. Employees may like it too."
          />

          <SubHeading mt="2.5rem" SubHeading="Everest Group" />
          <Description
            mt="1.5rem"
            Description="Robotic Process Automation Market is Expected to Grow 45-50% Over Next 2 Years."
          />

          <SubHeading mt="2.5rem" SubHeading="Deloitte" />
          <Description
            mt="1.5rem"
            Description="Cost savings: 43 percent of organizations surveyed look toward innovation to reduce cost of delivery. While an outsourcing provider may deploy onshore and offshore resources at different price points post-build, a robot can cost 10 to 20 percent the cost of an onshore full-time employee in high-cost locations like the United States."
          />
          <Description
            mt="1.5rem"
            Description="Accuracy: 57 percent of organizations surveyed look to increase process quality through innovation. Robot-based end-to-end processes reduce the need for human involvement to exception processing, which increases consistency."
          /> */}
        </Box>
        <Flex justifyContent="end">
          <Box width="50rem" height="42.6rem" className="image-30">
            <Image
              src="/images/home-2.webp"
              alt="home-1"
              quality={100}
              width={500}
              height={426}
              objectFit="contain"
            />
          </Box>
        </Flex>
      </Grid>

      <Heading mt="6rem" textAlign="center" Heading="Interesting Facts" />
      <Grid
        mt="4rem"
        gridTemplateColumns="1fr 1fr"
        gridColumnGap="6rem"
        alignItems="center"
      >
        <Flex justifyContent="start">
          <Box width="55rem" height="31.1rem" className="image-30">
            <Image
              src="/images/home-1.webp"
              alt="home-1"
              quality={100}
              width={550}
              height={311}
              objectFit="contain"
            />
          </Box>
        </Flex>

        <Box>
          <Description Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </Box>
      </Grid>
    </Box>
  );
};
