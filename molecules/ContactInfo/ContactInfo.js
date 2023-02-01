import React from "react";
import { Box, Text, Grid, Flex, Description } from "atoms";
import Image from "next/image";
import MemoLinkedin from "public/assets/icons/Linkedin";
import MemoTwitter from "public/assets/icons/Twitter";
import MemoPhone from "public/assets/icons/Phone";
import MemoMail from "public/assets/icons/Mail";
import MemoLocation from "public/assets/icons/Location";
import Link from "next/link";

export const ContactInfo = () => {
  return (
    <>
      <Box
        bg="secondary.700"
        overflow="hidden"
        borderRadius="2rem"
        p={{ xs: "4rem 2rem", md: "2rem 3rem" }}
      >
        <Box
          position="absolute"
          height={{ xs: "25rem", md: "30rem" }}
          width={{ xs: "25rem", md: "30rem" }}
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
          mb={{ xs: "3rem", md: "4rem" }}
          color="white"
          Description="See the power of SequelString Automation Software for yourself. Request a free, no-obligation demo today and experience how it can transform your business operations."
        />
        <Link href="tel:+91-8448447751">
          <a>
            <Grid
              gridTemplateColumns="4rem 1fr"
              mt="2rem"
              alignItems="center"
              cursor="pointer"
            >
              <Box color="primary.300">
                <MemoPhone width="2rem" height="2rem" />
              </Box>
              <Description color="white" Description="+91-8448447751" />
            </Grid>
          </a>
        </Link>

        <Link href="mailto:info@sequelstring.com">
          <a>
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
          </a>
        </Link>

        <Grid gridTemplateColumns="4rem 1fr" mt="2rem">
          <Box mt=".5rem" color="primary.300">
            <MemoLocation width="2.2rem" height="2.8rem" />
          </Box>
          <Box>
            {/* <Description
              color="white"
              fontWeight="500"
              Description="Head Office, Mumbai"
            /> */}
            <Description
              color="white"
              fontWeight="500"
              Description="R&D Innovation Lab"
            />
            <Description
              color="white"
              Description="Don Bosco Institute Of Technology"
            />
            <Description
              color="white"
              maxWidth={{ lg: "30rem" }}
              Description="Premier Automobiles Road Opp. HDIL Premier Exotica, Kurla, w, Maharashtra 400070"
            />
          </Box>
        </Grid>
        <Flex mt={{ xs: "3rem", xm: "5rem" }} alignItems="center ">
          <Box color="white" _hover={{ opacity: 0.8 }}>
            <MemoLinkedin width="3rem" height="3rem" cursor="pointer" />
          </Box>
          <Box color="white" ml="3rem" _hover={{ opacity: 0.8 }}>
            <MemoTwitter width="3rem" height="3rem" cursor="pointer" />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
