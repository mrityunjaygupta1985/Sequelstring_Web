import React from "react";
import Link from "next/link";
import { Box, Flex, Text } from "atoms";

export const Footer = () => {
  return (
    <Box
      pt={{ xs: "2rem" }}
      zIndex={2}
      backgroundImage="linear-gradient(98.94deg, #4275FA -23.73%, rgba(17, 2, 198, 0.87) 118.38%);"
    >
      <Flex justifyContent="center">
        <Link href="/" passHref>
          <Text
            cursor="pointer"
            fontSize={{ xs: "2rem", md: "3.6rem" }}
            mb="2rem"
            fontWeight="400"
            fontFamily="Pacifico"
            color="white"
          >
            Mrityunjay's Portfolio
          </Text>
        </Link>
      </Flex>
      <Flex
        flexDirection={{ xs: "column", md: "column" }}
        alignItems="center"
        bg="black"
        px={{ xs: "2.3rem", lg: "7rem" }}
        py="2rem"
      >
        <Text
          fontSize={{ xs: "1.4rem", md: "1.6rem" }}
          fontWeight={400}
          color="white"
        >
          COPYRIGHT © 2022
        </Text>
        <Text
          mt="1rem"
          fontSize={{ xs: "1.4rem", md: "1.6rem" }}
          fontWeight={500}
          color="white"
        >
          Built with ❤️ in Next JS, by Mrityunjay Kumar
        </Text>
      </Flex>
    </Box>
  );
};
