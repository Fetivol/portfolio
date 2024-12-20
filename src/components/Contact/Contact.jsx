import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import {
  ContactButton,
  ContactForm,
  ContactInput,
  ContactInputMessage,
  ContactTitle,
  Container,
  Desc,
  Title,
  Wrapper,
} from "./Contact.styled";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [formError, setFormError] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const fromEmail = formData.get("from_email");
    const fromName = formData.get("from_name");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (!fromEmail || !fromName || !subject || !message) {
      setFormError("Please fill all the fields.");
      return;
    }

    if (!isValidEmail(fromEmail)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setOpen(true);
          setFormError("");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send"></ContactButton>
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
        <Snackbar
          open={!!formError}
          autoHideDuration={6000}
          onClose={() => setFormError("")}
          message={formError}
          severity="error"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
