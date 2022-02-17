import React from 'react';
import Navbar from '../navbar/navbar';
import LogoImage from '../imgs/portfolio-logo.svg';
import './uxdesign.scss'
import WorkImage from '../imgs/work-img.svg';
import WorkVector from '../imgs/work-vector.svg';
import SquigglyLine from '../imgs/squiggly-line.svg';
import UXDesignImg from '../imgs/work-projects-img.svg';

//import { Router } from 'react-router-dom';




export default class UXDesignView extends React.Component {  
    
    render() {


      return (
      <div>
      <Navbar/>
      <img id='logo-img' src={LogoImage} alt=''/>
      <img id='work-vector' src={WorkVector} alt=''/>
      <img id='work-img' src={UXDesignImg} alt='' style={{width:'250px', height: 'auto', top: '300px'}}/>
      <img id='squiggly-line' src={SquigglyLine} alt=''/>
      
      
      <p id='work-text'>My UX Design page is still under construction. Please check back soon!</p>
      
     

        
        
      </div>
  
      );
    }
  }
  

  