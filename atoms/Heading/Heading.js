import React from "react";
import { Text } from "atoms";

export const Heading = ({
  Heading,
  color,
  textAlign,
  mt,
  mb,
  mx,
  maxWidth,
  fontSize,
}) => {
  return (
    <Text
      as="h2"
      m="0"
      mt={mt}
      mb={mb}
      maxWidth={maxWidth}
      mx={mx}
      color={color}
      textAlign={textAlign}
      fontSize={fontSize}
      fontWeight="700"
    >
      {Heading}
    </Text>
  );
};

Heading.defaultProps = {
  color: "primary.700",
  textAlign: "left",
  fontSize: { xs: "2.6rem", md: "3.6rem", lg: "4rem" },
};
