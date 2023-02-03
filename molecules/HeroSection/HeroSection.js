import React from "react";
import { Grid, Box, Flex, Heading, Description, Text, SubHeading } from "atoms";
import Image from "next/image";
import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamData = [
  {
    id: 0,
    src: "/images/banner-1.webp",
    alt: "banner-1",
  },
  {
    id: 1,
    src: "/images/banner-2.webp",
    alt: "banner-2",
  },
  {
    id: 2,
    src: "/images/banner-3.webp",
    alt: "banner-3",
  },
];

const robotRuninData = [
  { id: 1, description: "Reduced Cost" },
  { id: 2, description: "Compliance with Legal & Regulatory Requirements" },
  { id: 3, description: "Reduced Carbon Foot Print" },
  { id: 4, description: "Security & Scalability" },
  { id: 5, description: "Reducing the Chances of Fraud" },
  { id: 6, description: "Advanced Governance" },
  { id: 7, description: "Better Record Keeping" },
  { id: 8, description: "Productivity & Operational Efficiency" },
  { id: 9, description: "Reduced Workload" },
  { id: 10, description: "Increased Quality & Data Analysis" },
  { id: 11, description: "Speed & Accuracy" },
];

import { Controls, Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";

import { ImpactBusiness } from "molecules/ImpactBusiness";
import { RpaServices } from "molecules/RpaServices";

const BoxStyleFirst = styled(Box)`
  @media only screen and (max-width: 600px) {
    svg {
      width: 28rem !important;
      height: 28rem !important;
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
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <>
      {/* banner section */}
      <Box mx={{ xs: "0rem", lg: "8rem" }}>
        <Heading
          textAlign="center"
          color="primary.1800"
          mt="3rem"
          mb="1rem"
          mx={{ xs: "2.4rem", lg: "unset" }}
          Heading="AI (Artificial Intelligence) Vs IA (Intelligent Automation)"
        />
        <Text
          color="primary.1800"
          fontSize={{ xs: "2rem", md: "2.6rem" }}
          textAlign="center"
          mb="1rem"
          mx={{ xs: "2.4rem", lg: "unset" }}
        >
          An Integrated Automation Platform
        </Text>
        <Text
          color="primary.1800"
          fontSize={{ xs: "2rem", md: "2.6rem" }}
          textAlign="center"
          mb="2rem"
          mx={{ xs: "2.4rem", lg: "unset" }}
        >
          is driving{" "}
          <Text
            as="span"
            fontSize={{ xs: "2rem", md: "2.6rem" }}
            fontWeight="700"
          >
            Intelligent Automation
          </Text>{" "}
          while leveraging{" "}
          <Text
            as="span"
            fontSize={{ xs: "2rem", md: "2.6rem" }}
            fontWeight="700"
          >
            Artificial Intelligence.
          </Text>
        </Text>

        {/* is driving Intelligent Automation while leveraging Artificial Intelligence. */}
        <Slider {...settings}>
          {teamData.map((items, index) => {
            return (
              <Box
                key={index}
                width="100%"
                height={{
                  xs: "20rem",
                  md: "30rem",
                  mx: "40rem",
                  lg: "45rem",
                }}
                //   className="image-15"
              >
                <Image
                  src={items?.src}
                  alt={items?.alt}
                  quality={100}
                  layout="fill"
                />
              </Box>
            );
          })}
        </Slider>
        {/* <Box position="absolute" top="37rem" left="10rem">
          <Flex>
            <Link href="/demo">
              <a>
                <Button variant="blue" width={{ xs: "100%", md: "20rem" }}>
                  <Text
                    fontSize={{ xs: "1.8rem", md: "2rem" }}
                    fontWeight="500"
                    py=".5rem"
                  >
                    Request a Demo
                  </Text>
                </Button>
              </a>
            </Link>
            <Link href="/demo">
              <a>
                <Button
                  variant="blue"
                  width={{ xs: "100%", md: "17rem" }}
                  ml="2rem"
                >
                  <Text
                    fontSize={{ xs: "1.8rem", md: "2rem" }}
                    fontWeight="500"
                    py=".5rem"
                  >
                    Try for Free
                  </Text>
                </Button>
              </a>
            </Link>
          </Flex>
        </Box> */}
      </Box>

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
        <Heading
          mb="3rem"
          mt={{ xs: "6rem", lg: "10rem" }}
          textAlign="center"
          Heading="Component of Hyper Automation"
        />
        <Grid
          gridTemplateColumns={{ md: "1fr 1fr" }}
          gridGap={{ xs: "2rem", md: "6rem" }}
          alignItems="center"
        >
          <Flex
            alignItems={{ xs: "center", xm: "left" }}
            flexDirection={{ xs: "column", xm: "unset" }}
          >
            <Box
              width={{ xs: "32rem", lg: "75rem" }}
              height={{ xs: "21.8rem", lg: "51rem" }}
            >
              <Image
                src="/images/banner-6.webp"
                alt="banner-6"
                quality={100}
                width={750}
                height={510}
                // layout="fill"
                objectFit="contain"
              />
            </Box>
          </Flex>

          <Flex justifyContent="end">
            <BoxStyleFirst
              mx={{ xs: "auto", md: "unset" }}
              width={{
                xs: "28rem",
                md: "22rem",
                xm: "30rem",
                lg: "51rem",
              }}
              height={{
                xs: "28rem",
                md: "22rem",
                xm: "30rem",
                lg: "43rem",
              }}
            >
              <Player
                autoplay
                loop
                src="/images/robot-1.json"
                objectfit="contain"
              >
                <Controls visible={false} />
              </Player>
            </BoxStyleFirst>
          </Flex>
        </Grid>
      </Box>

      <ImpactBusiness />
      <RpaServices />

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
          gridTemplateColumns={{ md: "1fr 2fr" }}
          gridGap={{ xs: "3rem", md: "12rem" }}
          alignItems="center"
          mt={{ xs: "3rem", xm: "3.4rem" }}
        >
          <Flex
            alignItems={{ xs: "center", xm: "left" }}
            flexDirection={{ xs: "column", xm: "unset" }}
          >
            <Box
              width={{ xs: "28rem", lg: "45rem" }}
              height={{ xs: "28rem", lg: "45rem" }}
              className="image-50"
            >
              <Image
                src="/images/robot-2.gif"
                alt="robot-2"
                quality={100}
                width={450}
                height={450}
                // layout="fill"
                objectFit="contain"
              />
            </Box>
          </Flex>

          <Box>
            {/* order={{ xs: 1, lg: 0 }} */}
            {robotRuninData.map((items, index) => {
              return (
                <Description
                  key={index}
                  mb="1rem"
                  fontWeight="500"
                  Description={items?.description}
                />
              );
            })}
          </Box>
        </Grid>

        <Grid
          mt={{ xs: "4rem", md: "8rem" }}
          gridTemplateColumns={{ md: "2fr 1fr" }}
          gridGap={{ xs: "3rem", md: "4rem", lg: "8rem" }}
          justifyItems="center"
        >
          <Box>
            <Heading mb="1.5rem" Heading="Will our Data be Safe?" />
            <Description Description="Yes, your data is 100% safe & secure and only your chosen people from your own organization have access to your data. Apart from this, your data is in an encrypted format when it is stored in databases as well as during transit between the server and your machine. Multiple security audits and reviews have been done to make sure of this." />
          </Box>
          <Box>
            <Box
              width={{ xs: "28rem", lg: "40rem" }}
              height={{ xs: "20.4rem", lg: "29.1rem" }}
            >
              <Image
                src="/images/home-3.webp"
                alt="home-3"
                quality={100}
                width={400}
                height={291}
                objectFit="contain"
              />
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
