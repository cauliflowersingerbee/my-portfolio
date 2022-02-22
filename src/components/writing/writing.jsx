import React from 'react';
import Navbar from '../navbar/navbar';
import './writing.scss'
import WorkImage from '../imgs/work-img.svg';
import WorkVector from '../imgs/work-vector.svg';




export default class WritingView extends React.Component {  
    
    render() {


      return (
      <div>
      <Navbar/>
      <img id='writing-vector' src={WorkVector} alt=''/>
      <img id='writing-img' src={WorkImage} alt='flat illustration of woman watering her plant'/>
      
      
      <p id='writing-text'>My <span style={{color:'#F24968'}}> author page </span>is still under construction. Please check back soon!</p>
      
     

        
        
      </div>
  
      );
    }
  }
  

  