import React from "react";
import Modal from "react-modal";
import { Box, Button, Flex, Text } from "atoms";
import MemoCloseIcon from "public/assets/icons/CloseIcon";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import MemoRightArrow from "public/assets/icons/RightArrow";

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

export const DownloadModal = ({ isOpen, onRequestClose }) => {
  const onSubmit = "";
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
          p={{ xs: "5rem 2rem 3rem 2rem", md: "6rem 3rem 4rem 3rem" }}
          width={{ xs: "33rem", lg: "50rem" }}
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

          <Box>
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

                  <Box mt="3rem">
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
                </Form>
              )}
            </Formik>

            <Button
              onClick={() => download()}
              variant="primary"
              mt="4rem"
              width="100%"
            >
              <Flex alignItems="center" justifyContent="space-between">
                <Box textAlign="left">
                  <Text
                    fontSize={{ xs: "2.4rem", md: "3.1rem" }}
                    fontFamily="primaryBlack"
                  >
                    DOWNLOAD
                  </Text>

                  <Text
                    fontSize={{ xs: "1.5rem", md: "1.9rem" }}
                    fontFamily="primaryRegular"
                    fontStyle="italic"
                  >
                    (Program Brochure & Schedule)
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
          </Box>
        </Box>
      </Modal>
    </>
  );
};

{
  /* <>
<script src="https://code.jquery.com/jquery-migrate-3.4.0.min.js" integrity="sha256-mBCu5+bVfYzOqpYyK4jm30ZxAZRomuErKEFJFIyrwvM=" crossorigin="anonymous"></script>
<script>
    
    function download() {   
        fullName=document.getElementById("fullName").value();
        var phone=$('#phone').val();
        $.ajax({
            url: "https://kashishyoga.com/skipper/api_pdfDownloadData.php?fullName="+fullName+"&phone="+phone,
            type: "post",
            success: function(data){
               alert('Thank You');
            }
        });
      } 
</script>
</> */
}