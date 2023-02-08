import React from "react";
import Modal from "react-modal";
import { Box, Text } from "atoms";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import MemoCloseIcon from "public/assets/icons/CloseIcon";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1rem",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: "5",
  },
};

export const WarningModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <Box
        onClick={onRequestClose}
        position="absolute"
        right="2rem"
        top="2rem"
        cursor="pointer"
        zIndex={2}
      >
        <MemoCloseIcon height="1.5rem" width="1.5rem" />
      </Box>
      <Box textAlign="center" height={{ md: "30rem" }}>
        <Player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/temporary_files/zImJ45.json"
          style={{ width: 300, height: 300 }}
        >
          <Controls visible={false} />
        </Player>
      </Box>
      <Box width="100%">
        <Text
          fontWeight="bold"
          color="neutral.800"
          fontSize={{ xs: "2rem", md: "3rem" }}
          mt={{ xs: "-4.4rem", md: "-4.4rem" }}
          px={{ xs: "4rem", lg: "10rem" }}
          pb="2rem"
          textAlign="center"
        >
          Oops!
          <br /> Request failed...
        </Text>
      </Box>
    </Modal>
  );
};
