import React from "react";
import { Grid, Box, Heading } from "atoms";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { right } from "styled-system";

const marqueeImage = [
  { src: "/images/clients/Client-01.webp", alt: "Client-01" },
  { src: "/images/clients/Client-02.webp", alt: "Client-02" },
  { src: "/images/clients/Client-03.webp", alt: "Client-03" },
  { src: "/images/clients/Client-04.webp", alt: "Client-04" },
  { src: "/images/clients/Client-05.webp", alt: "Client-05" },
  { src: "/images/clients/Client-06.webp", alt: "Client-06" },
  { src: "/images/clients/Client-07.webp", alt: "Client-07" },
  { src: "/images/clients/Client-08.webp", alt: "Client-08" },
  { src: "/images/clients/Client-09.webp", alt: "Client-09" },
  { src: "/images/clients/Client-10.webp", alt: "Client-10" },
  { src: "/images/clients/Client-11.webp", alt: "Client-11" },
  { src: "/images/clients/Client-12.webp", alt: "Client-12" },
];

const marqueeImage1 = [
  { src: "/images/clients/Client-12.webp", alt: "Client-01" },
  { src: "/images/clients/Client-11.webp", alt: "Client-02" },
  { src: "/images/clients/Client-10.webp", alt: "Client-03" },
  { src: "/images/clients/Client-09.webp", alt: "Client-04" },
  { src: "/images/clients/Client-08.webp", alt: "Client-05" },
  { src: "/images/clients/Client-07.webp", alt: "Client-06" },
  { src: "/images/clients/Client-06.webp", alt: "Client-07" },
  { src: "/images/clients/Client-05.webp", alt: "Client-08" },
  { src: "/images/clients/Client-04.webp", alt: "Client-09" },
  { src: "/images/clients/Client-03.webp", alt: "Client-10" },
  { src: "/images/clients/Client-02.webp", alt: "Client-11" },
  { src: "/images/clients/Client-01.webp", alt: "Client-12" },
];

export const OurClients = () => {
  const settings = {
    speed: 40,
  };

  const settings1 = {
    speed: 40,
    direction: right,
  };

  return (
    <Box as="section" m={{ xs: "4rem 0rem", md: "6rem 0rem", lg: "6rem 0rem" }}>
      <Heading
        mx={{ xs: "2.4rem", md: "4rem" }}
        mb="5rem"
        textAlign="center"
        Heading="Innovative Brands That Trust Us"
      />

      <Marquee {...settings}>
        {marqueeImage.map((items, index) => {
          return (
            <Grid
              key={index}
              width={{
                xs: "14rem",
                lg: "15.7rem",
              }}
              height={{
                xs: "4.7rem",
                lg: "5.3rem",
              }}
              placeItems="center"
              mx={{ xs: "2rem", lg: "4rem" }}
            >
              <Image
                src={items?.src}
                alt={items?.alt}
                quality={100}
                layout="fill"
                priority
              />
            </Grid>
          );
        })}
      </Marquee>;

      {
        /* right scroll */
      }

      <Marquee {...settings1}>
        {marqueeImage1.map((items, index) => {
          return (
            <Grid
              key={index}
              mt="4rem"
              width={{
                xs: "14rem",
                lg: "15.7rem",
              }}
              height={{
                xs: "4.7rem",
                lg: "5.3rem",
              }}
              placeItems="center"
              mx={{ xs: "2rem", lg: "4rem" }}
            >
              <Image
                src={items?.src}
                alt={items?.alt}
                quality={100}
                layout="fill"
                priority
              />
            </Grid>
          );
        })}
      </Marquee>;
    </Box>
  );
};
