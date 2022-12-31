import React from "react";
import { Box, Text, Button, Flex } from "atoms";
import Link from "next/link";
import MemoRightArrow from "public/assets/icons/RightArrow";

export const FormButton = ({ mt }) => {
  return (
    <>
      <Link href="/form">
        <a>
          <Button
            mt={mt}
            variant="primary"
            width={{ xs: "100%", lg: "42.4rem" }}
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Box textAlign="left">
                <Text
                  fontSize={{ xs: "1.5rem", md: "2.6rem" }}
                  fontFamily="primaryBlack"
                >
                  Get your pass
                </Text>
                <Text
                  fontSize={{ xs: "1.8rem", md: "3.1rem" }}
                  fontFamily="primaryBlack"
                >
                  CONNECT WITH US
                </Text>
              </Box>
              <Box
                width={{ xs: "2.5rem", md: "4.5rem" }}
                height={{ xs: "1.3rem", md: "2.2rem" }}
              >
                <MemoRightArrow width="100%" height="100%" />
              </Box>
            </Flex>
          </Button>
        </a>
      </Link>
    </>
  );
};
