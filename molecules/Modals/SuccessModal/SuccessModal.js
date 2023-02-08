import React from "react";
import Modal from "react-modal";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

import { Box, Text } from "atoms";
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

export const SuccessModal = ({ isOpen, onRequestClose }) => {
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
        zIndex={5}
      >
        <MemoCloseIcon
          name="close"
          height="1.5rem"
          width="1.5rem"
          cursor="pointer"
        />
      </Box>
      <Box textAlign="center" height={{ md: "30rem" }}>
        <Player
          autoplay
          loop
          src="/images/thankyou.json"
          // src="https://assets1.lottiefiles.com/packages/lf20_CH6I9S.json"
          style={{ width: 300, height: 300 }}
        >
          <Controls visible={false} />
        </Player>
      </Box>
      <Box width="100%">
        <Text
          variant="headingEightMedium"
          textAlign="center"
          px={{ md: "10rem" }}
        >
          Thank you for getting in touch! <br />
        </Text>
      </Box>
    </Modal>
  );
};
