import React from "react";
import { Grid, Box, Text, Flex, Description, SubHeading } from "atoms";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamData = [
  {
    id: 0,
    src: "/images/gallery/team-01.jpg",
    alt: "team-01",
  },
  {
    id: 1,
    src: "/images/gallery/team-02.jpg",
    alt: "team-02",
  },
  {
    id: 2,
    src: "/images/gallery/team-03.jpg",
    alt: "team-03",
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
    autoplaySpeed: 5000,
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
      <SubHeading
        textAlign="center"
        mb="4rem"
        SubHeading="Our Working Environment"
      />
      <Slider {...settings}>
        {teamData.map((items, index) => {
          return (
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
          );
        })}
      </Slider>
    </Box>
  );
};
