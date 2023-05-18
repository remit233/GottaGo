import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer.js';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Landing from '../Landing/Landing.js';
import Login from '../Login/Login.js';
import SignUp from '../SignUp/SignUp.js';
import NotFound from '../NotFound/NotFound.js';
import { Auth0Provider } from '@auth0/auth0-react';
import useAuth from '../auth/useAuth.js'
import Download from '../Download/Download.js';
import AboutUs from '../AboutUs/AboutUs.js';
import BathroomForm from '../BathroomForm/BathroomForm.js';

function App() {
  const { isAuthenticated, login, logout, user } = useAuth();
  const domain = 'dev-w37dhkyn1u01tvta.us.auth0.com';
  const clientId = 'QRZa7aqoAMlDx0OUGdn4gvQTUfZ4H2rh';

  return (
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
      <div className="app">
        <Navbar isAuthenticated={isAuthenticated} login={login} logout={logout} user={user} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/sign-up" element={<SignUp  />} />
          <Route path="/download" element={<Download/>}/>
          <Route path="aboutus" element={<AboutUs/>}/>
          <Route path="/suggest-bathroom" element={<BathroomForm/>}/>
          
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Auth0Provider>
  );
}

export default App;
