'use client';

import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const clickHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(`VI ÅTERKOMMER TILLBAKA TILL DIN EMAIL: ${email} MED SVAR PÅ DITT ÄRENDE: ${subject}`);
    setTimeout(() => {
      setMessage('');
    }, 5000);
    setEmail('');
    setSubject('');
  };

  return (
    <div className="wrapper">
      <div className="header">
      <h1>Tjena Tjena!</h1>
      <p>Så var det med det!</p>
      </div>

      <form className="form-contact" onSubmit={clickHandler}>
        <label htmlFor="email">email:</label>
        <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="subject">ärende:</label>
        <textarea id="subject" rows={10} name="subject" onChange={(e) => setSubject(e.target.value)} />
        <button type="submit">Skicka</button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}
