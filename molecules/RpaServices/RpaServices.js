import React from "react";
import { Grid, Box, Flex, Text, Heading, Description, SubHeading } from "atoms";
import Image from "next/image";

import { Controls, Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";

const BoxStyleSecond = styled(Box)`
  @media only screen and (max-width: 600px) {
    svg {
      width: 25rem !important;
      height: 25rem !important;
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 800px) {
    svg {
      width: 22rem !important;
      height: 22rem !important;
    }
  }
  @media only screen and (min-device-width: 800px) and (max-device-width: 1024px) {
    svg {
      width: 20rem !important;
      height: 20rem !important;
    }
  }
`;

const dataImpact = [
  {
    src: "/images/RPA-Services.json",
    SubHeading: "Intelligent Automation",
    Description: "In Intelligent Automation",
  },
  {
    src: "/images/SAP-Automation.json",
    SubHeading: "SAP Automation",
    Description: "Complete SAP Automation",
    // mt: "3rem",
  },
  {
    src: "/images/Web-Automation.json",
    SubHeading: "Web Automation",
    Description: "Fully robotic Web Automation",
  },
];

export const RpaServices = () => {
  return (
    <Box
      as="section"
      m={{
        xs: "4rem 2.4rem",
        md: "5rem 4rem",
        xm: "5rem 6rem",
        lg: "6rem 12rem",
      }}
      maxWidth={{ lg: "100%", xl: "144rem" }}
    >
      <Grid
        mt={{ xs: "2rem", md: "5rem", lg: "8rem" }}
        gridTemplateColumns={{ md: "repeat(3, 1fr)" }}
        gridGap="3rem"
      >
        {dataImpact.map((items, index) => {
          return (
            <Box
              key={index}
              bg="white"
              boxShadow="m"
              p="2rem 3rem 4rem 3rem"
              borderRadius="1.5rem"
            >
              <Flex justifyContent="center" mt={items?.mt}>
                <BoxStyleSecond
                  mx="unset"
                  width={{
                    xs: "25rem",
                    md: "22rem",
                    xm: "20rem",
                    lg: "25rem",
                  }}
                  height={{
                    xs: "25rem",
                    md: "22rem",
                    xm: "20rem",
                    lg: "25rem",
                  }}
                >
                  <Player autoplay loop src={items?.src} objectfit="contain">
                    <Controls visible={false} />
                  </Player>
                </BoxStyleSecond>
              </Flex>

              <SubHeading
                textAlign="center"
                color="primary.1800"
                SubHeading={items?.SubHeading}
                mb="1rem"
                mt="1rem"
              />
              <Description
                textAlign="center"
                Description={items?.Description}
              />
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};
