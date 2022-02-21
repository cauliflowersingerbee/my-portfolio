import React from 'react';
import Navbar from '../navbar/navbar';
import LogoImage from '../imgs/portfolio-logo.svg';
import './writing.scss'
import WorkImage from '../imgs/work-img.svg';
import WorkVector from '../imgs/work-vector.svg';




export default class WritingView extends React.Component {  
    
    render() {


      return (
      <div>
      <Navbar/>
      <img id='work-vector' src={WorkVector} alt=''/>
      <img id='work-img' src={WorkImage} alt=''/>
      
      
      <p id='work-text'>My author page is still under construction. Please check back soon!</p>
      
     

        
        
      </div>
  
      );
    }
  }
  

  