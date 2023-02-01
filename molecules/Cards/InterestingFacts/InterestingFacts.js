import React from "react";
import { Grid, Box, Text } from "atoms";
import Image from "next/image";

export const InterestingFacts = ({ src, title, pointer }) => {
  return (
    <Box>
      <Grid
        mt="3rem"
        gridTemplateColumns={{ xm: "1fr 2fr" }}
        gridColumnGap="3rem"
        gridRowGap="2rem"
        alignItems="center"
      >
        <Box width="auto" height={{ xs: "27rem", xm: "35rem" }}>
          <Image
            // src="/images/home-1.webp"
            src={src}
            alt="home-1"
            quality={100}
            // width={420}
            // height={335}
            layout="fill"
            // objectFit="contain"
          />
        </Box>

        <Box>
          <Text
            mb="1.5rem"
            fontWeight="700"
            color="primary.1800"
            fontSize={{ xs: "2.2rem", md: "2.4rem", lg: "2.8rem" }}
          >
            {title}
            {/* IDP - Intelligent Data Processor */}
          </Text>
          <Box as="ol" ml="-1rem">
            {pointer.map((items, index) => {
              return (
                <Text
                  key={index}
                  as="li"
                  color="primary.700"
                  fontSize={{ xs: "1.8rem", lg: "2rem" }}
                  lineHeight={{ xs: "2.4rem", lg: "2.8rem" }}
                  mt="1.2rem"
                  p="0rem"
                >
                  {items?.listText}
                </Text>
              );
            })}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
