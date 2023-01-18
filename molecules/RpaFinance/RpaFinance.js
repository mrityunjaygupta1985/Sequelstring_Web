import React from "react";
import { Grid, Box, Flex, Text, Heading, Description, SubHeading } from "atoms";
import Image from "next/image";


export const RpaFinance = () => {
  return (
    <Box
      as="section"
      m={{
        xs: "4rem 2.4rem",
        md: "5rem 4rem",
        xm: "5rem 6rem",
        lg: "6rem 12rem",
      }}
      maxWidth={{ lg: "100%", xl: "144rem" }}
    >
      <Grid
        mt="4rem"
        alignItems="center"
        gridTemplateColumns="1fr 1.5fr"
        gridColumnGap="3rem"
      >
        <Box height="26.9rem" width="39rem">
          <Image
            src="/images/finance-1.webp"
            alt="finance-1"
            quality={100}
            objectFit="contain"
            width={390}
            height={269}
          />
        </Box>
        <Box>
          <Heading
            mb="2rem"
            Heading="Can RPA help Finance and Accounting? Yes!"
          />
          <Description
            mb="1.5rem"
            Description="Automation can empower finance and accounting business units to be more efficient, streamline high-touch processes, and boost employee satisfaction."
          />
          <Description
            mb="1.5rem"
            Description="End-to-end process automation can save up to 60% processing time and cost, all while integrating multiple legacy systems and applications, reducing the need for manual labor and ensuring maximum data security and compliance across all operations."
          />
          <Description Description="Additionally, hyperautomation can accelerate complex processes within the department." />
        </Box>
      </Grid>
    </Box>
  );
};
