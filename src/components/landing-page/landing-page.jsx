import React from 'react';
import Navbar from '../navbar/navbar';
import './landing-page.scss'
import Confetti from '../imgs/confetti-landing-page.svg';
import LogoImage from '../imgs/portfolio-logo.svg';

export default class LandingPage extends React.Component {  
    
    render() {

      return (
      <div>
      <Navbar/>
      <img id='logo-img' src={LogoImage} alt=''/>
      <img id='confetti' src={Confetti} alt=''/>
      <div className='construction'>
       <p>PAGE UNDER CONSTRUCTION</p> 
      </div>
      
      
      </div>
      );
    }
  }
  