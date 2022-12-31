import React from "react";
import { Box, Text, Grid, Flex } from "atoms";
import Image from "next/image";

export const TestimonialCards = ({
  title,
  description,
  src,
  alt,
  author,
  designation,
}) => {
  return (
    <Box
      bg="white"
      border=".1rem solid"
      borderColor="primary.1100"
      borderRadius="1rem"
      p="1.6rem 1.7rem 1.9rem 3rem"
      width={{ xs: "30.6rem", md: "49.3rem" }}
    >
      <Text fontSize={{ xs: "1.8rem", md: "2.4rem" }} fontFamily="primaryBlack">
        {title.slice(0, 30)}...
      </Text>

      <Text
        fontSize={{ xs: "1.6rem", md: "1.8rem" }}
        fontFamily="primaryBook"
        mt="1.7rem"
      >
        {description.slice(0, 200)}...
      </Text>

      <Text
        fontSize={{ xs: "1.6rem", md: "1.8rem" }}
        fontFamily="primaryBlack"
        mt="1.2rem"
        color="primary.1200"
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
          />
        </Box>
        <Box>
          <Text
            fontSize={{ xs: "1.8rem", md: "2.4rem" }}
            fontFamily="primaryBlack"
          >
            {author}
          </Text>
          <Text
            fontSize={{ xs: "1.4rem", md: "1.6rem" }}
            fontFamily="primaryBook"
          >
            {designation}
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};
