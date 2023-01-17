import React from "react";
import { Grid, Box, Text, Flex, Description, SubHeading, Heading } from "atoms";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamData = [
  {
    id: 0,
    src: "/images/gallery/team-01.png",
    alt: "team-01",
    SubHeading: "Fun with Work",
  },
  {
    id: 1,
    src: "/images/gallery/team-02.png",
    alt: "team-02",
    SubHeading: "Fun with Work",
  },
  {
    id: 2,
    src: "/images/gallery/team-03.png",
    alt: "team-03",
    SubHeading: "Fun with Work",
  },
  {
    id: 3,
    src: "/images/gallery/team-04.png",
    alt: "team-04",
    SubHeading: "Diwali Puja",
  },
  {
    id: 4,
    src: "/images/gallery/team-05.png",
    alt: "team-05",
    SubHeading: "Diwali Puja",
  },
  {
    id: 5,
    src: "/images/gallery/team-06.png",
    alt: "team-06",
    SubHeading: "Diwali Puja",
  },
  {
    id: 6,
    src: "/images/gallery/team-07.png",
    alt: "team-07",
    SubHeading: "Diwali Puja",
  },
  {
    id: 7,
    src: "/images/gallery/team-08.png",
    alt: "team-08",
    SubHeading: "Christmas Celebration",
  },
  {
    id: 8,
    src: "/images/gallery/team-09.png",
    alt: "team-09",
    SubHeading: "Dinner with Team",
  },
  {
    id: 9,
    src: "/images/gallery/team-10.png",
    alt: "team-10",
    SubHeading: "Dinner with Team",
  },
  {
    id: 10,
    src: "/images/gallery/team-11.png",
    alt: "team-11",
    SubHeading: "Birthday Celebration",
  },
  {
    id: 11,
    src: "/images/gallery/team-12.png",
    alt: "team-12",
    SubHeading: "Birthday Celebration",
  },
  {
    id: 12,
    src: "/images/gallery/team-13.png",
    alt: "team-13",
    SubHeading: "Birthday Celebration",
  },
  {
    id: 13,
    src: "/images/gallery/team-14.png",
    alt: "team-14",
    SubHeading: "Birthday Celebration",
  },
  {
    id: 14,
    src: "/images/gallery/team-15.png",
    alt: "team-15",
    SubHeading: "Fun with Team",
  },
  {
    id: 15,
    src: "/images/gallery/team-16.png",
    alt: "team-16",
    SubHeading: "Fun with Team",
  },
  {
    id: 16,
    src: "/images/gallery/team-17.png",
    alt: "team-17",
    SubHeading: "Fun with Team",
  },
];

export const OurWorkingEnvironment = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box
      m={{
        xs: "4rem 2.4rem",
        md: "5rem 4rem",
        xm: "5rem 10rem",
        lg: "10rem 28rem",
      }}
      maxWidth={{ lg: "100%", xl: "144rem" }}
    >
      <Heading textAlign="center" mb="2rem" Heading="Our Working Environment" />

      <Slider {...settings}>
        {teamData.map((items, index) => {
          return (
            <>
              <SubHeading
                textAlign="center"
                color="primary.1800"
                mb="1rem"
                SubHeading={items?.SubHeading}
              />
              <Box
                key={index}
                width="100%"
                height={{ xs: "20rem", md: "30rem", mx: "40rem", lg: "50rem" }}
                //   className="image-15"
              >
                <Image
                  src={items?.src}
                  alt={items?.alt}
                  quality={100}
                  layout="fill"
                />
              </Box>
            </>
          );
        })}
      </Slider>
    </Box>
  );
};
