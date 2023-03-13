import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Landing from '../Landing/Landing'

function App() {
  return (
    <div className='app'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
