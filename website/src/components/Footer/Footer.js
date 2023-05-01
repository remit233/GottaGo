// Footer.js
import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission, send data to backend or email service
    console.log('Name:', name);
    console.log('Message:', message);
    console.log('Email:', email);
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <form className="email-form" onSubmit={handleSubmit}>
          <label className="email-form-label">
            Name:
            <input
              type="text"
              placeholder="name"
              className="email-form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="email-form-label" id="message">
            Message:
            <input
              type="text"
              placeholder="message"
              className="email-form-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <label className="email-form-label">
            Email:
            <input
              type="text"
              placeholder="email"
              className="email-form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <div className="socials">
          <ul className="social-ul">
            {/* Add your social links here */}
          </ul>
        </div>
      </div>
    </div>
  );
}
