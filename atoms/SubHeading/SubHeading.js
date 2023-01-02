import React from "react";
import { Text } from "atoms";

export const SubHeading = ({
  SubHeading,
  color,
  textAlign,
  mt,
  mb,
  mx,
  maxWidth,
  fontSize,
  fontWeight,
}) => {
  return (
    <Text
      mt={mt}
      mb={mb}
      maxWidth={maxWidth}
      mx={mx}
      color={color}
      textAlign={textAlign}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {SubHeading}
    </Text>
  );
};

SubHeading.defaultProps = {
  fontWeight: "700",
  color: "primary.700",
  textAlign: "left",
  fontSize: { xs: "2.2rem", md: "2.6rem", lg: "3.2rem" },
};
