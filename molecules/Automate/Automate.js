import React from "react";
import { Grid, Box, Flex, Heading, Description } from "atoms";
import Image from "next/image";
import Link from "next/link";

import { Controls, Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";

const BoxStyleFirst = styled(Box)`
  @media only screen and (max-width: 600px) {
    svg {
      width: 18rem !important;
      height: 18rem !important;
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
      width: 30rem !important;
      height: 30rem !important;
    }
  }
`;

const BoxStyleSecond = styled(Box)`
  @media only screen and (max-width: 600px) {
    svg {
      width: 18rem !important;
      height: 18rem !important;
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
      width: 30rem !important;
      height: 30rem !important;
    }
  }
`;

export const Automate = () => {
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
      mx={{ xl: "auto" }}
    >
      <Grid
        mt="4rem"
        alignItems="center"
        gridTemplateColumns={{ xm: "2fr 1fr" }}
        gridGap="3rem"
        justifyItems={{ xs: "center", xm: "end" }}
      >
        <Box>
          <Heading mb="2rem" Heading="What can be automated? A lot!" />
          <Description
            mb="1.5rem"
            Description="There are key areas of opportunity for automation inside finance and accounting. From customer onboarding and invoicing, to cash application, to logistics management to invoice processing, to payments processing."
          />
          <Description Description="Nearly any process can benefit from automation inside finance and accounting. In the next page, you will discover process heatmaps that highlight where automation has the biggest potential across the business unit." />
        </Box>

        <Box
          height={{ xs: "16.2rem", xm: "22.2rem" }}
          width={{ xs: "27rem", xm: "37.2rem" }}
        >
          <Image
            src="/images/finance-2.webp"
            alt="finance-2"
            quality={100}
            objectFit="contain"
            width={372}
            height={222}
          />
        </Box>
      </Grid>
    </Box>
  );
};
