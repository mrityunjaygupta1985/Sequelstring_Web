import React, { useState } from "react";
import { Box, Text, Button, Grid, Flex } from "atoms";
import Image from "next/image";
import Select from "react-select";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import MemoRightArrow from "public/assets/icons/RightArrow";
import Link from "next/link";
import { OurTeamModal } from "molecules/Modals";

const customStyle = {
  control: (provided) => ({
    ...provided,
    border: "1px solid #c4c4c4",
    color: "#3d3d3d",
    fontSize: "1.8rem",
    fontFamily: "AvenirBook",
    borderRadius: "4px",
    fontWeight: "400",
    boxShadow: "none",
    height: "4.8rem",
    backgroundColor: "white",
    outline: "none",
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "1.8rem",
    fontFamily: "AvenirBook",
    fontWeight: 400,
    outline: "none",
    "&:hover": {
      backgroundColor: "#E7E7E7",
    },
  }),
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  fullName: Yup.string()
    .required("Name is Required")
    .max(50, "Max 50 characters allowed"),

  phone: Yup.number()
    .typeError("You must specify a number")
    .min(10, "Min value 10.")
    .max(15, "Max value 15.")
    .required("Phone number is Required"),
});

const mealData = [
  { value: "vegan", label: "vegan" },
  { value: "lactose intolerant", label: "lactose intolerant" },
  { value: "jain", label: "jain" },
  { value: "none", label: "none" },
];

const preferredData = [
  { value: "02nd December’22", label: "02nd December’22" },
  { value: "05th December’22", label: "05th December’22" },
  { value: "09th December’22", label: "09th December’22" },
  { value: "12th December’22", label: "12th December’22" },
  { value: "16th December’22", label: "16th December’22" },
  { value: "19th December’22", label: "19th December’22" },
  { value: "23rd December’22", label: "23rd December’22" },
  { value: "26th December’22", label: "26th December’22" },
  { value: "30th December’22", label: "30th December’22" },
];

