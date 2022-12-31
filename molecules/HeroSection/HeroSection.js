import React from "react";
import { Grid, Box, Text, Flex, FormButton } from "atoms";
import Image from "next/image";
import Link from "next/link";

 

export const HeroSection = () => {
  return (
    <Box mx={{ md: "16rem" }}>       

      <Grid gridTemplateColumns={{ md: "1fr 1fr" }} gridGap="3.4rem">
        <Box px={{ xs: "2.8rem", md: "unset" }} order={{ xs: 1, lg: 0 }}> 

          <Link href="/">
            <a>
              <Box
                mt="4rem"
                width={{ md: "21.4rem" }}
                height={{ md: "3.8rem" }}
                display={{ xs: "none", md: "block" }}
              >
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  quality={100}
                  width={214}
                  height={38}
                  objectFit="contain"
                />
              </Box>
            </a>
          </Link>
          
          
           

          <FormButton mt={{ xs: "2.6rem", md: "3rem" }} />
        </Box>
      </Grid>
    </Box>
  );
};
