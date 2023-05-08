import React from 'react';
import './SignUp.css';
import Login from '../Login/Login';
import { useNavigate } from 'react-router-dom';
import useAuth from '../auth/useAuth';

const SignUp = () => {
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
        <h1>Sign up</h1>
        <p>Use Auth0 to Sign up.</p>
        <button className="login-button" onClick={handleLogin}>
          Login with Auth0
        </button>
      </div>
    </div>
  );
};

export default SignUp;
