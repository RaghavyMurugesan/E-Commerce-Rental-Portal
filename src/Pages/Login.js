import React from "react";
import "../Styles/login.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack, TextField, Button, Box } from "@mui/material";
function Login() {
  return (
    <div className="body">
      <Box className="container">
        <div className="form-container signup-container">
          <form action="#">
            <h2>Create Account</h2>
            <Stack spacing={3} direction="row">
              <FacebookIcon />
              <GoogleIcon />
              <LinkedInIcon />
            </Stack>
            <p>Register with your E-mail ID</p>
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              type="text"
              color="secondary"
              sx={{ width: "80%" }}
            />
            <TextField
              id="standard-basic"
              label="E-mail"
              variant="standard"
              type="email"
              color="secondary"
              sx={{ width: "80%" }}
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
              color="secondary"
              sx={{ width: "80%" }}
            />
            <button className="sign-button">Sign-Up</button>
          </form>
        </div>
        <div className="form-container signin-container">
          <form action="#">
            <h2>Sign-In</h2>
            <Stack spacing={3} direction="row">
              <FacebookIcon />
              <GoogleIcon />
              <LinkedInIcon />
            </Stack>
            <p>Register with your Account</p>
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              type="text"
              color="secondary"
              sx={{ width: "80%" }}
            />
            <TextField
              id="standard-basic"
              label="E-mail"
              variant="standard"
              type="email"
              color="secondary"
              sx={{ width: "80%" }}
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
              color="secondary"
              sx={{ width: "80%" }}
            />
            <button className="sign-button">Sign-In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome to RENTLY</h1>
              <p>Rent Shoot Repeat</p>
              <button className="press">Sign-In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome to RENTLY</h1>
              <p>Rent Shoot Repeat</p>
              <Button>Sign-Up</Button>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Login;
