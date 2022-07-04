import React, { useState } from "react";
import "../Styles/login.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack, TextField, Button, Box } from "@mui/material";
function Login() {
  const [signin, setSignin] = useState(true);

  return (
    <div className="body">
      <Box className="container">
        <div className="form-container signup-container">
          <form action="#">
            <h1>Create Account</h1>
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
            <h1 >Sign-In</h1>
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
        <div
          className="overlay-container"
          style={signin ? { right: "50%" } : { left: "50%" }}
        >
          <div className="overlay" style={signin ? { left: "-100%" } : {}}>
            {signin ? (
              <div className="overlay-panel overlay-right">
                <h1>Welcome to RENTLY</h1>
                <p>Rent Shoot Repeat</p>
                <button
                  className="btn press"
                  onClick={() => setSignin(!signin)}
                >
                  Sign-Up
                </button>
              </div>
            ) : (
              <div className="overlay-panel overlay-left">
                <h1>Welcome to RENTLY</h1>
                <p>Rent Shoot Repeat</p>
                <Button
                  className="btn press"
                  onClick={() => setSignin(!signin)}
                >
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
