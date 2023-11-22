import React, { useState } from "react";
import "./Contact.css";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  function validateForm(event) {
    event.preventDefault();
    let errorFlag = false;
    const newErrors = { ...errors };

    if (name.trim() === "") {
      newErrors.name = "Name cannot be blank";
      errorFlag = true;
    } else {
      newErrors.name = "";
    }

    if (!emailIsValid(email)) {
      newErrors.email = "Invalid email address";
      errorFlag = true;
    } else {
      newErrors.email = "";
    }

    if (message.trim() === "") {
      newErrors.message = "Please enter a valid message";
      errorFlag = true;
    } else {
      newErrors.message = "";
    }

    if (!errorFlag) {
      setSuccessMessage("Success!!");
      // Perform action on successful form submission
    }

    setErrors({ ...newErrors });
  }

  function clearMessages() {
    setErrors({
      name: "",
      email: "",
      message: "",
    });
    setSuccessMessage("");
  }

  function emailIsValid(email) {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }

  return (
    <section className="contact" id="contact">
      <div id="overlay-contact">
        <form onSubmit={validateForm}>
          <h1>Contact Us</h1>
          <div className="innercontent">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <small className="error">{errors.name}</small>

            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small className="error">{errors.email}</small>

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <small className="error">{errors.message}</small>
          </div>

          <div className="center">
            <input className="submit" type="submit" value="Send Message" />
            <p id="success">{successMessage}</p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
