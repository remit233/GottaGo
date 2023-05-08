import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import useAuth from '../auth/useAuth';

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async () => {
    await login();
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Login</h1>
        <p>Please log in to access your account.</p>
        <button className="login-button" onClick={handleLogin}>
          Login with Auth0
        </button>
      </div>
    </div>
  );
};

export default Login;
