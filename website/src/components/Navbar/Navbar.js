import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [renderNavLinks, setRenderNavLinks] = useState(true);

  const handleWindowResize = () => {
    if (window.innerWidth <= 960) 
    { setRenderNavLinks(false); } 
    else 
    { setRenderNavLinks(true); }
  };
  
  window.addEventListener('resize', handleWindowResize);

  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <div className='nav-logo-container'>
          <img id='kawaii-toilet' src='./kawaiitoilet.jpg'/>
          <Link to='/' className='nav-logo'> Go<span id='tt'>tt</span>a Go<span id='exclamation'>!</span> </Link>
        </div>
        <ul className={renderNavLinks ? 'nav-links':'display-none'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={handleWindowResize}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/download' className='nav-links' onClick={handleWindowResize}>
              Download
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/aboutus' className='nav-links' onClick={handleWindowResize}>
              About Us
            </Link>
          </li>
          <li className='nav-item login'>
            <Link to='/login' className='nav-links' onClick={handleWindowResize}>
              Log In
            </Link>
          </li >
          <li className='nav-item sign-up'>
            <Link to='/sign-up' className='nav-links' onClick={handleWindowResize}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;