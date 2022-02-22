import React from 'react';
import Navbar from '../navbar/navbar';
import './uxdesign.scss'
import WorkVector from '../imgs/work-vector.svg';
import UXDesignImg from '../imgs/work-projects-img.svg';



export default class UXDesignView extends React.Component {  
    
    render() {


      return (
      <div>
      <Navbar/>
      <img id='ux-vector' src={WorkVector} alt=''/>
      <img id='ux-img' src={UXDesignImg} alt='flat illustration of woman sitting drinking coffee' style={{width:'250px', height: 'auto', top: '300px'}}/>
      <p id='ux-text'>My <span style={{color:'#F24968'}}> UX Design</span> page is still under construction. Please check back soon!</p>
      
     

        
        
      </div>
  
      );
    }
  }
  

  