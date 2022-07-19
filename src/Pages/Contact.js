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
function Contact() {
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
            alignItems="center"
          >
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
          <Stack className="formInput">
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
              sx={{ width: { xs: "100%", sm: "45%", md: "45%" } }}
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              sx={{ width: { xs: "100%", sm: "45%", md: "45%" } }}
            />
            <TextField
              id="standard-basic"
              label="abc@gmail.com"
              variant="standard"
              type="email"
              sx={{ width: { xs: "100%", sm: "45%", md: "45%" } }}
            />
            <TextField
              id="standard-basic"
              label="+91-123456789"
              variant="standard"
              type="text"
              sx={{ width: { xs: "100%", sm: "45%", md: "45%" } }}
            />
            <TextField
              id="standard-multiline-static"
              label="Message"
              multiline
              rows={3}
              variant="standard"
              sx={{ width: { xs: "100%", sm: "92%", md: "92%" } }}
            />
            <div className="message">
              <Button color="secondary" variant="outlined">
                Send Message
              </Button>
            </div>
          </Stack>
        </div>
      </div>
    </section>
  );
}
export default Contact;
