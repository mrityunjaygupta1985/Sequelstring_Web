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
      p={{
        xs: "4rem 2.4rem",
        md: "5rem 4rem",
        xm: "5rem 6rem",
        lg: "6rem 16rem",
      }}
      my="8rem"
      bg="primary.2200"
      maxWidth={{ lg: "100%", xl: "144rem" }}
    >
      <Heading textAlign="center" Heading="Lorem ipsum dolor sit amet" />
      <Description
        mt="1.5rem"
        textAlign="center"
        Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </Box>
  );
};
