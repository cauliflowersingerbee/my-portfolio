import React from 'react';
import Navbar from '../navbar/navbar';
import './about.scss';
import LogoImage from '../imgs/portfolio-logo.svg';
import AboutImage from '../imgs/about-img.svg'
import AboutVector from '../imgs/about-vector.svg'




export default class AboutView extends React.Component {  
    
    render() {
    
      return (
      <div>
      <Navbar/>
      <img id='logo-img' src={LogoImage} alt=''/>
      <img id='about-img' src={AboutImage} alt=''/>
      <img id='about-vector' src={AboutVector} alt=''/>
      </div>
      );
    }
  }
  