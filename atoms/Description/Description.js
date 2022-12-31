import React from "react";
import { Text } from "atoms";

export const Description = ({ name, children, ...props }) => {
  return (
    <Text
      as="p"
      fontSize={{ xs: "1.6rem", md: "1.6rem", lg: "2.2rem" }}
      fontWeight={400}
      {...props}
    >
      {name}
      {children}
    </Text>
  );
};

Description.defaultProps = {
  color: "neutral.700",
};
