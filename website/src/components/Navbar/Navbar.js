import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import useAuth from '../auth/useAuth'

function Navbar() {
  const [renderNavLinks, setRenderNavLinks] = useState(true);
  const { isAuthenticated, login, logout, user } = useAuth();

  const handleWindowResize = () => {
    if (window.innerWidth <= 960) {
      setRenderNavLinks(false);
    } else {
      setRenderNavLinks(true);
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <div className='nav-logo-container'>
          <Link to='/' className='nav-logo'> Gotta Go! </Link>
          <img id='kawaii-toilet' src='./GottaGologo.png'/>
        </div>
        <ul className={renderNavLinks ? 'nav-links':'display-none'}>
        <li className='nav-item'>
            <Link to='/' className='nav-link' onClick={handleWindowResize}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/download"
              className="nav-link"
              onClick={handleWindowResize}
            >
              Download
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/aboutus"
              className="nav-link"
              onClick={handleWindowResize}
            >
              About Us
            </Link>
          </li>
          {isAuthenticated ? (
            <>
              <li className='nav-item'>
                <span className='welcome-message'>Welcome, {user.name}</span>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-link' onClick={() => { handleWindowResize(); logout({ returnTo: window.location.origin }); }}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className='nav-item'>
                <Link to='/login' className='nav-link' onClick={handleWindowResize}>
                  Log In
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/sign-up'
                  className='nav-link nav-link-signup'
                  onClick={handleWindowResize}
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
