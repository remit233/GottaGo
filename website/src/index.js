import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css'
import {Auth0Provider} from '@auth0/auth0-react'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <Auth0Provider
   domain="dev-w37dhkyn1u01tvta.us.auth0.com"
   clientId="QRZa7aqoAMlDx0OUGdn4gvQTUfZ4H2rh"
   authorizationParams={{
     redirect_uri: window.location.origin
   }}
 >
   <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
 </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
