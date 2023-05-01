import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [renderNavLinks, setRenderNavLinks] = useState(true);

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
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img id="kawaii-toilet" src="./kawaiitoilet.jpg" alt="Logo" />
          <span>
            Gotta Go!
          </span>
        </Link>
        <ul className={renderNavLinks ? 'nav-links' : 'display-none'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={handleWindowResize}>
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
          <li className="nav-item">
            <Link to="/login" className="nav-link" onClick={handleWindowResize}>
              Log In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-link nav-link-signup"
              onClick={handleWindowResize}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
