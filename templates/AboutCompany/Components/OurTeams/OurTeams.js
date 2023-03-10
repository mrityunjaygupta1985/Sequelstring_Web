import React from "react";
import { Grid, Box, Text, Flex, Description, SubHeading } from "atoms";
import Image from "next/image";
import MemoLinkedin from "public/assets/icons/Linkedin";

const foundersData = [
  {
    id: 0,
    src: "/images/tems/anuj-pratap-singh.webp",
    alt: "anuj-pratap-singh",
    name: "Anuj Pratap Singh",
    title: "Project Manager",
  },
  {
    id: 1,
    src: "/images/tems/shrey-saxena.webp",
    alt: "shrey-saxena",
    name: "Shrey Saxena",
    title: "Technical Evangelist",
  },

  {
    id: 2,
    src: "/images/tems/laya-yesodharan.webp",
    alt: "laya-yesodharan",
    name: "Laya Yesodharan",
    title: "Sr. Client Partner",
  },
  {
    id: 3,
    src: "/images/tems/shivi-johri.webp",
    alt: "shivi-johri",
    name: "Shivi Johri",
    title: "Project Manager",
  },

  {
    id: 4,
    src: "/images/tems/jayanti-rai.webp",
    alt: "jayanti-rai",
    name: "Jayanti Rai",
    title: "Solution Architect",
  },
  {
    id: 5,
    src: "/images/tems/abhimanyu-yadav.webp",
    alt: "abhimanyu-yada",
    name: "Abhimanyu Yadav",
    title: "Sr. Developer",
  },
];

export const OurTeams = () => {
  return (
    <>
      <Box
        m={{
          xs: "0rem",
          md: "5rem 4rem",
          xm: "5rem 6rem",
          lg: "10rem 12rem",
        }}
        maxWidth={{ lg: "100%", xl: "144rem" }}
        mx={{ xl: "auto" }}
      >
        <SubHeading
          textAlign="center"
          mb={{ xs: "2rem", md: "4rem" }}
          mt={{ xs: "4rem", md: "unset" }}
          SubHeading="Meet Our Team"
        />
        <Box
          display={{ xs: "grid", xm: "flex" }}
          flexWrap="wrap"
          justifyContent={{ xs: "left", md: "center" }}
          gridTemplateColumns={{ xs: "repeat(6, 1fr)", md: "repeat(4, 1fr)" }}
          gridGap={{ xs: "2rem", lg: "3.5rem" }}
          overflowX={{ xs: "auto", md: "unset" }}
          p={{ xs: "2.4rem", md: "unset" }}
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
                      priority
                    />
                  </Box>
                </Flex>
                <Text
                  mt="1.5rem"
                  fontWeight="700"
                  fontSize={{ xs: "2rem", md: "2.2rem" }}
                >
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
