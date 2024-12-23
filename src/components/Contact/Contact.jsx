import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
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
import toast from "react-hot-toast";

const Contact = () => {
  const [disabled, setDisabled] = useState(false);
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
      toast.error("Please fill all the fields.");
      return;
    }

    if (!isValidEmail(fromEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setDisabled(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          toast.success("Email sent successfully!");
          form.current.reset();
          setDisabled(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container id="contact">
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
          <ContactButton
            type="submit"
            value={disabled ? "Sending..." : "Send"}
            disabled={disabled}
          ></ContactButton>
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