export const ContactForm = () => {
  const [open, setOpen] = useState(false);

  const [addNum, setAddNum] = useState(0);

  const onSubmit = "";

  return (
    <>
      <Box p={{ xs: "4rem 2.8rem", md: "5rem 16rem" }}>
        <Link href="/">
          <a>
            <Box
              width={{ md: "21.4rem" }}
              height={{ md: "3.8rem" }}
              display={{ xs: "none", md: "block" }}
            >
              <Image
                src="/images/logo.svg"
                alt="logo"
                quality={100}
                width={214}
                height={38}
                objectFit="contain"
              />
            </Box>
          </a>
        </Link>

        <Text
          mt={{ xs: "0rem", md: "3rem" }}
          fontSize={{ xs: "2.4rem", md: "4rem" }}
          fontFamily="primaryRegular"
        >
          Fill up your details.
        </Text>

        <Formik
          initialValues={{
            fullName: "",
            device: "yes",
            program: "shanti-1",
            phone: "",
            comingFrom: "",
            meal: "",
            preferred: "",
            checkPricing: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form>
              <Grid
                mt={{ xs: "3rem", md: "4rem" }}
                gridTemplateColumns={{ md: "1fr 1fr" }}
                gridGap={{ xs: "3rem", md: "7.4rem" }}
              >
                {/* First Name */}
                <Box>
                  <Field
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    className="profile-input"
                  />
                  {errors.fullName && touched.fullName ? (
                    <Box top="0rem" left="0rem">
                      <Text
                        fontSize="1.4rem"
                        fontFamily="AvenirBook"
                        color="primary.1600"
                        position="absolute"
                      >
                        {errors.fullName}
                      </Text>
                    </Box>
                  ) : null}
                </Box>

                <Box>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    className="profile-input"
                  />
                  {errors.phone && touched.phone ? (
                    <Box top="0rem" left="0rem">
                      <Text
                        fontSize="1.4rem"
                        color="primary.1600"
                        position="absolute"
                        fontFamily="AvenirBook"
                      >
                        {errors.phone}
                      </Text>
                    </Box>
                  ) : null}
                </Box>
              </Grid>

              {/* WhatsApp */}
              {/* <Text
                mt="3rem"
                fontSize={{ xs: "1.8rem", md: "2.4rem" }}
                fontFamily="AvenirRegular"
              >
                WhatsApp
                <Text
                  as="span"
                  fontSize={{ xs: "1.6rem", md: "2rem" }}
                  color="primary.1600"
                >
                  *
                </Text>
              </Text>
              <Grid
                mt="2.8rem"
                gridTemplateColumns={{ xs: "14rem 1fr", md: "20rem 1fr" }}
              >
                <Flex alignItems="center">
                  <Field
                    className="input-radio"
                    type="radio"
                    label="Yes"
                    name="device"
                    value="yes"
                  />
                  <Text
                    fontSize={{ xs: "1.8rem", md: "2.4rem" }}
                    fontFamily="primaryBook"
                    color="primary.1700"
                  >
                    Yes
                  </Text>
                </Flex>
                <Flex alignItems="center">
                  <Field
                    className="input-radio"
                    type="radio"
                    label="No"
                    name="device"
                    value="no"
                  />
                  <Text
                    fontSize={{ xs: "1.8rem", md: "2.4rem" }}
                    fontFamily="primaryBook"
                    color="primary.1700"
                  >
                    No
                  </Text>
                </Flex>
              </Grid> */}

              {/* Why do you want to join this program   */}
              {/* <Text
                mt="3rem"
                mb="2.8rem"
                fontSize={{ xs: "1.8rem", md: "2.4rem" }}
                fontFamily="AvenirRegular"
              >
                Why do you want to join this program?
              </Text>
              <Grid gridTemplateColumns="4.5rem 1fr" alignItems="center">
                <Field
                  className="input-checkbox"
                  type="checkbox"
                  label="Shanti-1"
                  name="program"
                  value="shanti-1"
                />
                <Text
                  fontSize={{ xs: "1.8rem", md: "2.4rem" }}
                  fontFamily="primaryBook"
                  color="primary.1700"
                >
                  Shanti
                </Text>
              </Grid>

              <Grid
                mt="2rem"
                gridTemplateColumns="4.5rem 1fr"
                alignItems="center"
              >
                <Field
                  className="input-checkbox"
                  type="checkbox"
                  label="Shanti-2"
                  name="program"
                  value="shanti-2"
                />
                <Text
                  fontSize={{ xs: "1.8rem", md: "2.4rem" }}
                  fontFamily="primaryBook"
                  color="primary.1700"
                >
                  Take out what’s troubling inside/ Release emotional and mental
                  baggage
                </Text>
              </Grid>

              <Grid
                mt="2rem"
                gridTemplateColumns="4.5rem 1fr"
                alignItems="center"
              >
                <Field
                  className="input-checkbox"
                  type="checkbox"
                  label="Shanti-3"
                  name="program"
                  value="shanti-3"
                />
                <Text
                  fontSize={{ xs: "1.8rem", md: "2.4rem" }}
                  fontFamily="primaryBook"
                  color="primary.1700"
                >
                  Mentally re-energised
                </Text>
              </Grid>

              <Grid
                mt="2rem"
                gridTemplateColumns="4.5rem 1fr"
                alignItems="center"
              >
                <Field
                  className="input-checkbox"
                  type="checkbox"
                  label="Shanti-4"
                  name="program"
                  value="shanti-4"
                />
                <Text
                  fontSize={{ xs: "1.8rem", md: "2.4rem" }}
                  fontFamily="primaryBook"
                  color="primary.1700"
                >
                  Learn about self/ Meet self
                </Text>
              </Grid>
              <Grid
                mt="2rem"
                gridTemplateColumns="4.5rem 1fr"
                alignItems="center"
              >
                <Field
                  className="input-checkbox"
                  type="checkbox"
                  label="Shanti-5"
                  name="program"
                  value="shanti-5"
                />
                <Text
                  fontSize={{ xs: "1.8rem", md: "2.4rem" }}
                  fontFamily="primaryBook"
                  color="primary.1700"
                >
                  I don’t know I am just coming with an open mind
                </Text>
              </Grid> */}

              {/* Coming From */}
              <Grid
                mt="3rem"
                gridTemplateColumns={{ md: "1fr 1fr" }}
                gridGap={{ xs: "2.5rem", md: "7.4rem" }}
              >
                <Box>
                  <Field
                    type="text"
                    id="comingFrom"
                    name="comingFrom"
                    placeholder="Coming From?"
                    className="profile-input"
                  />
                  {errors.comingFrom && touched.comingFrom ? (
                    <Box top="0rem" left="0rem">
                      <Text
                        fontSize="1.4rem"
                        fontFamily="AvenirBook"
                        color="primary.1600"
                        position="absolute"
                      >
                        {errors.comingFrom}
                      </Text>
                    </Box>
                  ) : null}
                </Box>
              </Grid>

              {/* select Field */}

              <Grid
                mt="3rem"
                gridTemplateColumns={{ md: "1fr 1fr" }}
                gridGap={{ xs: "2.5rem", md: "7.4rem" }}
              >
                <Box>
                  <Select
                    placeholder="Special Meal preferences? (if any)"
                    name="meal"
                    options={mealData}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        neutral20: "primary.100",
                        neutral50: "primary.200",
                      },
                    })}
                    styles={customStyle}
                  />
                </Box>
                <Box>
                  <Select
                    name="preferred"
                    placeholder="Preferred Dates?"
                    options={preferredData}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        neutral20: "primary.100",
                        neutral50: "primary.200",
                      },
                    })}
                    styles={customStyle}
                  />
                </Box>
              </Grid>

              {/* How many passes you want */}

              {/* <Grid
                gridTemplateColumns={{ md: "auto 1fr" }}
                mt="3rem"
                alignItems="center"
                gridGap={{ xs: "2rem", md: "6rem" }}
              >
                <Text
                  fontSize={{ xs: "1.8rem", md: "2.4rem" }}
                  fontFamily="primaryBook"
                  color="primary.1700"
                >
                  How many passes you want ?
                </Text>

                <Flex alignItems="center" gridGap="3rem">
                  <Box
                    // p=".5rem .8rem"
                    width="3rem"
                    height="3rem"
                    lineHeight="2.7rem"
                    borderRadius="20rem"
                    border="0.1rem solid"
                    borderColor="primary.200"
                    color="primary.200"
                    textAlign="center"
                    fontFamily="primaryBlack"
                    fontSize="2rem"
                    cursor="pointer"
                    onClick={() => {
                      if (addNum <= 0) setAddNum(addNum);
                      else setAddNum(addNum - 1);
                    }}
                  >
                    &minus;
                  </Box>

                  <Flex
                    width="6rem"
                    height="6rem"
                    borderRadius="2rem"
                    border="0.1rem solid"
                    borderColor="primary.1700"
                    alignItems="center"
                    justifyContent="center"
                    fontFamily="primaryBook"
                    fontSize={{ xs: "1.6rem", md: "2rem" }}
                    color="primary.1700"
                  >
                    {addNum}
                  </Flex>

                  <Box
                    // p=".5rem .8rem"
                    width="3rem"
                    height="3rem"
                    lineHeight="2.7rem"
                    borderRadius="20rem"
                    color="primary.200"
                    border="0.1rem solid"
                    borderColor="primary.200"
                    textAlign="center"
                    fontFamily="primaryBlack"
                    fontSize="2rem"
                    cursor="pointer"
                    onClick={() => {
                      if (addNum <= 9) setAddNum(addNum + 1);
                      else setAddNum(addNum);
                    }}
                  >
                    +
                  </Box>
                </Flex>
              </Grid> */}

              {/* check */}
              {/* <Grid
                mt="3rem"
                gridTemplateColumns="4.5rem 1fr"
                alignItems="center"
              >
                <Field
                  className="input-checkbox"
                  type="checkbox"
                  label="Pricing"
                  name="checkPricing"
                  value="pricing"
                />
                <Text
                  fontSize={{ xs: "1.8rem", md: "2.4rem" }}
                  fontFamily="primaryBook"
                  color="primary.1700"
                >
                  I have gone through the program dates and pricing.
                </Text>
              </Grid> */}
            </Form>
          )}
        </Formik>

        <Grid mt="3rem" gridTemplateColumns={{ md: "auto 1fr" }} gridGap="3rem">
          <Button
            variant="primary"
            onClick={() => setOpen(true)}
            width={{ xs: "100%", lg: "44rem" }}
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Box textAlign="left">
                <Text
                  fontSize={{ xs: "1.5rem", md: "2.1rem" }}
                  fontFamily="primaryBlack"
                >
                  Submit to
                </Text>

                <Text
                  fontSize={{ xs: "1.8rem", md: "2.6rem" }}
                  fontFamily="primaryBlack"
                >
                  GET A CALL BACK
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
          {/* <Button variant="secondary" width={{ xs: "100%", lg: "44rem" }}>
            <Flex alignItems="center" justifyContent="space-between">
              <Box textAlign="left">
                <Text
                  fontSize={{ xs: "1.5rem", md: "2.1rem" }}
                  fontFamily="primaryBlack"
                >
                  Get your pass now
                  <Text
                    as="span"
                    fontSize={{ xs: "1.5rem", md: "2.1rem" }}
                    fontFamily="primaryBlack"
                    color="primary.1600"
                    style={{ fontStyle: "italic" }}
                  >
                    {" "}
                    18 Left
                  </Text>
                </Text>

                <Text
                  fontSize={{ xs: "1.8rem", md: "2.6rem" }}
                  fontFamily="primaryBlack"
                >
                  PAY BOOKING AMOUNT
                </Text>
              </Box>
              <Box
                width={{ xs: "2.5rem", md: "4.5rem" }}
                height={{ xs: "1.3rem", md: "2.2rem" }}
              >
                <MemoRightArrow width="100%" height="100%" />
              </Box>
            </Flex>
          </Button> */}
        </Grid>
      </Box>

      {/* {open && (
        <OurTeamModal
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
          }}
        />
      )} */}
    </>
  );
};
