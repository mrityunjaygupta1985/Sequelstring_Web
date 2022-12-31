import React from "react";
import { Grid, Box, Heading } from "atoms";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const marqueeImage = [
    {src:"/images/Client-01.png", alt:"Client-01"},
    {src:"/images/Client-01.png", alt:"Client-01"},
    {src:"/images/Client-01.png", alt:"Client-01"},
    {src:"/images/Client-01.png", alt:"Client-01"},
    {src:"/images/Client-01.png", alt:"Client-01"},
    {src:"/images/Client-01.png", alt:"Client-01"},
    {src:"/images/Client-01.png", alt:"Client-01"},
    {src:"/images/Client-01.png", alt:"Client-01"},
    {src:"/images/Client-01.png", alt:"Client-01"}
];

export const OurClients = () => {
    const settings = {
        speed: 40,
    }
  return (
    <Box as="section" m={{xs:"4rem 0rem", md:"6rem 0rem", lg: "6rem 0rem" }}>
        <Heading mx={{xs:"2.4rem", md:"4rem"}} mb="5rem" textAlign="center" Heading="Lorem ipsum dolor sit amet" />

        <Marquee {...settings}>
            {marqueeImage.map((items, index) => {
                return (
                    <Grid key={index} height={{
                    xs: "5.6rem", 
                    lg: "5.6rem",
                  }}
                  width={{
                    xs: "15.3rem", 
                    lg: "15.3rem",
                  }}
                  placeItems="center"
                  mx={{ xs: "2rem", lg: "4rem" }}>
                     <Image src={items?.src} alt={items?.alt} quality={100} layout="fill"/>
                    </Grid>
                )
            })}
            
        </Marquee>

    </Box>
  );
};
