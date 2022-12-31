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
      name: "About",
      url: "about",
    },
    {
      id: "1",
      name: "Skills",
      url: "skills",
    },
    {
      id: "2",
      name: "Portfolio",
      url: "portfolio",
    },
    {
      id: "3",
      name: "Contact",
      url: "contact",
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
      bg={scroll ? "rgba(17, 2, 198, 1)" : "red"}      
    >
      <Flex
        justifyContent="space-between"
        py={{ xs: "3rem", lg: "2rem" }}
        px={{ xs: "2rem", md: "2.8rem", lg: "7rem" }}
        alignItems="center"
        height={{ xs: "6rem", lg: "9rem" }}
        bg={
          mobileMenu
            ? "linear-gradient(98.94deg, #4275FA -23.73%, rgba(17, 2, 198, 0.87) 118.38%)"
            : "transparent"
        }
      >
        <Link href="/">
          <a rel="noopener noreferrer">
            <Text
              cursor="pointer"
              fontSize={{ xs: "2rem", md: "2.6rem" }}
              fontWeight="400"
              fontFamily="Pacifico"
              color="white"
            >
              Mrityunjay's Portfolio
            </Text>
          </a>
        </Link>

        <Box> 
        {/* display={{ xs: "none", lg: "block" }} */}
          <Grid gridAutoFlow="column" justifyContent="center" gridGap="3rem">
            {pageData.map((pages) => {
              return (
                <Box key={pages.id}>
                  <Grid
                    gridAutoFlow="column"
                    gridGap="6px"
                    justifyContent="center"
                    alignItems="center"
                    className="title-text"
                  >
                    <a href={`#${pages.url}`} rel="noopener noreferrer">
                      <Text
                        color="white"
                        cursor="pointer"
                        fontSize="1.8rem"
                        textTransform="uppercase"
                        borderBottom={
                          router.pathname == pages?.url ? "3px solid" : "none"
                        }
                        borderColor="white"
                        fontWeight={500}
                      >
                        {pages?.name}
                      </Text>
                    </a>
                  </Grid>
                </Box>
              );
            })}
          </Grid>
        </Box>

        <Box
          display={{ xs: "block", lg: "none" }}
          onClick={() => setMobileMenu(!mobileMenu)}
          color="white"
          cursor="pointer"
        >
          {mobileMenu ? <CloseMenu /> : <MenuIcon />}
        </Box>
      </Flex>
      {mobileMenu && (
        <Box
          bg="rgba(17, 2, 198, 1)"
          position="fixed"
          height="auto"
          display={{ xs: "block", lg: "none" }}
          width="100%"
        >
          <Grid
            justifyContent="left"
            gridRowGap="2.8rem"
            my="2rem"
            ml={{ xs: "3rem", md: "7rem", lg: "unset" }}
          >
            {pageData.map((pages) => {
              return (
                <Box key={pages.id}>
                  <Flex justifyContent="left">
                    <a href={`#${pages.url}`} rel="noopener noreferrer">
                      <Text
                        fontSize="1.6rem"
                        lineHeight="2.4rem"
                        fontWeight="700"
                        textAlign="center"
                        color="white"
                        cursor="pointer"
                        textTransform="capitalise"
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
        </Box>
      )}
    </Box>
  );
};
