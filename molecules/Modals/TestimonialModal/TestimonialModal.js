import React from "react";
import Modal from "react-modal";
import { Box, Grid, Text } from "atoms";
import MemoCloseIcon from "public/assets/icons/CloseIcon";
import Image from "next/image";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "0px",
    transform: "translate(-50%, -50%)",
    borderRadius: "1rem",
    backgroundColor: "transparent",
    border: "0px",
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 2,
  },
};

export const TestimonialModal = ({ isOpen, onRequestClose, data }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        ariaHideApp={false}
        id="modal"
      >
        <Box
          bg="white"
          p={{ xs: "5rem 2rem 2rem 2rem", md: "5rem 3.6rem" }}
          width={{ xs: "34rem", lg: "82.5rem" }}
          height={{ xs: "75vh", md: "unset" }}
          overflowY="auto"
        >
          <Box
            onClick={onRequestClose}
            position="absolute"
            right={{ xs: "1.5rem", lg: "2rem" }}
            top={{ xs: "1.5rem", lg: "2rem" }}
            cursor="pointer"
            zIndex={4}
          >
            <MemoCloseIcon height="1.5rem" width="1.5rem" />
          </Box>

          <Grid
            gridTemplateColumns={{ md: "auto 1fr" }}
            alignItems="center"
            gridGap={{ xs: "2rem", md: "3.4rem" }}
          >
            <Box
              display={{ xs: "flex", md: "unset" }}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box width="20rem" height="20rem">
                <Image
                  src={data?.src}
                  alt={data?.alt}
                  width={167}
                  height={233}
                  quality={100}
                  objectFit="contain"
                />
              </Box>
            </Box>
            <Box>
              <Text
                fontSize={{ xs: "2rem", md: "2.2rem", lg: "2.4rem" }}
                fontWeight="500"
              >
                {data?.title}
              </Text>

              <Text
                fontSize={{ xs: "1.8rem", lg: "2rem" }}
                lineHeight={{ xs: "2.4rem", lg: "2.8rem" }}
                mt="1.5rem"
              >
                {data?.description}
              </Text>
              <Text
                mt={{ xs: "2rem", md: "4rem" }}
                fontSize={{ xs: "1.8rem", md: "2.2rem", lg: "2.4rem" }}
                fontWeight="500"
              >
                {data?.author}
              </Text>
            </Box>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};
