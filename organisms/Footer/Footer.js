import React from "react";
import Link from "next/link";
import { Box, Flex, Text } from "atoms";

export const Footer = () => {
  return (
    <Box
      // pt={{ xs: "2rem" }}
      zIndex={2}
      // backgroundImage="linear-gradient(98.94deg, #4275FA -23.73%, rgba(17, 2, 198, 0.87) 118.38%);"
    >
      {/* <Flex justifyContent="center">
        <Link href="/" passHref>
          <Text
            cursor="pointer"
            fontSize={{ xs: "2rem", md: "3.6rem" }}
            mb="2rem"
            fontWeight="400"
            fontWeight="500"
            color="white"
          >
            Sequelstring
          </Text>
        </Link>
      </Flex> */}
      <Flex
        flexDirection={{ xs: "column", md: "column" }}
        alignItems="center"
        bg="rgb(29, 29, 29)"
        px={{ xs: "2.4rem", lg: "7rem" }}
        py="2rem"
      >
        <Text fontSize={{ xs: "1.4rem", md: "1.6rem" }} color="white">
          Sequelstring 2022 © All Rights Reserved.
        </Text>
        <Text mt="1rem" fontSize={{ xs: "1.4rem", md: "1.6rem" }} color="white">
          Built with ❤️ in SequelString
        </Text>
      </Flex>
    </Box>
  );
};
