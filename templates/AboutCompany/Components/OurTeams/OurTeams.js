import React from "react";
import { Grid, Box, Text, Flex, Description, SubHeading } from "atoms";
import Image from "next/image";
import MemoLinkedin from "public/assets/icons/Linkedin";

const foundersData = [
  {
    id: 0,
    src: "/images/tems/anuj-pratap-singh.jpg",
    alt: "anuj-pratap-singh",
    name: "Anuj Pratap Singh",
    title: "Project Manager",
  },
  {
    id: 1,
    src: "/images/tems/shrey-saxena.jpg",
    alt: "shrey-saxena",
    name: "Shrey Saxena",
    title: "Technical Evangelist",
  },
  {
    id: 2,
    src: "/images/tems/shrey-saxena.jpg",
    alt: "shrey-saxena",
    name: "Shrey Saxena",
    title: "Technical Evangelist",
  },
  {
    id: 3,
    src: "/images/tems/anuj-pratap-singh.jpg",
    alt: "anuj-pratap-singh",
    name: "Anuj Pratap Singh",
    title: "Project Manager",
  },
  {
    id: 4,
    src: "/images/tems/anuj-pratap-singh.jpg",
    alt: "anuj-pratap-singh",
    name: "Anuj Pratap Singh",
    title: "Project Manager",
  },
  {
    id: 5,
    src: "/images/tems/anuj-pratap-singh.jpg",
    alt: "anuj-pratap-singh",
    name: "Anuj Pratap Singh",
    title: "Project Manager",
  },
];

export const OurTeams = () => {
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
        <SubHeading textAlign="center" mb="4rem" SubHeading="Meet Our Team" />
        <Box
          display={{ xs: "grid", xm: "flex" }}
          flexWrap="wrap"
          justifyContent="center"
          gridTemplateColumns="repeat(4, 1fr)"
          gridGap={{ xs: "2rem", lg: "3.5rem" }}
        >
          {foundersData.map((items, index) => {
            return (
              <Box key={index} boxShadow="m" p="2.5rem" borderRadius="1.5rem">
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
                <Text mt="1.5rem" fontWeight="700" fontSize="2.2rem">
                  {items?.name}
                </Text>
                <Description
                  mt=".6rem"
                  fontWeight="500"
                  color="primary.1100"
                  Description={items?.title}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};
