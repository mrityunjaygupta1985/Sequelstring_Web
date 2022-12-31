import React from "react";

import { Text } from "atoms";

export const Title = ({ name, ...props }) => {
  return (
    <Text
      as="h3"
      m={0}
      fontSize={{ xs: "1.6rem", md: "1.6rem", lg: "2.2rem" }}
      fontWeight={500}
      {...props}
    >
      {name}
    </Text>
  );
};

Title.defaultProps = {
  color: "primary.500",
};
