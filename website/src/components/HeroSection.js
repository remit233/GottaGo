import React from 'react'
import './App/App.css';
import { Button } from './Button/Button'
import './HeroSection.css';

function HeroSection() {
  return (
    <div classname="hero-container">
      <h1>Find Relief Wherever You Go</h1>
      <p>Say goodbye to bathroom anxiety</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
        Features
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
        Give Us Feedback
        </Button>
      </div>
    </div>
   
  )
}

export default HeroSection
