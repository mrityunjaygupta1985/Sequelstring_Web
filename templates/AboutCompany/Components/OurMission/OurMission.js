import React from "react";
import { Grid, Box, Description, SubHeading } from "atoms";
import Image from "next/image";

export const OurMission = () => {
  return (
    <>
      <Box
        m={{
          xs: "4rem 2.4rem",
          md: "5rem 4rem",
          xm: "5rem 6rem",
          lg: "10rem 16rem",
        }}
        maxWidth={{ lg: "100%", xl: "144rem" }}
      >
        <Grid
          gridTemplateColumns="2fr 1fr"
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
          <Box>
            <Box
              width={{ xs: "100%", lg: "100%" }}
              height={{ xs: "20rem", lg: "25rem" }}
              //   className="image-15"
            >
              <Image
                src="/images/mission-1.png"
                alt="mission"
                quality={100}
                layout="fill"
              />
            </Box>
          </Box>
        </Grid>

        <Grid
          gridTemplateColumns="1fr 2fr"
          gridGap={{ xs: "2rem", lg: "8rem" }}
          alignItems="center"
          mt="5rem"
        >
          <Box>
            <Box
              width={{ xs: "100%", lg: "100%" }}
              height={{ xs: "20rem", lg: "25rem" }}
            >
              <Image
                src="/images/vision-1.png"
                alt="vision"
                quality={100}
                // width={200}
                // height={200}
                layout="fill"
                // objectFit="contain"
              />
            </Box>
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
          gridTemplateColumns="2fr 1fr"
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

          <Box>
            <Box
              width={{ xs: "100%", lg: "100%" }}
              height={{ xs: "20rem", lg: "25rem" }}
            >
              <Image
                src="/images/value-1.png"
                alt="value"
                quality={100}
                // width={200}
                // height={200}
                layout="fill"
                // objectFit="contain"
              />
            </Box>
          </Box>
        </Grid>

        <Grid
          gridTemplateColumns="1fr 2fr"
          gridGap={{ xs: "2rem", lg: "8rem" }}
          alignItems="center"
          mt="5rem"
        >
          <Box>
            <Box
              width={{ xs: "100%", lg: "100%" }}
              height={{ xs: "20rem", lg: "25rem" }}
            >
              <Image
                src="/images/goal-1.jpg"
                alt="value"
                quality={100}
                // width={200}
                // height={200}
                layout="fill"
                // objectFit="contain"
              />
            </Box>
          </Box>

          <Box>
            <SubHeading SubHeading="GOAL" />
            <Description
              mt="1.5rem"
              Description="To ensure synergistic and coordinated business outcomes."
            />
          </Box>
        </Grid>

        <Grid
          gridTemplateColumns="2fr 1fr"
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
            >
              <Image
                src="/images/platform.gif"
                alt="value"
                quality={100}
                // width={200}
                // height={200}
                layout="fill"
                // objectFit="contain"
              />
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};