import React from "react";
import { Grid, Box, Flex, Text, Heading, Description, SubHeading } from "atoms";
import Image from "next/image";

const dataImpact = [
  { title: "85%", stitle: "Reduction", text: "In Human-Agent Requirement" },
  { title: "90%", stitle: "Increase", text: "In Customer Engagement 24X7" },
  {
    title: "5x",
    stitle: "Advanced",
    text: "Automated Lead Verification & Qualification",
  },
  {
    title: "300%",
    stitle: "Advance",
    text: "In Unified Customer Digital Experience",
  },
];

export const ImpactBusiness = () => {
  return (
    <Box
      as="section"
      m={{
        xs: "5rem 2.4rem",
        md: "5rem 4rem",
        xm: "5rem 6rem",
        lg: "6rem 12rem",
      }}
      maxWidth={{ lg: "100%", xl: "144rem" }}
      mx={{ xl: "auto" }}
    >
      <Heading
        textAlign="center"
        color="primary.1800"
        Heading="Impact of Hyperautomation in Business"
      />

      <Grid
        mt="4rem"
        gridTemplateColumns={{
          md: "1fr 1fr",
          xm: "1fr 1fr 1fr 1fr",
          lg: "2rem 1fr 1fr 1fr 1fr 2rem",
        }}
        gridColumnGap="3rem"
      >
        <Box />
        {dataImpact.map((items, index) => {
          return (
            <Box key={index}>
              <Text
                textAlign="center"
                fontSize={{ xs: "3rem", md: "4rem", lg: "5rem" }}
                fontWeight="700"
                color="primary.1800"
              >
                {items?.title}
              </Text>
              <Text
                textAlign="center"
                fontSize={{ xs: "2rem", lg: "2.2rem" }}
                fontWeight="700"
                mb="1rem"
                color="primary.1800"
              >
                {items?.stitle}
              </Text>
              <Description
                mb={{ xs: "2rem", xm: "unset" }}
                textAlign="center"
                Description={items?.text}
              />
            </Box>
          );
        })}
        <Box />
      </Grid>
    </Box>
  );
};
