import React from "react";
import { Text, Grid } from "atoms";

export const NumberList = ({ num, listText }) => {
  return (
    <Grid gridTemplateColumns={{ xs: "2.5rem 1fr", md: "3.5rem 1fr" }}>
      <Text
        fontFamily={{ xs: "primaryBook", md: "primaryBlack" }}
        fontSize={{ xs: "2.3rem", md: "2.8rem" }}
      >
        {num}
      </Text>
      <Text
        fontSize={{ xs: "2.3rem", md: "2.8rem" }}
        fontFamily={{ xs: "primaryBook", md: "primaryBlack" }}
      >
        {listText}
      </Text>
    </Grid>
  );
};
