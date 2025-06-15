'use client';

import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const clickHandler = (e: React.FormEvent<HTMLFormElement>) => {
    if (email === '' || subject === '') {
      setMessage('Fyll i både email och ärende!');
      setTimeout(() => {
        setMessage('');
      }, 5000);
      return;
    }
    e.preventDefault();
    setMessage(`VI ÅTERKOMMER TILL DIN EMAIL: ${email} MED SVAR PÅ DITT ÄRENDE: ${subject}`);
    setTimeout(() => {
      setMessage('');
    }, 5000);
    setEmail('');
    setSubject('');
  };

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Glabra Trädvård</h1>
        <h2>Din Arborist i Skåne</h2>
        <p>Välkommen till Glabra Trädvård, din lokala arborist i Skåne. Vi erbjuder professionella trädvårdstjänster för att säkerställa att dina träd är friska och välskötta.</p>
        <p>Arborist Göran Vestin</p>
      </div>

      <form className="form-contact" onSubmit={clickHandler}>
        <label
          htmlFor="email">email:</label>

        <input
          type="text"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)} />

        <label
          htmlFor="subject">ärende:</label>

        <textarea
          id="subject"
          rows={10}
          name="subject"
          onChange={(e) => setSubject(e.target.value)} />

        <button
          type="submit">Skicka</button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}
