import React from "react";
import { Text } from "atoms";

export const Description = ({
  Description,
  color,
  textAlign,
  mt,
  mb,
  mx,
  maxWidth,
  fontSize,
  fontWeight,
  lineHeight,
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
      lineHeight={lineHeight}
    >
      {Description}
    </Text>
  );
};

Description.defaultProps = {
  fontWeight:"400",  
  color: "primary.700",
  textAlign: "left",
  fontSize: { xs:"1.8rem", lg:"2rem" },
  lineHeight:{ xs:"2.4rem", lg:"2.8rem" },
};

