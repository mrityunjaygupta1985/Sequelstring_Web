import React from "react";
import Link from "next/link";
import { Box, Flex, Grid, Text } from "atoms";
import Image from "next/image";

export const Footer = () => {
  return (
    <Box
      // pt={{ xs: "2rem" }}
      zIndex={2}
      bg="secondary.600"
      px="16rem"
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
            fontSize="1.8rem"
            fontWeight="500"
            color="rgb(255, 255, 255, .7)"
          >
            R&D Innovation Lab
          </Text>
          <Text fontSize="1.8rem" color="rgb(255, 255, 255, .7)">
            Don Bosco Institute Of Technology <br />
            Premier Automobiles Road Opp. HDIL Premier Exotica, Kurla, w,
            Maharashtra 400070
          </Text>
        </Box>
        <Box>
          <Text
            // color="rgb(152, 152, 152, .5)"
            color="white"
            fontSize="1.8rem"
            fontWeight="500"
            cursor="pointer"
            _hover={{
              color: "rgb(255, 255, 255, 0.7)",
            }}
          >
            Home
          </Text>
        </Box>

        <Box>
          <Text
            color="white"
            fontSize="1.8rem"
            fontWeight="500"
            cursor="pointer"
            _hover={{
              color: "rgb(255, 255, 255, 0.7)",
            }}
          >
            About Us
          </Text>
        </Box>
        <Box>
          <Text
            color="white"
            fontSize="1.8rem"
            fontWeight="500"
            cursor="pointer"
            _hover={{
              color: "rgb(255, 255, 255, 0.7)",
            }}
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
