import React from "react";
import { Grid, Box, Text, Flex, Description, SubHeading, Heading } from "atoms";
import Image from "next/image";
import MemoLinkedin from "public/assets/icons/Linkedin";
import MemoTwitter from "public/assets/icons/Twitter";

const foundersData = [
  {
    id: 0,
    src: "/images/founders/ravish-sahay.jpg",
    alt: "ravish_sahay",
    name: "RAVISH SAHAY",
    title: "Co-founder & Director",
  },
  {
    id: 1,
    src: "/images/founders/phani-bhushan.jpg",
    alt: "phani_bhushan",
    name: "PHANI BHUSHAN",
    title: "Co-founder",
  },
  {
    id: 2,
    src: "/images/founders/shrey-saxena.jpg",
    alt: "shrey_saxena",
    name: "SHREY SAXENA",
    title: "Co-founder",
  },
];

export const OurFounders = () => {
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
      >
        <Heading mb="5rem" textAlign="center" Heading="Leadership Team" />
        <Grid
          gridTemplateColumns="repeat(3, 1fr)"
          gridGap={{ xs: "2rem", lg: "4rem" }}
        >
          {foundersData.map((items, index) => {
            return (
              <Box key={index} boxShadow="m" p="3rem" borderRadius="1.5rem">
                <Flex alignItems="center" justifyContent="center">
                  <Box
                    width={{ xs: "20rem", lg: "20rem" }}
                    height={{ xs: "20rem", lg: "20rem" }}
                    className="image-15"
                  >
                    <Image
                      src={items?.src}
                      alt={items?.alt}
                      quality={100}
                      width={200}
                      height={200}
                      objectFit="contain"
                    />
                  </Box>
                </Flex>
                <Text
                  textTransform="uppercase"
                  mt="2.5rem"
                  fontWeight="700"
                  fontSize="2.2rem"
                >
                  {items?.name}
                </Text>
                <Description
                  mt=".5rem"
                  fontWeight="500"
                  color="primary.1100"
                  Description={items?.title}
                />
                <Flex mt="1.5rem" alignItems="center">
                  <Box color="primary.1800" _hover={{ opacity: 0.8 }}>
                    <MemoLinkedin width="3rem" height="3rem" cursor="pointer" />
                  </Box>
                  <Box color="primary.1800" ml="2rem" _hover={{ opacity: 0.8 }}>
                    <MemoTwitter width="3rem" height="3rem" cursor="pointer" />
                  </Box>
                </Flex>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
