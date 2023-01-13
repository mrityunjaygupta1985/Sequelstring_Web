import React from "react";
import Link from "next/link";
import { Box, Flex, Grid, Text } from "atoms";
import Image from "next/image";

export const Footer = () => {
  return (
    <Box
      // pt={{ xs: "2rem" }}
      zIndex={2}
      bg="rgb(29, 29, 29)"
      px="16rem"
      pt="4rem"
      // backgroundImage="linear-gradient(98.94deg, #4275FA -23.73%, rgba(17, 2, 198, 0.87) 118.38%);"
    >
      <Grid
        gridTemplateColumns="auto 1fr 1fr 1fr"
        mb="4rem"
        gridColumnGap="6rem"
      >
        <Box>
          <Box
            width={{ xs: "20rem", lg: "25rem" }}
            height={{ xs: "5.6rem", lg: "7.1rem" }}
          >
            <Image
              src="/images/logo-w.png"
              alt="logo"
              quality={100}
              width={250}
              height={71}
              objectFit="contain"
            />
          </Box>
        </Box>
        <Box>
          <Text
            color="rgb(152, 152, 152, .5)"
            fontSize="1.8rem"
            fontWeight="500"
            cursor="pointer"
            _hover={{
              color: "rgb(152, 152, 152, 0.9)",
            }}
          >
            Home
          </Text>
        </Box>

        <Box>
          <Text
            color="rgb(152, 152, 152, .5)"
            fontSize="1.8rem"
            fontWeight="500"
            cursor="pointer"
            _hover={{
              color: "rgb(152, 152, 152, 0.9)",
            }}
          >
            Company
          </Text>
        </Box>
      </Grid>

      <Flex
        flexDirection={{ xs: "column", md: "column" }}
        alignItems="center"
        px={{ xs: "2.4rem", lg: "7rem" }}
        py="2rem"
        borderTop=".1rem solid"
        borderColor="rgb(152, 152, 152, .8)"
      >
        <Text
          fontSize={{ xs: "1.4rem", md: "1.6rem" }}
          color="rgb(152, 152, 152, .8)"
        >
          Sequelstring 2022 © All Rights Reserved.
        </Text>
        <Text
          mt="1rem"
          fontSize={{ xs: "1.4rem", md: "1.6rem" }}
          color="rgb(152, 152, 152, .8)"
        >
          Built with ❤️ in SequelString
        </Text>
      </Flex>
    </Box>
  );
};
