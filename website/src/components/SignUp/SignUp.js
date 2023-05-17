import React, { useState } from 'react';
import './SignUp.css';
import useAuth from '../auth/useAuth.js';

const SignUp = () => {
  const { ownSignup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    await ownSignup(email, password);
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
