import { Text } from "atoms";
import React from "react";

export const Heading = ({ as, name, children, ...props }) => {
  return (
    <Text as={as} m={0} fontWeight={700} {...props}>
      {name}
      {children}
    </Text>
  );
};

Heading.defaultProps = {
  as: "h2",
  color: "neutral.800",
  fontSize: { xs: "2.2rem", md: "2.8rem", lg: "4.8rem" },
  lineHeight: { xs: "3.3rem", md: "4.2rem", lg: "6.4rem" },
};
