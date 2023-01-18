import React, { useState } from "react";
import { Box, Text, Button, Grid, Flex, FormText } from "atoms";
import Image from "next/image";
import Select from "react-select";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import MemoRightArrow from "public/assets/icons/RightArrow";
import Link from "next/link";
import { OurTeamModal } from "molecules/Modals";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import MemoLinkedin from "public/assets/icons/Linkedin";
import MemoTwitter from "public/assets/icons/Twitter";
import { ContactInfo } from "molecules/ContactInfo";

const customStyle = {
  control: (provided) => ({
    ...provided,
    border: "1px solid #c4c4c4",
    color: "#3d3d3d",
    fontSize: "1.8rem",
    fontFamily: "consola",
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
    fontFamily: "consola",
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
  firstName: Yup.string()
    .required("First Name is Required")
    .max(50, "Max 50 characters allowed"),

  lastName: Yup.string()
    .required("Last Name is Required")
    .max(50, "Max 50 characters allowed"),

  // phone: Yup.number()
  //   .typeError("You must specify a number")
  //   .min(10, "Min value 10.")
  //   .max(15, "Max value 15.")
  //   .required("Phone number is Required"),

  phone: Yup.string()
    .required("Phone number is Required")
    .matches(phoneRegExp, "Phone number is not valid"),

  emailId: Yup.string()
    .email("Invalid format")
    .required("Email is Required")
    .max(100, "Max 100 characters allowed")
    .min(3, "Min 3 characters required"),
});

const renderCountrySelect = ({ placeholder, field, form }) => {
  return (
    <PhoneInput
      country="in"
      placeholder={placeholder}
      inputProps={{
        name: "phone",
        required: true,
      }}
      countryCodeEditable={false}
      alwaysDefaultMask={false}
      onChange={(e) => form.setFieldValue(field.name, e)}
      key={field.value === undefined}
    />
  );
};

const mealData = [
  { value: "vegan", label: "vegan" },
  { value: "lactose intolerant", label: "lactose intolerant" },
  { value: "jain", label: "jain" },
  { value: "none", label: "none" },
];

export const RequestDemo = () => {
  const [open, setOpen] = useState(false);

  const [addNum, setAddNum] = useState(0);

  const onSubmit = "";

  return (
    <>
      <Box
        m={{
          xs: "4rem 2.4rem",
          md: "5rem 4rem",
          xm: "5rem 6rem",
          lg: "5rem 12rem",
        }}
      >
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            companyName: "",
            phone: "",
            emailId: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form>
              <Grid
                gridTemplateColumns={{ xm: "1fr 1fr" }}
                gridColumnGap={{ xs: "2.5rem", xm: "6rem", lg: "8rem" }}
                gridRowGap={{ xs: "2.5rem", xm: "3rem" }}
                bg="white"
                overflow="hidden"
              >
                <ContactInfo />

                {/* First Name */}
                <Box>
                  <Box>
                    <FormText text="First Name" stric />
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      className="profile-input"
                    />
                    {errors.firstName && touched.firstName ? (
                      <Box top="0rem" left="0rem">
                        <Text
                          fontSize="1.4rem"
                          color="primary.1600"
                          position="absolute"
                        >
                          {errors.firstName}
                        </Text>
                      </Box>
                    ) : null}
                  </Box>

                  {/* Last Name */}
                  <Box mt="2.5rem">
                    <FormText text="Last Name" stric />
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      className="profile-input"
                    />
                    {errors.lastName && touched.lastName ? (
                      <Box top="0rem" left="0rem">
                        <Text
                          fontSize="1.4rem"
                          color="primary.1600"
                          position="absolute"
                        >
                          {errors.lastName}
                        </Text>
                      </Box>
                    ) : null}
                  </Box>

                  {/* Email */}
                  <Box mt="2.5rem">
                    <FormText text="Email Id" stric />
                    <Field
                      type="text"
                      id="emailId"
                      name="emailId"
                      placeholder="Email Id"
                      className="profile-input"
                    />
                    {errors.emailId && touched.emailId ? (
                      <Box top="0rem" left="0rem">
                        <Text
                          fontSize="1.4rem"
                          color="primary.1600"
                          position="absolute"
                        >
                          {errors.emailId}
                        </Text>
                      </Box>
                    ) : null}
                  </Box>

                  {/* Phone Number */}
                  <Box mt="2.5rem">
                    <FormText text="Phone Number" stric />
                    <Field
                      type="text"
                      name="phone"
                      placeholder="Phone Number*"
                      component={renderCountrySelect}
                      className="contact-input"
                    />
                    {errors.phone && touched.phone ? (
                      <Box top="0rem" left="0rem">
                        <Text
                          fontSize="1.4rem"
                          color="primary.1600"
                          position="absolute"
                        >
                          {errors.phone}
                        </Text>
                      </Box>
                    ) : null}
                  </Box>

                  <Box mt="2.5rem">
                    <FormText text="Company Name" />
                    <Field
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="Company Name"
                      className="profile-input"
                    />
                    {errors.companyName && touched.companyName ? (
                      <Box top="0rem" left="0rem">
                        <Text
                          fontSize="1.4rem"
                          color="primary.1600"
                          position="absolute"
                        >
                          {errors.companyName}
                        </Text>
                      </Box>
                    ) : null}
                  </Box>

                  <Button
                    mt="3rem"
                    variant="primary"
                    onClick={() => setOpen(true)}
                    width={{ xs: "100%", lg: "100%" }}
                  >
                    <Flex alignItems="center" justifyContent="center">
                      <Text
                        fontSize={{ xs: "2rem", md: "2.4rem" }}
                        fontWeight="500"
                      >
                        Submit
                      </Text>
                    </Flex>
                  </Button>
                </Box>
              </Grid>

              {/* select Field */}

              {/* <Grid
                mt="3rem"
                gridTemplateColumns={{ md: "1fr 1fr" }}
                gridGap={{ xs: "2.5rem", md: "3rem" }}
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
              </Grid>  */}
            </Form>
          )}
        </Formik>
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
