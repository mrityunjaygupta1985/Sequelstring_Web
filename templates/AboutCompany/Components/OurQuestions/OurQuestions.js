import React from "react";
import { Grid, Box, Text, Flex, Description, SubHeading, Button } from "atoms";
import Link from "next/link";

import { Controls, Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";

const BoxStyleFirst = styled(Box)`
  @media only screen and (max-width: 600px) {
    svg {
      width: 16rem !important;
      height: 16rem !important;
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 800px) {
    svg {
      width: 15rem !important;
      height: 15rem !important;
    }
  }
  @media only screen and (min-device-width: 800px) and (max-device-width: 1024px) {
    svg {
      width: 15rem !important;
      height: 15rem !important;
    }
  }
`;

const quesData = [
  {
    id: 0,
    buttonText: "FAQ",
    src: "/images/faq.json",
    href: "/faq",
  },
  {
    id: 1,
    buttonText: "Get in touch",
    src: "/images/emailbox.json",
    href: "/contact",
  },
  {
    id: 2,
    buttonText: "Request a demo",
    src: "/images/schedule-demo.json",
    href: "/demo",
  },
];

export const OurQuestions = () => {
  return (
    <>
      <Box
        m={{
          xs: "4rem 2.4rem",
          md: "5rem 4rem",
          xm: "5rem 6rem",
          lg: "10rem 12rem",
        }}
        maxWidth={{ lg: "100%", xl: "144rem" }}
        mx={{ xl: "auto" }}
      >
        <Grid
          gridTemplateColumns={{ md: "1fr 2fr" }}
          bg="primary.1800"
          borderRadius="1.5rem"
          gridGap="4rem"
          p="2rem 3rem"
          alignItems="center"
        >
          <Box>
            <SubHeading color="white" SubHeading="Got Questions?" />
            <Box
              borderBottom=".4rem solid"
              borderColor="white"
              mt="2.5rem"
              maxWidth="30%"
            />
            <Description
              color="white"
              mt="2rem"
              Description="We would love to answer your questions so that you can make an informed choice. We are extremely easy to reach out and are a joy to talk to. Hit us up!"
            />
          </Box>

          <Grid gridTemplateColumns={{ md: "1fr 1fr 1fr" }} gridGap="2.5rem">
            {quesData.map((items, index) => {
              return (
                <Box key={index} bg="white" p="2rem" borderRadius=".8rem">
                  <BoxStyleFirst
                    mx="auto"
                    width="15rem"
                    height="15rem"
                    mt={items?.mt}
                  >
                    <Player autoplay loop src={items?.src} objectfit="contain">
                      <Controls visible={false} />
                    </Player>
                  </BoxStyleFirst>

                  <Link href={items?.href}>
                    <a>
                      <Button
                        mt={{ xs: "3rem", md: "1rem" }}
                        variant="blue"
                        width={{ xs: "100%", lg: "100%" }}
                      >
                        <Flex alignItems="center" justifyContent="center">
                          <Text
                            fontSize={{ xs: "1.8rem", md: "2rem" }}
                            fontWeight="500"
                          >
                            {items?.buttonText}
                          </Text>
                        </Flex>
                      </Button>
                    </a>
                  </Link>
                </Box>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
