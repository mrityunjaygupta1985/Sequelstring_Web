import React from "react";
import { Grid, Box, Text, Flex, Heading } from "atoms";
import Image from "next/image";

import { Controls, Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";
import { useState } from "react";
import Accordion from "public/assets/icons/Accordion";

const BoxStyleFirst = styled(Box)`
  @media only screen and (max-width: 600px) {
    svg {
      width: 25rem !important;
      height: 25rem !important;
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 800px) {
    svg {
      width: 25rem !important;
      height: 25rem !important;
    }
  }
  @media only screen and (min-device-width: 800px) and (max-device-width: 1024px) {
    svg {
      width: 20rem !important;
      height: 20rem !important;
    }
  }
`;

const data = [
  {
    id: 1,
    title: "What is RPA?",
    desctiption:
      "Robotic process automation (RPA) is a productivity tool that allows a user to configure one or more scripts (which some vendors refer to as “bots”) to activate specific keystrokes in an automated fashion. The result is that the bots can be used to mimic or emulate selected tasks (transaction steps) within an overall business or IT process. These may include manipulating data, passing data to and from different applications, triggering responses, or executing transactions. RPA uses a combination of user interface  interaction and descriptor technologies. The scripts can overlay on one or more software applications.",
  },
  {
    id: 2,
    title: "Can RPA work in any software application?",
    desctiption:
      "Yes, RPA is fully agnostic and can be used to automate and integrate data in any application (on-prem or cloud-based) and in any interface or server including Citrix.",
  },
  {
    id: 3,
    title: "Will our data be safe?",
    desctiption:
      "Yes, your data is 100% safe & secure and only your chosen people from your own organization have access to your data. Apart from this, your data is in an encrypted format when it is stored in databases as well as during transit between the server and your machine. Multiple security audits and reviews have been done to make sure of this.",
  },
  {
    id: 4,
    title: "Will there be any modifications required in my current systems?",
    desctiption:
      "No,RPA has unique architecture that enables to seamlessly introduce automation in your current systems without making any changes in your existing systems.",
  },
  {
    id: 5,
    title: "What are the benefits of RPA?",
    desctiption:
      "The biggest benefits of RPA are increased efficiency and cost-savings. RPA frees up human workers to focus on higher-level jobs that demand human intelligence. It also reduces costly human errors. And artificial intelligence is often able to perform routine tasks more quickly than people can.",
  },
];

export const FaqPage = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <Box
        as="section"
        m={{
          xs: "4rem 2.4rem",
          md: "5rem 4rem",
          xm: "6rem 6rem",
          lg: "8rem 12rem",
        }}
        maxWidth={{ lg: "100%", xl: "144rem" }}
        mx={{ xl: "auto" }}
      >
        <Heading
          textAlign="center"
          mb={{ xs: "3rem", md: "5rem" }}
          Heading="Frequently Asked Questions"
        />
        <Grid
          gridTemplateColumns={{ md: "1fr 2.5fr" }}
          gridGap={{ xs: "2rem", md: "4rem", lg: "8rem" }}
        >
          <Box>
            <BoxStyleFirst
              mx="auto"
              width={{ xs: "25rem", md: "20rem", xm: "25rem", lg: "30rem" }}
              height={{ xs: "25rem", md: "20rem", xm: "25rem", lg: "30rem" }}
            >
              <Player autoplay loop src="/images/faq.json" objectfit="contain">
                <Controls visible={false} />
              </Player>
            </BoxStyleFirst>
          </Box>

          <Box>
            {data.map((items) => {
              return (
                <>
                  <Flex
                    key={items.id}
                    bg="primary.2200"
                    p="1.5rem 2rem"
                    gridGap="4rem"
                    borderBottom=".4rem solid"
                    borderColor="white"
                    alignItems="center"
                    cursor="pointer"
                    justifyContent="space-between"
                    onClick={() => {
                      if (active === items?.id) setActive("");
                      else setActive(items?.id);
                    }}
                  >
                    <Box
                      fontWeight="500"
                      fontSize={{ xs: "2rem", lg: "2.2rem" }}
                    >
                      {items?.title}
                    </Box>
                    <Box
                      color="primary.700"
                      fontWeight="700"
                      transform={
                        active === items?.id ? "rotate(180deg)" : "rotate(0deg)"
                      }
                      transition="all .3s"
                    >
                      <Accordion />
                    </Box>
                  </Flex>

                  {active === items?.id && (
                    <Box p="1.1rem 2rem 1.5rem 2rem" className="fade-in-text">
                      <Text
                        fontSize={{ xs: "1.8rem", lg: "2rem" }}
                        lineHeight={{ xs: "2.4rem", lg: "2.8rem" }}
                      >
                        {items?.desctiption}{" "}
                        <Text
                          as="span"
                          fontSize={{ xs: "1.8rem", lg: "2rem" }}
                          lineHeight={{ xs: "2.4rem", lg: "2.8rem" }}
                          fontWeight="700"
                        >
                          {items?.desctiptionBold}
                        </Text>
                      </Text>
                    </Box>
                  )}
                </>
              );
            })}
          </Box>
        </Grid>
      </Box>
    </>
  );
};
