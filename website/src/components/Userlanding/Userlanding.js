import React from 'react';
import './Userlanding.css';
import { useNavigate } from 'react-router-dom'

export default function UserLanding() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
      navigate('/sign-up');
    };
  
  return (
    <div className="user-landing">
      <h1 className="user-landing-title">Find Nearby Bathrooms</h1>
      <p className="user-landing-subtitle">Rate, Filter, and Explore</p>
      <p className="user-landing-description">
        Welcome to our app! Discover public restrooms near you and make your bathroom experiences more pleasant. With our app, you can easily find, rate, and filter bathrooms based on your preferences. Read reviews from the community and contribute your own to help others find clean and comfortable facilities.
      </p>
      <button className="user-landing-button" onClick={handleGetStarted}>Get Started</button>
    </div>
  );
}
