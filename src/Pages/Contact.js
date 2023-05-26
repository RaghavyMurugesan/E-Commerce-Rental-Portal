import React from "react";
import "../Styles/contact.css";
import { TextField, Button, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useFormik } from "formik";
import * as yup from "yup";
const formValidationSchema = yup.object({
  firstName: yup.string().required("Please enter your First Name"),
  lastName: yup.string().required("Please enter your Last Name"),
  email: yup
    .string()
    .email("Invalid Email")

    .required("Email is required"),
  phone: yup
    .number()
    .required("Please enter your Phone")
    .min(10, "Phone number must be 10 characters"),
  message: yup.string().required("Drop us a line"),
});
function Contact() {
  const formik = useFormik({
    initialValues: { firstName: "", lastName: "", email: "", phone: "", message: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onsubmit", values);
    },
  });
  return (
    <section className="contact-body">
      <div className="contact-container">
        <div className="contactInfo">
          <div className="contactUS">
            <h1 className="contactHead">Contact Us</h1>
            <Stack direction="column" className="info" spacing={2}>
              <p>
                {" "}
                <LocationOnIcon />
                45/63, Gandhi Road, Guindy, <br></br>Chennai-600032
              </p>
              <p>
                {" "}
                <EmailIcon />
                Rently@gmail.com
              </p>
              <p>
                {" "}
                <LocalPhoneIcon />
                +91-123456789
              </p>
            </Stack>
          </div>
          <Stack
            direction={{ xs: "row", sm: "column", md: "row" }}
            spacing={2}
            justifyContent="space-evenly"
            alignItems="center">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <PinterestIcon />
            <LinkedInIcon />
          </Stack>
        </div>
        <div className="contactForm">
          <h1>Get In Touch </h1>
          <p>Drop us a line.</p>
          <p>Lets make some magic together.</p>
          <form onSubmit={formik.handleSubmit}>
            <Stack className="formInput">
              <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                variant="standard"
                sx={{ width: { xs: "100%", sm: "45%", md: "45%" } }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.firstName && formik.errors.firstName}
                helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ""}
              />

              <TextField
                id="lastName"
                name="lastName"
                label="Last Name"
                variant="standard"
                sx={{ width: { xs: "100%", sm: "45%", md: "45%" } }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lastName && formik.errors.lastName}
                helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ""}
              />

              <TextField
                id="email"
                name="email"
                label="abc@gmail.com"
                variant="standard"
                type="email"
                sx={{ width: { xs: "100%", sm: "45%", md: "45%" } }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
              />

              <TextField
                id="phone"
                name="phone"
                label="+91-123456789"
                variant="standard"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ width: { xs: "100%", sm: "45%", md: "45%" } }}
                error={formik.touched.phone && formik.errors.phone}
                helperText={formik.touched.phone && formik.errors.phone ? formik.errors.phone : ""}
              />

              <TextField
                id="message"
                name="message"
                label="Message"
                multiline
                rows={3}
                variant="standard"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ width: { xs: "100%", sm: "92%", md: "92%" } }}
                error={formik.touched.message && formik.errors.message}
                helperText={formik.touched.message && formik.errors.message ? formik.errors.message : ""}
              />

              <div className="message">
                <Button color="secondary" variant="outlined" type="submit">
                  Send Message
                </Button>
              </div>
            </Stack>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
