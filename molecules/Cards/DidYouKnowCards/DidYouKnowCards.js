import React from "react";
import { Box, Description, SubHeading } from "atoms";
import Image from "next/image";

export const DidYouKnowCards = () => {
  return (
    <>
      <Box
        bg="white"
        boxShadow="rgb(0 0 0 / 25%) 0px 0px 6px"
        border="2px solid"
        borderRadius="1rem"
      >
        <Box p="2rem 1.5rem">
          <Description
            // mb="1.5rem"
            textAlign="center"
            Description="Be the first Choice of providing Value to Customer's Customer TO AUTOMATE ANY PROCESS IN ANY COMPANY (SIZE, INDUSTRY) & in ANY part of GEOGRAPHY"
          />
        </Box>
      </Box>
    </>
  );
};
