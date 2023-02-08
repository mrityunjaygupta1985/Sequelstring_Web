import React from "react";
import { Grid, Box, Description, SubHeading } from "atoms";
import Image from "next/image";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";

const BoxStyleSecond = styled(Box)`
  @media only screen and (max-width: 600px) {
    svg {
      width: 26rem !important;
      height: 26rem !important;
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
export const OurMission = () => {
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
          gridTemplateColumns={{ md: "2fr 1fr" }}
          gridGap={{ xs: "2rem", lg: "8rem" }}
          alignItems="center"
        >
          <Box>
            <SubHeading SubHeading="MISSION" />
            <Description
              mt="1.5rem"
              Description="Partner with our customers to achieve excellence by delivering automation through our Scalable Platform, ensuring Compliance, Speed and Accuracy."
            />
          </Box>
          <Box bg="primary.2400">
            <BoxStyleSecond
              mx="auto"
              width={{
                xs: "26rem",
                md: "22rem",
                xm: "30rem",
                lg: "40rem",
              }}
              height={{
                xs: "26rem",
                md: "22rem",
                xm: "30rem",
                lg: "40rem",
              }}
            >
              <Player
                autoplay
                loop
                src="/images/mission-1.json"
                objectfit="contain"
              >
                <Controls visible={false} />
              </Player>
            </BoxStyleSecond>
            {/* <Box
              width={{ xs: "100%", lg: "100%" }}
              height={{ xs: "20rem", lg: "25rem" }}              
              className="image-30"
            >
              <Image
                src="/images/mission-1.webp"
                alt="mission"
                quality={100}
                layout="fill"
              />
            </Box> */}
          </Box>
        </Grid>

        <Grid
          gridTemplateColumns={{ md: "1fr 2fr" }}
          gridGap={{ xs: "2rem", lg: "8rem" }}
          alignItems="center"
          mt="5rem"
        >
          <Box bg="primary.2400" borderRadius="3rem" order={{ xs: 1, md: 0 }}>
            <BoxStyleSecond
              mx="auto"
              width={{
                xs: "26rem",
                md: "22rem",
                xm: "30rem",
                lg: "40rem",
              }}
              height={{
                xs: "26rem",
                md: "22rem",
                xm: "30rem",
                lg: "40rem",
              }}
            >
              <Player
                autoplay
                loop
                src="/images/vision-2.json"
                objectfit="contain"
              >
                <Controls visible={false} />
              </Player>
            </BoxStyleSecond>

            {/* <Box
              width={{ xs: "100%", lg: "100%" }}
              height={{ xs: "20rem", lg: "25rem" }}
              className="image-30"
            >
              <Image
                src="/images/vision-1.webp"
                alt="vision"
                quality={100}
                width={200}
                height={200}
                layout="fill"
                objectFit="contain"
              />
            </Box> */}
          </Box>
          <Box>
            <SubHeading SubHeading="VISION" />
            <Description
              mt="1.5rem"
              Description="Be the first Choice of providing Value to Customer's Customer TO AUTOMATE ANY PROCESS IN ANY COMPANY (SIZE, INDUSTRY) & in ANY part of GEOGRAPHY"
            />
          </Box>
        </Grid>

        <Grid
          gridTemplateColumns={{ md: "2fr 1fr" }}
          gridGap={{ xs: "2rem", lg: "8rem" }}
          alignItems="center"
          mt="5rem"
        >
          <Box>
            <SubHeading SubHeading="VALUE" />
            <Description
              mt="1.5rem"
              Description="To build a culture of continuous improvement through innovation with a reputation for Integrity, Excellence, and focus on Customer & Employee first."
            />
          </Box>

          <Box bg="primary.2400" borderRadius="3rem">
            <BoxStyleSecond
              mx="auto"
              width={{
                xs: "26rem",
                md: "22rem",
                xm: "30rem",
                lg: "40rem",
              }}
              height={{
                xs: "26rem",
                md: "22rem",
                xm: "30rem",
                lg: "40rem",
              }}
            >
              <Player
                autoplay
                loop
                src="/images/value-1.json"
                objectfit="contain"
              >
                <Controls visible={false} />
              </Player>
            </BoxStyleSecond>
            {/* <Box
              width={{ xs: "100%", lg: "100%" }}
              height={{ xs: "20rem", lg: "25rem" }}
              className="image-30"
            >
              <Image
                src="/images/value-1.webp"
                alt="value"
                quality={100} 
                layout="fill" 
              />
            </Box> */}
          </Box>
        </Grid>

        <Grid
          gridTemplateColumns={{ md: "1fr 2fr" }}
          gridGap={{ xs: "2rem", lg: "8rem" }}
          alignItems="center"
          mt="5rem"
        >
          <Box bg="primary.2400" borderRadius="3rem" order={{ xs: 1, md: 0 }}>
            <BoxStyleSecond
              mx="auto"
              width={{
                xs: "26rem",
                md: "22rem",
                xm: "30rem",
                lg: "40rem",
              }}
              height={{
                xs: "26rem",
                md: "22rem",
                xm: "30rem",
                lg: "40rem",
              }}
            >
              <Player
                autoplay
                loop
                src="/images/goal-1.json"
                // style={{ width: 510, height: 510 }}
                objectfit="contain"
              >
                <Controls visible={false} />
              </Player>
            </BoxStyleSecond>
          </Box>

          {/* <Box>
            <Box width="50rem" height="46.1rem">
              <Image
                src="/images/goal-1.png"
                alt="goal-1"
                quality={100}
                width={500}
                height={461}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Box> */}

          <Box>
            <SubHeading SubHeading="GOAL" />
            <Description
              mt="1.5rem"
              Description="To ensure synergistic and coordinated business outcomes."
            />
          </Box>
        </Grid>

        <Grid
          gridTemplateColumns={{ md: "2fr 1fr" }}
          gridGap={{ xs: "2rem", lg: "8rem" }}
          alignItems="center"
          mt="5rem"
        >
          <Box>
            <SubHeading SubHeading="PLATFORM" />
            <Description
              mt="1.5rem"
              Description="AI Driven SAS based zero code data extraction, which a Business User can configure without any IT knowledge. Inbuild Integrated Automation frame work."
            />
          </Box>

          <Box>
            <Box
              width={{ xs: "100%", lg: "100%" }}
              height={{ xs: "20rem", lg: "35rem" }}
              bg="primary.2400"
              borderRadius="3rem"
            >
              <Image
                src="/images/platform.gif"
                alt="value"
                quality={100}
                // width={200}
                // height={200}
                layout="fill"
                priority
                // objectFit="contain"
              />
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
