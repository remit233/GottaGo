import React from 'react';
import './Landing.css'
import Home from '../Home/Home.js'
import Download from '../Download/Download.js'
import AboutUs from '../AboutUs/AboutUs.js'
import UserLanding from '../Userlanding/Userlanding.js'
import useAuth from '../auth/useAuth.js';


export default function Landing() {
    const { isAuthenticated } = useAuth();
  
    if (isAuthenticated) {
      return (
        <div className="landing">
          <Home />
          <AboutUs />
          <Download />
        </div>
      );
    } else {
      return (
        <div className="landing">
          <UserLanding /> {/* Render the UserLanding component */}
          <AboutUs />
          <Download />
        </div>
      );
    }
  }