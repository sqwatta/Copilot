import { useState } from 'react';

export default function FormSubject(){

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
        <form className="form-contact padding" onSubmit={clickHandler}>
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
    )
}