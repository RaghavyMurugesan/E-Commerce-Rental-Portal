import React from "react";
import "../Styles/contact.css";
import { TextField, Button, Stack } from "@mui/material";

function Contact() {
  return (
    <section>
      <div className="contact-container">
        <div className="contactInfo">
          <div>
            {" "}
            <h1>Contact Us</h1>
            <ul className="info">
              <li>
                <span> </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="contactForm">
          {/*<Stack direction="column" spacing={2} justifyContent="space-evenly">
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            fullwidth
          />
          <TextField
            id="standard-basic"
            label="abc@gmail.com"
            variant="standard"
            type="email"
            fullwidth
          />
          <TextField
            id="standard-basic"
            label="+91-123456789"
            variant="standard"
            type="number"
            fullwidth
          />
          <TextField
            id="standard-multiline-static"
            label="Tell Us..."
            variant="standard"
            type="text"
            rows={4}
            fullwidth
          />
        </Stack>
        <Button color="secondary" variant="outlined">
          Send Message
        </Button> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
