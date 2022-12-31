import React, { useState } from "react";
import Modal from "react-modal";
import { Box, Flex } from "atoms";
import MemoCloseIcon from "public/assets/icons/CloseIcon";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Player = styled(Box)`
  @media (max-width: 42.5rem) {
    width: 33.5rem !important;
    height: 20.6rem !important;
  }
  width: 79rem !important;
  height: 52.5rem !important;
  margin: auto;
`;

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
export const VideoMultiModal = ({ isOpen, onRequestClose, data }) => {
  const [play, setPlay] = useState(false);

  // console.log(data);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        ariaHideApp={false}
        id="modal"
      >
        <Flex
          onClick={onRequestClose}
          position="absolute"
          right={{ xs: "1rem", lg: "0rem" }}
          top={{ xs: "1rem", lg: "0rem" }}
          cursor="pointer"
          zIndex={4}
          bg="white"
          width="3rem"
          height="3rem"
          borderRadius="50%"
          justifyContent="center"
          alignItems="center"
        >
          <MemoCloseIcon height="1.5rem" width="1.5rem" />
        </Flex>

        <Box
          width={{ xs: "33.5rem", md: "79rem" }}
          height={{ xs: "20.6", md: "52.5rem" }}
          zIndex={3}
        >
          <Box
            mt={{ xs: "3rem", lg: "4rem" }}
            mb={{ xs: "5.3rem", lg: "8.4rem" }}
            width={{ xs: "unset", lg: "79rem" }}
            height={{ xs: "20.6rem", lg: "52.5rem" }}
          >
            <Player>
              <ReactPlayer
                url={data?.url}
                width="100%"
                height="100%"
                light
                playing={play}
                onReady={() => setPlay(true)}
                wrapper={Player}
                controls={true}
              />
            </Player>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
