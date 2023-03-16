import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Landing from '../Landing/Landing'
import Login from '../Login/Login'
import NotFound from '../NotFound/NotFound';
function App() {
  return (
    <div className='app'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
