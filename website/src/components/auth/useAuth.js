import { useAuth0 } from '@auth0/auth0-react';

const useAuth = () => {
  const { isLoading, error, isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

  if (error) {
    console.error('Error in Auth0:', error);
  }

  return {
    isLoading,
    isAuthenticated,
    user,
    login: loginWithRedirect,
    logout
  };
};

export default useAuth;
