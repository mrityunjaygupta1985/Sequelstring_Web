import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { theme } from "styles";

import { Box, Button, Flex, Grid, Text } from "atoms";
import MenuIcon from "public/assets/icons/MenuIcon";
import CloseMenu from "public/assets/icons/CloseMenu";

export const Header = () => {
  const [active, setActive] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  const pageData = [
    {
      id: "0",
      name: "Home",
      url: "/",
    },
    {
      id: "1",
      name: "About Us",
      url: "about",
    },
    {
      id: "2",
      name: "Contact Us",
      url: "contact",
    },
    {
      id: "3",
      name: "FAQs",
      url: "faq",
    },
  ];

  const mobileData = [
    {
      id: "0",
      name: "Home",
      url: "/",
    },
    {
      id: "1",
      name: "About Us",
      url: "about",
    },
    {
      id: "2",
      name: "Contact Us",
      url: "contact",
    },
    {
      id: "3",
      name: "FAQs",
      url: "faq",
    },
    {
      id: "4",
      name: "Request a Demo",
      url: "demo",
    },
  ];
  return (
    <Box
      position="sticky"
      top={0}
      zIndex={4}
      height={{ xs: "6rem", lg: "9rem" }}
      transition="all 0.3s ease 0s"
      width={{ xs: "100%", lg: "100%", ml: "100%" }}
      // bg={scroll ? "#4275FA" : "#00bfff"}
      bg="white"
      boxShadow="rgb(0 0 0 / 25%) 0px 0px 6px"
    >
      <Flex
        justifyContent="space-between"
        py={{ xs: "3rem", lg: "2rem" }}
        px={{ xs: "2.4rem", md: "2.8rem", lg: "8rem" }}
        alignItems="center"
        height={{ xs: "0rem", lg: "9rem" }}
        bg={mobileMenu ? "transparent" : "transparent"}
      >
        <Link href="/">
          <a rel="noopener noreferrer">
            <Box
              width={{ xs: "20rem", lg: "25rem" }}
              height={{ xs: "5.6rem", lg: "7.1rem" }}
              // display={{ xs: "none", lg: "block" }}
            >
              <Image
                src="/images/logo.webp"
                alt="logo"
                quality={100}
                width={250}
                height={71}
                objectFit="contain"
                priority
              />
            </Box>
          </a>
        </Link>

        {/* display={{ xs: "none", lg: "block" }} */}

        <Grid gridAutoFlow="column" justifyContent="center" gridGap="5rem">
          {pageData.map((items) => {
            return (
              <Box key={items.id} display={{ xs: "none", lg: "block" }}>
                <Grid
                  gridAutoFlow="column"
                  gridGap="6px"
                  justifyContent="center"
                  alignItems="center"
                  className="title-text"
                >
                  <a href={`${items.url}`} rel="noopener noreferrer">
                    <Text
                      color="primary.700"
                      cursor="pointer"
                      fontSize="1.8rem"
                      _hover={{ opacity: 0.6 }}
                      // textTransform="uppercase"
                      // borderBottom={
                      //   router.pathname == items?.url ? "3px solid" : "none"
                      // }
                      // borderColor="primary.1800"
                      fontWeight={400}
                    >
                      {items?.name}
                    </Text>
                  </a>
                </Grid>
              </Box>
            );
          })}

          <Box
            position="absolute"
            bg="white"
            // width="30rem"
            boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
            borderRadius="1rem"
            p="2rem"
            top="4.5rem"
            display="none"
          >
            <Text
              color="primary.700"
              cursor="pointer"
              fontSize="1.8rem"
              p="0.9rem"
              fontWeight="500"
              _hover={{
                bg: "primary.2400",
                color: "primary.1800",
              }}
              borderRadius=".4rem"
            >
              About Us
            </Text>
          </Box>
        </Grid>

        <Box display={{ xs: "none", lg: "block" }}>
          <Link href="/demo">
            <a>
              <Button variant="primary" width={{ xs: "100%", md: "20rem" }}>
                <Text fontSize={{ xs: "1.8rem", md: "2rem" }} fontWeight="500">
                  Request a Demo
                </Text>
              </Button>
            </a>
          </Link>
          {/* <CloseMenu width="2rem" height="2rem" /> */}
        </Box>

        <Box
          display={{ xs: "block", lg: "none" }}
          onClick={() => setMobileMenu(!mobileMenu)}
          cursor="pointer"
        >
          {mobileMenu ? (
            <CloseMenu width="2rem" height="2rem" />
          ) : (
            <MenuIcon width="2rem" height="2rem" />
          )}
        </Box>
      </Flex>

      {/* For mobile */}

      {mobileMenu && (
        <Box
          bg="primary.1800"
          position="fixed"
          height="auto"
          display={{ xs: "block", lg: "none" }}
          width="100%"
          pb="4rem"
        >
          <Grid
            justifyContent="left"
            gridRowGap="2.6rem"
            my="3rem"
            mx={{ xs: "3rem", md: "7rem", lg: "unset" }}
          >
            {mobileData.map((pages) => {
              return (
                <Box key={pages.id}>
                  <Flex justifyContent="left">
                    <a href={`${pages.url}`} rel="noopener noreferrer">
                      <Text
                        fontSize="1.8rem"
                        fontWeight="400"
                        color="white"
                        cursor="pointer"
                        onClick={() => setMobileMenu(false)}
                      >
                        {pages?.name}
                      </Text>
                    </a>
                  </Flex>
                </Box>
              );
            })}
          </Grid>

          <Box
            mt="6rem"
            mx={{ xs: "3rem", md: "7rem", lg: "unset" }}
            display={{ xs: "block", lg: "none" }}
          >
            {/* <Link href="/demo">
              <a rel="noopener noreferrer">
                <Button variant="secondary" width={{ xs: "100%" }}>
                  <Text
                    fontSize={{ xs: "1.8rem", md: "2rem" }}
                    fontWeight="500"
                  >
                    Request a Demo
                  </Text>
                </Button>
              </a>
            </Link> */}

            {/* <CloseMenu width="2rem" height="2rem" /> */}
          </Box>
        </Box>
      )}
    </Box>
  );
};
