// React
import React, { useState } from "react";

// Jotai
import { useAtomValue } from "jotai";
import appStateStore from "../../store/appStateStore";

// Axios
import axios from "axios";

// Components
import ButtonLight from "../../components/Button/ButtonLight/ButtonLight";

// SCSS
import "./Contact.scss";

const Contact = () => {
  const appState = useAtomValue(appStateStore);

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const formData = {
    email: email,
    subject: subject,
    message: message,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      subject: subject,
      message: message,
    };

    console.log(formData);

    axios
      .post("https://benjamin-charmes-api.onrender.com/send-email", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className='form-container'>
      <form className={`${appState.theme}`} onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email :</label>
          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='subject'>Subject :</label>
          <input
            type='text'
            id='subject'
            placeholder='Enter your subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='message'>Message :</label>
          <textarea
            id='message'
            value={message}
            placeholder='Enter your message'
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <ButtonLight text={"Envoyer"} onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default Contact;
