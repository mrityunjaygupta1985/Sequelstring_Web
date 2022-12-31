import React from "react";
import { Text } from "atoms";

export const TestimonialHeading = ({ title, description }) => {
  return (
    <>
      <Text
        fontSize={{ xs: "2.1rem", md: "2.8rem" }}
         
        mt={{ xs: "3.4rem", md: "4.8rem" }}
      >
        {title}
      </Text>
      <Text
        fontSize={{ xs: "1.6rem", md: "2.4rem" }}
        
        mt={{ xs: "1.3rem", md: "2rem" }}
      >
        {description}
      </Text>
    </>
  );
};
