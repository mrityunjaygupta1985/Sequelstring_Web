import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { variant } from "styled-system";
import PropTypes from "prop-types";
import hexToRgba from "hex-to-rgba";

import { Box, Flex, Text, Loader } from "atoms";
import { theme } from "styles";

const ButtonBase = styled(Box)`
  position: relative;
  cursor: pointer;
  outline: none;
  display: grid;
  /* align-items: center; */
  /* font-family: "Poppins", sans-serif; */

  ${variant({
    variants: {
      primary: {
        color: theme.colors.primary[1900], 
        /* fontSize: ["1.6rem", "1.6rem", "1.6rem", "1.8rem"], */
        borderRadius: "1rem",
        cursor: "pointer",
        transition: "all .3s",
        fontWeight: 500,
        padding: "14px 16px",
        whiteSpace: "nowrap",
        /* height: "10rem", */
        border: "0.3rem solid",
        borderColor: "primary.1800",
        bg: "primary.1800",
        /* boxShadow: `5px 8px 30px ${hexToRgba(
          theme.colors.primary[100],
          "0.5"
        )}`, */
        outline: "none",
        "&:active, &:hover": {
          bg: "white",
          color: "primary.1800",
        },
        "&:focus": {
          bg: "white",
          color: "primary.1800",
          outline: "none",
        },
      },
      secondary: {
        color: theme.colors.primary[1800],
        
        /* fontFamily: "primary", */
        /* fontSize: ["1.6rem", "1.6rem", "1.6rem", "1.8rem"], */
        borderRadius: "1rem",
        cursor: "pointer",
        transition: "all .3s",
        /* fontWeight: 500, */
        padding: "14px 16px",
        whiteSpace: "nowrap",
        /* height: "4.8rem", */
        border: ".3rem solid",
        borderColor: "primary.1800",
        bg: "primary.1900",
        outline: "none",
        /* "&:active, &:hover": {
          bg: "white",
          color: theme.colors.primary[100],
        }, */
        // "&:focus": {
        //   bg: "white",
        //   color: theme.colors.primary[100],
        //   outline: "none",
        // },
      },
      blue: {
        color: "white",
        fontFamily: "primary",
        fontSize: ["1.6rem", "1.6rem", "1.6rem", "1.8rem"],
        borderRadius: "5rem",
        cursor: "pointer",
        transition: "all .3s",
        fontWeight: 500,
        padding: "10px 32px",
        whiteSpace: "nowrap",
        height: "4.8rem",
        border: "1px solid #4275FA",
        bg: "#4275FA",
        outline: "none",
        "&:active, &:hover": {
          bg: "#4275FA",
          color: "white",
        },
        "&:focus": {
          bg: "#4275FA",
          color: "white",
          outline: "none",
        },
      },
    },
  })}
  &[disabled] {
    color: "grey.500";
    background-color: "grey.600";
    cursor: not-allowed;
  }
`;

export const Button = ({
  disabled,
  loading,
  children,
  variant: v = "primary",
  onClick,
  showAsyncLoad,
  fontWeight,
  classes,
  fontSize,
  label,
  ...rest
}) => {
  const [asyncLoading, setLoading] = useState(false);
  const onClickHandler = useCallback(
    async (...arg) => {
      setLoading(true);
      try {
        await onClick?.(arg);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    },
    [onClick]
  );

  return (
    <ButtonBase
      variant={v}
      as="button"
      color="white"
      {...rest}
      onClick={onClickHandler}
      disabled={disabled || loading || (showAsyncLoad && asyncLoading)}
      overflow="hidden"
      className={classes}
    >
      {(loading || (showAsyncLoad && asyncLoading)) && (
        <Flex
          left={0}
          right={0}
          position="absolute"
          justifyContent="center"
          alignItems="center"
          fontSize={2}
          height="15px"
          width="15px"
          mx="auto"
        >
          <Loader loading />
        </Flex>
      )}
      {label ? (
        <Text
          color="inherit"
          opacity={loading || (showAsyncLoad && asyncLoading) ? 0 : 1}
          id={label}
          fontSize={fontSize}
          fontWeight={fontWeight}
        />
      ) : (
        <Text
          color="inherit"
          opacity={loading || (showAsyncLoad && asyncLoading) ? 0 : 1}
          fontSize={fontSize}
          fontWeight={fontWeight}
        >
          {children}
        </Text>
      )}
    </ButtonBase>
  );
};

Button.defaultProps = {
  as: "button",
  width: "100%",
  fontSize: "1.6rem",
};

Button.propTypes = {
  as: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
