import React from "react";
import { Box, Text, Grid } from "atoms";
import Image from "next/image";

export const TestimonialCards = ({ title, description, src, alt, author }) => {
  return (
    <Box
      bg="white"
      border=".1rem solid"
      borderColor="primary.1800"
      borderRadius="1rem"
      p="2rem"
      width={{ xs: "30rem", md: "40rem", lg: "49rem" }}
    >
      <Text
        fontSize={{ xs: "2rem", md: "2.2rem", lg: "2.4rem" }}
        fontWeight="700"
      >
        {title}
      </Text>
      <Text
        fontSize={{ xs: "1.8rem", lg: "2rem" }}
        lineHeight={{ xs: "2.4rem", lg: "2.8rem" }}
        mt="1.5rem"
      >
        {description.slice(0, 160)}...
      </Text>

      <Text
        fontSize={{ xs: "1.8rem", lg: "2rem" }}
        mt="1.2rem"
        color="primary.1800"
        fontWeight="700"
      >
        READ MORE
      </Text>

      <Grid
        gridTemplateColumns="6rem 1fr"
        gridGap="1.5rem"
        mt="1.5rem"
        alignItems="center"
      >
        <Box
          width="6rem"
          height="6rem"
          border=".1rem solid"
          borderColor="primary.1100"
          borderRadius="50rem"
          overflow="hidden"
          mr="2.4rem"
        >
          <Image
            src={src}
            alt={alt}
            width={60}
            height={60}
            quality={100}
            objectFit="contain"
            priority
          />
        </Box>
        <Box>
          <Text
            fontSize={{ xs: "1.8rem", md: "2.2rem", lg: "2.4rem" }}
            fontWeight="700"
          >
            {author}
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};
