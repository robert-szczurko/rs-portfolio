import React, { useState } from "react";
import "../css/Contact.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

function Contact() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [emailWarning, setEmailWarning] = useState("email");

  const submitForm = (event) => {
    event.preventDefault();
    validateEmail(emailInput);
  };

  const checkEmail = (emailAdress) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      setEmailWarning("email");
    } else {
      setEmailWarning("email email-incorrect");
    }
  };

  function validateEmail(emailAdress) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      setNameInput("");
      setEmailInput("");
      setMessageInput("");
      setEmailWarning("email");
    } else {
      setEmailWarning("email email-incorrect");
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-top">
        <h1 className="contact-heading">CONTACT</h1>
        <h3>Say Hello</h3>
        <p>
          Submit the form or contact me and I will get back to you as soon as
          possible
        </p>
      </div>
      <div className="contact-bottom">
        <div className="contact-left">
          <form className="contact-form">
            <FormControl>
              <InputLabel>{!nameInput ? "Name*" : "Name"}</InputLabel>
              <Input
                className="form-input"
                value={nameInput}
                onChange={(event) => setNameInput(event.target.value)}
              />
            </FormControl>

            <FormControl>
              <div className={emailWarning}>
                <CancelIcon />
              </div>
              <InputLabel>{!emailInput ? "Email*" : "Email"}</InputLabel>
              <Input
                type="email"
                className="form-input"
                value={emailInput}
                onChange={(event) => {
                  setEmailInput(event.target.value);
                  if (emailWarning === "email email-incorrect") {
                    checkEmail(emailInput);
                    console.log("validating");
                  }
                }}
              />
            </FormControl>
            <textarea
              className="form-input message-input"
              type="text"
              placeholder={!messageInput ? "Message*" : "Message"}
              value={messageInput}
              onChange={(event) => setMessageInput(event.target.value)}
            />
            <Button
              className="form-btn"
              type="submit"
              disabled={!nameInput || !emailInput || !messageInput}
              onClick={submitForm}
              color="primary"
              variant="contained">
              Submit
            </Button>
          </form>
        </div>
        <div className="contact-right">
          <div className="contact-item">
            <h3 className="contact-label">PHONE</h3>
            <p className="contact-info ">Mobile: +61 430 273 662</p>
          </div>
          <div className="contact-item">
            <h3 className="contact-label">EMAIL</h3>
            <p className="contact-info ">robert.szczurko92@gmail.com</p>
          </div>
          <div className="contact-item">
            <h3 className="contact-label">ADDRESS</h3>
            <p className="contact-info ">137 Mckean Street Fitzroy North</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
