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
    src: "/images/banner-4.png",
    alt: "banner-3",
  },
  {
    id: 1,
    src: "/images/banner-2.png",
    alt: "banner-1",
  },

  {
    id: 2,
    src: "/images/banner-5.png",
    alt: "banner-2",
  },
  {
    id: 3,
    src: "/images/banner-6.png",
    alt: "banner-4",
  },
  // {
  //   id: 4,
  //   src: "/images/banner-5.gif",
  //   alt: "banner-5",
  // },
];

import { Controls, Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";

import { ImpactBusiness } from "molecules/ImpactBusiness";
import { RpaServices } from "molecules/RpaServices";

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
      <Box mx="8rem">
        <Heading
          textAlign="center"
          color="primary.1800"
          mt="3rem"
          mb="1rem"
          Heading="AI (Artificial Intelligence) Vs IA (Intelligent Automation)"
        />
        <Text
          color="primary.1800"
          fontSize={{ xs: "2rem", md: "2.6rem" }}
          textAlign="center"
          mb="1rem"
        >
          An Integrated Automation Platform
        </Text>
        <Text
          color="primary.1800"
          fontSize={{ xs: "2rem", md: "2.6rem" }}
          textAlign="center"
          mb="2rem"
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
      >
        <Grid
          gridTemplateColumns={{ md: "1fr 1fr" }}
          gridGap="3.4rem"
          alignItems="center"
        >
          <Box>
            <Heading Heading="The leader in automation software" />
            {/* <Description
              mt="1.5rem"
              Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            /> */}
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
            <Box
              width={{ xs: "25rem", lg: "45rem" }}
              height={{ xs: "25rem", lg: "45rem" }}
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

            {/* <BoxStyleSecond
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
                objectfit="contain"
              >
                <Controls visible={false} />
              </Player>
            </BoxStyleSecond> */}
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
    </>
  );
};
