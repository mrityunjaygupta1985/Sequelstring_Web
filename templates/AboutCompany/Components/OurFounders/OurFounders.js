import React from "react";
import { Grid, Box, Text, Flex, Description, SubHeading, Heading } from "atoms";
import Image from "next/image";
import MemoLinkedin from "public/assets/icons/Linkedin";
import MemoTwitter from "public/assets/icons/Twitter";
import Link from "next/link";

const foundersData = [
  {
    id: 0,
    src: "/images/founders/ravish-sahay.webp",
    alt: "ravish_sahay",
    name: "RAVISH SAHAY",
    title: "Co-founder & Director",
    linkeDinUrl: "https://www.linkedin.com/in/ravish-sahay-6b11071",
  },
  {
    id: 1,
    src: "/images/founders/phani-bhushan.webp",
    alt: "phani_bhushan",
    name: "PHANI BHUSHAN",
    title: "Co-founder",
    linkeDinUrl: "https://in.linkedin.com/in/bhushanphani",
  },
  {
    id: 2,
    src: "/images/founders/munish-aggarwal.webp",
    alt: "munish-aggarwal",
    name: "munish aggarwal",
    title: "Co-founder",
    linkeDinUrl: "https://www.linkedin.com/mwlite/in/munish-agarwala-8b6094b",
  },
  {
    id: 3,
    src: "/images/founders/shrey-saxena.webp",
    alt: "shrey_saxena",
    name: "SHREY SAXENA",
    title: "Co-founder",
    linkeDinUrl: "https://www.linkedin.com/in/shrey-saxena-78aa32139",
  },
];

export const OurFounders = ({ isLinkeding }) => {
  return (
    <>
      <Box
        m={{
          xs: "2rem 0rem",
          md: "5rem 4rem",
          xm: "5rem 6rem",
          lg: "10rem 12rem",
        }}
        maxWidth={{ lg: "100%", xl: "144rem" }}
        mx={{ xl: "auto" }}
      >
        <Heading mb="1.5rem" textAlign="center" Heading="Leadership Team" />
        <Description
          mb={{ xs: "3rem", md: "5rem" }}
          mx={{ xs: "2.4rem", md: "unset" }}
          textAlign="center"
          fontWeight="500"
          Description="Our executive board consists of sharp experts in all aspects of document data extraction."
        />
        <Grid
          gridTemplateColumns="repeat(4, 1fr)"
          gridGap={{ xs: "2rem", lg: "3rem" }}
          overflowX={{ xs: "auto", md: "unset" }}
          p={{ xs: "2.4rem", md: "unset" }}
        >
          {foundersData.map((items, index) => {
            return (
              <Box key={index} boxShadow="m" p="2.5rem" borderRadius="1.5rem">
                <Flex alignItems="center" justifyContent="center">
                  <Box width="18rem" height="18rem" className="image-15">
                    <Image
                      src={items?.src}
                      alt={items?.alt}
                      quality={100}
                      width={180}
                      height={180}
                      objectFit="contain"
                    />
                  </Box>
                </Flex>
                <Text
                  textTransform="uppercase"
                  mt={{ xs: "2rem", md: "2.5rem" }}
                  fontWeight="700"
                  fontSize={{ xs: "1.8rem", md: "2.2rem" }}
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
                  <Link href={items?.linkeDinUrl}>
                    <a target="_blank">
                      <Box color="primary.1800" _hover={{ opacity: 0.8 }}>
                        <MemoLinkedin
                          width="3rem"
                          height="3rem"
                          cursor="pointer"
                        />
                      </Box>
                    </a>
                  </Link>

                  {/* <Box color="primary.1800" ml="2rem" _hover={{ opacity: 0.8 }}>
                    <MemoTwitter width="3rem" height="3rem" cursor="pointer" />
                  </Box> */}
                </Flex>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
