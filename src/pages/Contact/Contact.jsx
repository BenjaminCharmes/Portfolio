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

  const emptyTextMessage =
    appState.language === "english"
      ? "This field is required"
      : "Ce champ est requis";

  const [email, setEmail] = useState("");
  const [emptyEmail, setEmptyEmail] = useState(null);

  const [subject, setSubject] = useState("");
  const [emptySubject, setEmptySubject] = useState(null);

  const [message, setMessage] = useState("");
  const [emptyMessage, setEmptyMessage] = useState(null);

  const [messageSend, setMessageSend] = useState(null);
  const [messageNotSend, setMessageNotSend] = useState(null);

  const formData = {
    email: email,
    subject: subject,
    message: message,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessageSend(null);
    setMessageNotSend(null);

    if (!email || !subject || !message) {
      if (!email) {
        setEmptyEmail(emptyTextMessage);
      }
      if (!subject) {
        setEmptySubject(emptyTextMessage);
      }
      if (!message) {
        setEmptyMessage(emptyTextMessage);
      }
      return;
    }

    const formData = {
      email: email,
      subject: subject,
      message: message,
    };

    axios
      .post("https://benjamin-charmes-api.onrender.com/send-email", formData)
      .then((response) => {
        setMessageSend(true);
      })
      .catch((error) => {
        setMessageNotSend(true);
      });

    setEmail("");
    setSubject("");
    setMessage("");
    setEmptyEmail(null);
    setEmptySubject(null);
    setEmptyMessage(null);
  };

  return appState.language === "english" ? (
    <div className='form-container'>
      {messageSend && (
        <div className={`success-message ${appState.theme}`}>
          Message sent successfully!
        </div>
      )}
      {messageNotSend && (
        <div className={`error-message ${appState.theme}`}>
          An error occurred while sending the message.
          <br />
          <div className='second-line'>
            Try again or contact me at:{" "}
            <a className='email-link' href='mailto:benjamin.charmes@gmail.com'>
              benjamin.charmes@gmail.com
            </a>
          </div>
        </div>
      )}
      <form className={`${appState.theme}`} onSubmit={handleSubmit}>
        <div className='sub-container'>
          <label htmlFor='email'>Email :</label>
          <input
            className={`${appState.theme}`}
            type='email'
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emptyEmail ? <p className='empty-message'>{emptyEmail}</p> : null}
        </div>
        <div className='sub-container'>
          <label htmlFor='subject'>Subject :</label>
          <input
            className={`${appState.theme}`}
            type='text'
            id='subject'
            placeholder='Enter your subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          {emptySubject ? (
            <p className='empty-message'>{emptySubject}</p>
          ) : null}
        </div>
        <div className='sub-container'>
          <label htmlFor='message'>Message :</label>
          <textarea
            className={`${appState.theme}`}
            id='message'
            value={message}
            placeholder='Enter your message'
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {emptyMessage ? (
            <p className='empty-message'>{emptyMessage}</p>
          ) : null}
        </div>
        <div className='form-button'>
          <ButtonLight text={"Send"} onClick={handleSubmit} />
        </div>
      </form>
    </div>
  ) : (
    <div className='form-container'>
      {messageSend && (
        <div className={`success-message ${appState.theme}`}>
          Message envoyé avec succès !
        </div>
      )}
      {messageNotSend && (
        <div className={`error-message ${appState.theme}`}>
          Une erreur s'est produite lors de l'envoi du message.
          <br />
          <div className='second-line'>
            Réessayez ou contactez-moi à:{" "}
            <a className='email-link' href='mailto:benjamin.charmes@gmail.com'>
              benjamin.charmes@gmail.com
            </a>
          </div>
        </div>
      )}
      <form className={`${appState.theme}`} onSubmit={handleSubmit}>
        <div className='sub-container'>
          <label htmlFor='email'>Email :</label>
          <input
            className={`${appState.theme}`}
            type='email'
            id='email'
            placeholder='Saisissez votre e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emptyEmail ? <p className='empty-message'>{emptyEmail}</p> : null}
        </div>
        <div className='sub-container'>
          <label htmlFor='subject'>Objet :</label>
          <input
            className={`${appState.theme}`}
            type='text'
            id='subject'
            placeholder='Saisissez votre objet'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          {emptySubject ? (
            <p className='empty-message'>{emptySubject}</p>
          ) : null}
        </div>
        <div className='sub-container'>
          <label htmlFor='message'>Message :</label>
          <textarea
            className={`${appState.theme}`}
            id='message'
            value={message}
            placeholder='Saisissez votre message'
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {emptyMessage ? (
            <p className='empty-message'>{emptyMessage}</p>
          ) : null}
        </div>
        <div className='form-button'>
          <ButtonLight text={"Envoyer"} onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Contact;
