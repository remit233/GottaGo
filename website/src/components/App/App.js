import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
//import Home from './components/pages/Home'



function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' />
    </Routes>
    </Router>
      
    </>
  );
}

export default App;
