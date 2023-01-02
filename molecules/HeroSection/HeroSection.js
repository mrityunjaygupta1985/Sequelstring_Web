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

export const HeroSection = () => {
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
        gridTemplateColumns={{ md: "1fr 1fr" }}
        gridGap="3.4rem"
        alignItems="center"
      >
        <Box>
          <Heading Heading="Lorem ipsum dolor sit amet, consectetur" />
          <Description
            mt="1.5rem"
            Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Box>

        <Flex justifyContent="end">
          <BoxStyleFirst
            mx={{ xs: "auto", md: "unset" }}
            width={{
              xs: "18rem",
              md: "22rem",
              xm: "30rem",
              lg: "51rem",
            }}
            height={{
              xs: "18rem",
              md: "22rem",
              xm: "30rem",
              lg: "43rem",
            }}
          >
            <Player
              autoplay
              loop
              src="/images/robot-1.json"
              // style={{ width: 510, height: 510 }}
              objectfit="contain"
            >
              <Controls visible={false} />
            </Player>
          </BoxStyleFirst>
        </Flex>

        <Box order={{ xs: 1, md: 0 }}>
          <BoxStyleSecond
            mx={{ xs: "auto", lg: "unset" }}
            width={{
              xs: "18rem",
              md: "22rem",
              xm: "30rem",
              lg: "41rem",
            }}
            height={{
              xs: "18rem",
              md: "22rem",
              xm: "30rem",
              lg: "41rem",
            }}
          >
            <Player
              autoplay
              loop
              src="/images/robot-2.json"
              // style={{ width: 510, height: 510 }}
              objectfit="contain"
            >
              <Controls visible={false} />
            </Player>
          </BoxStyleSecond>
        </Box>

        <Box>
          {/* order={{ xs: 1, lg: 0 }} */}
          <Heading Heading="Lorem ipsum dolor sit amet, consectetur" />
          <Description
            mt="1.5rem"
            Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Box>
      </Grid>
    </Box>
  );
};
