import React from "react";
import { Box, Text, Grid, Flex, Description } from "atoms";
import Image from "next/image";
import MemoLinkedin from "public/assets/icons/Linkedin";
import MemoTwitter from "public/assets/icons/Twitter";
import MemoPhone from "public/assets/icons/Phone";
import MemoMail from "public/assets/icons/Mail";
import MemoLocation from "public/assets/icons/Location";

export const ContactInfo = () => {
  return (
    <>
      <Box
        bg="primary.2000"
        overflow="hidden"
        borderRadius="2rem"
        p={{ xs: "4rem 2rem", md: "2rem 3rem" }}
      >
        <Box
          position="absolute"
          height="30rem"
          width="30rem"
          bg="primary.2100"
          borderRadius="100%"
          right="-8rem"
          bottom="-8rem"
        />
        <Text
          fontSize={{ xs: "2.4rem", md: "2.8rem", lg: "3.6rem" }}
          fontWeight="500"
          color="white"
          //   textTransform="uppercase"
        >
          Request Demo
        </Text>
        <Description
          mt="2rem"
          mb={{ xs: "4rem", md: "6rem" }}
          color="white"
          Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Grid
          gridTemplateColumns="4rem 1fr"
          mt="2rem"
          alignItems="center"
          cursor="pointer"
        >
          <Box color="primary.300">
            <MemoPhone width="2rem" height="2rem" />
          </Box>
          <Description color="white" Description="+91-9999999999" />
        </Grid>
        <Grid
          gridTemplateColumns="4rem 1fr"
          mt="2rem"
          alignItems="center"
          cursor="pointer"
        >
          <Box color="primary.300">
            <MemoMail width="2.3rem" height="1.8rem" />
          </Box>
          <Text
            fontSize={{ xs: "1.8rem", md: "2rem" }}
            color="white"
            lineHeight={{ xs: "2.4rem", md: "2.8rem" }}
          >
            info@sequelstring.com
          </Text>
        </Grid>
        <Grid gridTemplateColumns="4rem 1fr" mt="2rem">
          <Box mt=".5rem" color="primary.300">
            <MemoLocation width="2.2rem" height="2.8rem" />
          </Box>
          <Description
            maxWidth={{ lg: "30rem" }}
            color="white"
            Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
          />
        </Grid>
        <Flex mt="8rem" alignItems="center ">
          <Box color="white">
            <MemoLinkedin width="3rem" height="3rem" cursor="pointer" />
          </Box>
          <Box color="white" ml="3rem">
            <MemoTwitter width="3rem" height="3rem" cursor="pointer" />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
