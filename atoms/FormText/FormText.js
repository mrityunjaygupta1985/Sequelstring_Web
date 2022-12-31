import React from "react";
import { Text } from "atoms";

export const FormText = ({ text, stric }) => {
  return (
    <Text fontSize={{xs:"1.8rem", md:"2rem"}} mb="1rem">{text}{stric && <Text as="span" fontSize={{xs:"1.8rem", md:"2rem"}} color="primary.1600">*</Text>}</Text>
       
  );
};
