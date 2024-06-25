import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function NewsletterForm({ label, btnText, btnArrowUrl }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      email: email,
    };

    emailjs.send('960989064', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessage('Subscription successful!');
      }, (error) => {
        console.error('FAILED...', error);
        setMessage('Failed to subscribe. Please try again later.');
      });

    setEmail('');
  };

  return (
    <>
      {label && <p>Your Email</p>}
      <form onSubmit={handleSubmit} className="cs_newsletter_form">
        <input
          type="email"
          className="cs_form_field"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="cs_btn cs_style_1">
          <span>{btnText}</span>
          <i>
            <img src={btnArrowUrl} alt="Icon" />
            <img src={btnArrowUrl} alt="Icon" />
          </i>
        </button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
}
