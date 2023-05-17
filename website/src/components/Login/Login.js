import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import useAuth from '../auth/useAuth.js';

const Login = () => {
  const { login, ownLogin, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleAuth0Login = async () => {
    await login();
  };

  const handleOwnLogin = async (e) => {
    e.preventDefault();
    await ownLogin(email, password);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Login</h1>
        <p>Please log in to access your account.</p>
        <form onSubmit={handleOwnLogin}>
          <input 
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <button className="auth-button" onClick={handleAuth0Login}>
          Login with Auth0
        </button>
      </div>
    </div>
  );
};

export default Login;
