import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const useAuth = () => {
  const { isLoading, error, isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

  const ownLogin = async (email, password) => {
    try {
      const response = await axios.post('/api/login', {
        email: email,
        password: password
      });
      if (response.status === 200) {
        // handle successful login, e.g. set own user info or token
      } else {
        // handle unsuccessful login
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Error in own login:', error);
    }
  };

  return {
    isLoading,
    isAuthenticated,
    user,
    login: loginWithRedirect,
    ownLogin,
    logout
  };
};

export default useAuth;

