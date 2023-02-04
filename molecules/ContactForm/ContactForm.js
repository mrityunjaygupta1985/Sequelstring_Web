import React, { useState } from "react";
import { Box, Text, Button, Grid, Flex, FormText, Description } from "atoms";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import axios from "axios";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { Controls, Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";

import Link from "next/link";

import MemoPhone from "public/assets/icons/Phone";
import MemoMail from "public/assets/icons/Mail";
import MemoLocation from "public/assets/icons/Location";

const BoxStyleFirst = styled(Box)`
  @media only screen and (min-device-width: 800px) and (max-device-width: 1024px) {
    svg {
      width: 25rem !important;
      height: 25.6rem !important;
    }
  }
`;

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

export const ContactForm = () => {
  const [open, setOpen] = useState(false);

  const [addNum, setAddNum] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const companyName = event.target.companyName.value;
    const phone = event.target.phone.value;
    const emailId = event.target.emailId.value;
    const data = { firstName, lastName, companyName, phone, emailId };
    axios
      .post("http://abhisheks.pythonanywhere.com/data/", data)
      .then((response) => {
        console.log(response);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const onSubmit = "";
  // const onSubmit = async (values, { resetForm, setSubmitting }) => {
  //   try {
  //     await axios
  //       .post(
  //         `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/localhost:8000/post/`,
  //         {
  //           data: {
  //             first_name: values?.firstName,
  //             last_name: values?.lastName,
  //             email: values.emailId,
  //             phone_number: values?.phone,
  //             company_name: values?.companyName,
  //             demo_name: slug,
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         if (res.status === 200) {
  //           axios
  //             .post(
  //               `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/localhost:8000/post/`,
  //               {
  //                 subject: `Request Form Query Received for ${slug}`,
  //                 html: `<p>Hi, Received your query, <br> Name: ${values?.firstName} ${values?.lastName} <br> Email: ${values?.email} <br>Company: ${values.company} <br>Phone: ${values.phone} </p>`,
  //               }
  //             )
  //             .then((res) => {
  //               if (res.status === 200) {
  //                 setSuccess(true);
  //               }
  //             });
  //         }
  //       });
  //     resetForm();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <>
      <Box
        m={{
          xs: "4rem 2.4rem",
          md: "5rem 4rem",
          xm: "5rem 6rem",
          lg: "5rem 12rem",
        }}
        maxWidth={{ lg: "100%", xl: "144rem" }}
        mx={{ xl: "auto" }}
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
                alignItems="center"
              >
                {/* <ContactInfo /> */}
                {/* desktop */}
                <Box display={{ md: "none" }}>
                  <BoxStyleFirst
                    mx="auto"
                    width={{
                      xs: "25rem",
                      lg: "35rem",
                    }}
                    height={{
                      xs: "25.6rem",
                      lg: "35.9rem",
                    }}
                  >
                    <Player
                      autoplay
                      loop
                      src="/images/emailbox.json"
                      objectfit="contain"
                    >
                      <Controls visible={false} />
                    </Player>
                  </BoxStyleFirst>
                </Box>
                {/* First Name */}
                <Box
                  border="0.1rem solid"
                  borderColor="primary.800"
                  borderRadius={{ xs: "2rem", md: "3rem" }}
                  p={{ xs: "2rem 1.5rem", md: "2rem 3rem" }}
                >
                  <Text
                    fontSize={{ xs: "2.4rem", md: "3rem", lg: "3.6rem" }}
                    fontWeight="700"
                    color="primary.1800"
                    mb="2rem"
                  >
                    Get in touch with us
                  </Text>
                  <Grid
                    gridTemplateColumns={{ xm: "1fr 1fr" }}
                    gridColumnGap="2rem"
                  >
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
                    <Box mt={{ xs: "2.5rem", xm: "unset" }}>
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
                  </Grid>

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
                    // onClick={() => setOpen(true)}
                    type="button"
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

                {/* Right side box */}
                <Box mt={{ md: "-2rem" }}>
                  {/* desktop */}
                  <Box display={{ xs: "none", md: "block" }}>
                    <BoxStyleFirst
                      mx="auto"
                      width={{
                        xs: "25rem",
                        lg: "35rem",
                      }}
                      height={{
                        xs: "25.6rem",
                        lg: "35.9rem",
                      }}
                    >
                      <Player
                        autoplay
                        loop
                        src="/images/emailbox.json"
                        objectfit="contain"
                      >
                        <Controls visible={false} />
                      </Player>
                    </BoxStyleFirst>
                  </Box>

                  <Text
                    fontSize={{ xs: "2rem", lg: "2.2rem" }}
                    fontWeight="700"
                    ml="4rem"
                  >
                    India
                  </Text>

                  <Grid gridTemplateColumns="4rem 1fr" mt="1rem">
                    <Box mt=".5rem" color="primary.1800">
                      <MemoLocation width="2.2rem" height="2.8rem" />
                    </Box>
                    <Box>
                      <Description
                        fontWeight="500"
                        Description="R&D Innovation Lab"
                      />
                      <Description Description="Don Bosco Institute Of Technology" />
                      <Description Description="Premier Automobiles Road Opp. HDIL Premier Exotica, Kurla, w, Maharashtra 400070" />
                    </Box>
                  </Grid>
                  <Grid gridTemplateColumns="4rem 1fr" mt="1rem">
                    <Box mt=".5rem" color="primary.1800">
                      <MemoLocation width="2.2rem" height="2.8rem" />
                    </Box>
                    <Box>
                      <Description Description="House No. 90 Basement, New Manglapuri, Opposite Metro Pillar No. 51, New Delhi, 110030" />
                    </Box>
                  </Grid>

                  <Text
                    fontSize={{ xs: "2rem", lg: "2.2rem" }}
                    fontWeight="700"
                    ml="4rem"
                    mt="2rem"
                  >
                    United States
                  </Text>

                  <Grid gridTemplateColumns="4rem 1fr" mt="1rem">
                    <Box mt=".5rem" color="primary.1800">
                      <MemoLocation width="2.2rem" height="2.8rem" />
                    </Box>
                    <Box>
                      <Description Description="12 N route 17 suite 201 Paramus NJ 07652" />
                    </Box>
                  </Grid>

                  <Link href="tel:+91-8448447751">
                    <a>
                      <Grid
                        gridTemplateColumns="4rem 1fr"
                        mt="2rem"
                        alignItems="center"
                        cursor="pointer"
                      >
                        <Box color="primary.1800">
                          <MemoPhone width="2rem" height="2rem" />
                        </Box>
                        <Description Description="+91-8448447751" />
                      </Grid>
                    </a>
                  </Link>

                  <Link href="mailto:info@sequelstring.com">
                    <a>
                      <Grid
                        gridTemplateColumns="4rem auto"
                        mt="2rem"
                        alignItems="center"
                        cursor="pointer"
                      >
                        <Box color="primary.1800">
                          <MemoMail width="2.3rem" height="1.8rem" />
                        </Box>

                        <Text
                          fontSize={{ xs: "1.8rem", md: "2rem" }}
                          lineHeight={{ xs: "2.4rem", md: "2.8rem" }}
                        >
                          info@sequelstring.com
                        </Text>
                      </Grid>
                    </a>
                  </Link>
                </Box>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};
