import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Navbar/>
        <Routes>
          <Route path='/' />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
