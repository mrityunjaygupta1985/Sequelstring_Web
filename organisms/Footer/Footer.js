import React from "react";
import Link from "next/link";
import { Box, Flex, Grid, Text } from "atoms";
import Image from "next/image";
import MemoPhone from "public/assets/icons/Phone";
import MemoMail from "public/assets/icons/Mail";
import MemoLinkedin from "public/assets/icons/Linkedin";
import MemoTwitter from "public/assets/icons/Twitter";

export const Footer = () => {
  return (
    <Box
      // pt={{ xs: "2rem" }}
      zIndex={2}
      bg="secondary.600"
      px="12rem"
      pt="4rem"
      // backgroundImage="linear-gradient(98.94deg, #4275FA -23.73%, rgba(17, 2, 198, 0.87) 118.38%);"
    >
      <Grid
        gridTemplateColumns="2fr 1fr 1fr 1fr"
        mb="4rem"
        gridColumnGap="6rem"
      >
        <Box>
          <Box
            width={{ xs: "20rem", lg: "25rem" }}
            height={{ xs: "5.6rem", lg: "7.1rem" }}
          >
            <Image
              src="/images/logo.svg"
              alt="logo"
              quality={100}
              width={250}
              height={71}
              objectFit="contain"
            />
          </Box>
          <Text
            mt="2rem"
            fontSize={{ xs: "1.6rem", lg: "1.8rem" }}
            fontWeight="500"
            color="white"
          >
            Head Office, Mumbai
          </Text>
          <Text
            mt=".5rem"
            fontSize={{ xs: "1.6rem", lg: "1.8rem" }}
            fontWeight="500"
            color="rgb(255, 255, 255, .7)"
          >
            R&D Innovation Lab
          </Text>
          <Text
            fontSize={{ xs: "1.6rem", lg: "1.8rem" }}
            color="rgb(255, 255, 255, .7)"
          >
            Don Bosco Institute Of Technology <br />
            Premier Automobiles Road Opp. HDIL Premier Exotica, Kurla, w,
            Maharashtra 400070
          </Text>

          <Link href="tel:+91-8448447751">
            <a>
              <Grid
                gridTemplateColumns="4rem 1fr"
                mt="2rem"
                alignItems="center"
                cursor="pointer"
              >
                <Box color="primary.1800">
                  <MemoPhone width="2rem" height="2rem" />
                </Box>
                <Text
                  fontSize={{ xs: "1.6rem", lg: "1.8rem" }}
                  lineHeight={{ xs: "2.4rem", md: "2.8rem" }}
                  color="rgb(255, 255, 255, .7)"
                  _hover={{ color: "rgb(255, 255, 255, 1)" }}
                >
                  +91-8448447751
                </Text>
              </Grid>
            </a>
          </Link>

          <Link href="mailto:info@sequelstring.com">
            <a>
              <Grid
                gridTemplateColumns="4rem 1fr"
                mt="1.5rem"
                alignItems="center"
                cursor="pointer"
              >
                <Box color="primary.1800">
                  <MemoMail width="2.3rem" height="1.8rem" />
                </Box>
                <Text
                  fontSize={{ xs: "1.6rem", lg: "1.8rem" }}
                  color="rgb(255, 255, 255, .7)"
                  lineHeight={{ xs: "2.4rem", md: "2.8rem" }}
                  _hover={{ color: "rgb(255, 255, 255, 1)" }}
                >
                  info@sequelstring.com
                </Text>
              </Grid>
            </a>
          </Link>
          <Flex mt="2rem" alignItems="center ">
            <Box
              color="rgb(255, 255, 255, .7)"
              _hover={{ color: "rgb(255, 255, 255, 1)" }}
            >
              <MemoLinkedin width="3rem" height="3rem" cursor="pointer" />
            </Box>
            <Box
              color="rgb(255, 255, 255, .7)"
              ml="3rem"
              _hover={{ color: "rgb(255, 255, 255, 1)" }}
            >
              <MemoTwitter width="3rem" height="3rem" cursor="pointer" />
            </Box>
          </Flex>
        </Box>

        <Box>
          <Text
            fontSize="1.8rem"
            fontWeight="500"
            cursor="pointer"
            color="rgb(255, 255, 255, .7)"
            _hover={{ color: "rgb(255, 255, 255, 1)" }}
          >
            Home
          </Text>
        </Box>

        <Box>
          <Text
            fontSize="1.8rem"
            fontWeight="500"
            cursor="pointer"
            color="rgb(255, 255, 255, .7)"
            _hover={{ color: "rgb(255, 255, 255, 1)" }}
          >
            About Us
          </Text>
        </Box>
        <Box>
          <Text
            fontSize="1.8rem"
            fontWeight="500"
            cursor="pointer"
            color="rgb(255, 255, 255, .7)"
            _hover={{ color: "rgb(255, 255, 255, 1)" }}
          >
            Contact Us
          </Text>
        </Box>
      </Grid>

      <Flex
        flexDirection={{ xs: "column", md: "column" }}
        alignItems="center"
        px={{ xs: "2.4rem", lg: "7rem" }}
        py="2rem"
        borderTop=".1rem solid"
        borderColor="rgb(255, 255, 255, .7)"
      >
        <Text
          fontSize={{ xs: "1.4rem", md: "1.6rem" }}
          color="rgb(255, 255, 255, .7)"
        >
          Sequelstring 2022 © All Rights Reserved.
        </Text>
        <Text
          mt="1rem"
          fontSize={{ xs: "1.4rem", md: "1.6rem" }}
          color="rgb(255, 255, 255, .7)"
        >
          Built with ❤️ in SequelString
        </Text>
      </Flex>
    </Box>
  );
};
