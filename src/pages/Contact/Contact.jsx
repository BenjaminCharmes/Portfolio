// React
import React, { useState } from "react";

// SCSS
import "./Contact.scss";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer les données du formulaire où vous le souhaitez (par exemple, en utilisant une requête HTTP)

    // Réinitialiser les champs du formulaire après l'envoi
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <div>NOT WORKING - COMING SOON</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email :</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='subject'>Objet :</label>
          <input
            type='text'
            id='subject'
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
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Envoyer</button>
      </form>
    </>
  );
};

export default Contact;
