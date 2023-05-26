import React, { useState } from "react";
import "../Styles/login.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack, TextField, Button, Box } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
const formValidationSchema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Invalid Email")
    .required("Email is Required"),
  password: yup
    .string()
    .min(6, "Password must be atleast 6 characters")
    .required("Password is Required"),
});

const form2ValidationSchema = yup.object({
  username: yup.string().required("Please enter your name"),
  userpassword: yup.string().required("Password is Required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("userpassword"), null], "Password must match")
    .required("Confirm Password is required"),
});
function Login() {
  const [signin, setSignin] = useState(true);
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onsubmit", values);
    },
  });
  const formiks = useFormik({
    initialValues: { username: "", userpassword: "", confirmpassword: "" },
    validationSchema: form2ValidationSchema,
    onSubmit: (values) => {
      console.log("onsubmit", values);
    },
  });
  return (
    <div className="body">
      <Box className="container">
        <div className="form-container signup-container">
          <form onSubmit={formik.handleSubmit}>
            <h1>Create Account</h1>
            <Stack spacing={3} direction="row">
              <FacebookIcon />
              <GoogleIcon />
              <LinkedInIcon />
            </Stack>
            <p>Register with your E-mail ID</p>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="standard"
              color="secondary"
              sx={{ width: "80%" }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.touched.name && !!formik.errors.name}
              helperText={formik.touched.name && formik.errors.name ? formik.errors.name : ""}
            />
            <TextField
              id="email"
              name="email"
              label="E-mail"
              variant="standard"
              type="email"
              color="secondary"
              sx={{ width: "80%" }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              variant="standard"
              type="password"
              color="secondary"
              sx={{ width: "80%" }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.touched.password && !!formik.errors.password}
              helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ""}
            />
            <button className="sign-button" type="submit">
              Sign-Up
            </button>
          </form>
        </div>
        <div className="form-container signin-container">
          <form onSubmit={formiks.handleSubmit}>
            <h1>Sign-In</h1>
            <Stack spacing={3} direction="row">
              <FacebookIcon />
              <GoogleIcon />
              <LinkedInIcon />
            </Stack>
            <p>Register with your Account</p>
            <TextField
              id="username"
              name="username"
              label="Name"
              variant="standard"
              type="text"
              color="secondary"
              sx={{ width: "80%" }}
              onChange={formiks.handleChange}
              onBlur={formiks.handleBlur}
              error={!!formiks.touched.username && !!formiks.errors.username}
              helperText={formiks.touched.username && formiks.errors.username ? formiks.errors.username : ""}
            />
            <TextField
              id="userpassword"
              name="userpassword"
              label="Password"
              variant="standard"
              type="password"
              color="secondary"
              sx={{ width: "80%" }}
              onChange={formiks.handleChange}
              onBlur={formiks.handleBlur}
              error={!!formiks.touched.userpassword && !!formiks.errors.userpassword}
              helperText={
                formiks.touched.userpassword && formiks.errors.userpassword ? formiks.errors.userpassword : ""
              }
            />
            <TextField
              id="confirmpassword"
              name="confirmpassword"
              label="Confirm Password"
              variant="standard"
              type="password"
              color="secondary"
              sx={{ width: "80%" }}
              onChange={formiks.handleChange}
              onBlur={formiks.handleBlur}
              error={!!formiks.touched.confirmpassword && !!formiks.errors.confirmpassword}
              helperText={
                formiks.touched.confirmpassword && formiks.errors.confirmpassword ? formiks.errors.confirmpassword : ""
              }
            />
            <button className="sign-button" type="submit">
              Sign-In
            </button>
          </form>
        </div>
        <div className="overlay-container" style={signin ? { right: "50%" } : { left: "50%" }}>
          <div className="overlay" style={signin ? { left: "-100%" } : {}}>
            {signin ? (
              <div className="overlay-panel overlay-right">
                <h1>Welcome to RENTLY</h1>
                <p>Rent Shoot Repeat</p>
                <button className="btn press" onClick={() => setSignin(!signin)}>
                  Sign-Up
                </button>
              </div>
            ) : (
              <div className="overlay-panel overlay-left">
                <h1>Welcome to RENTLY</h1>
                <p>Rent Shoot Repeat</p>
                <Button className="btn press" onClick={() => setSignin(!signin)}>
                  Sign-In
                </Button>
              </div>
            )}
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Login;
