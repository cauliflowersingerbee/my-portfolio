import React from 'react';
import Navbar from '../navbar/navbar';
import LogoImage from '../imgs/portfolio-logo.svg';
import WorkImage from '../imgs/work-img.svg';
import WorkVector from '../imgs/work-vector.svg';
import './work.scss';





export default class WorkView extends React.Component {  
    
    render() {
    
      return (
      <div>
      <Navbar/>
      <img id='logo-img' src={LogoImage} alt=''/>
      <img id='work-img' src={WorkImage} alt=''/>
      <img id='work-vector' src={WorkVector} alt=''/>
      <div id='work-text'>
      <p>Thanks for checking out 
        my portfolio. If you wish, you 
        may contact me <span id='contact-link'>here</span> or via 
        <span id='contact-link'> LinkedIn</span>. </p>
        </div>
      </div>
      );
    }
  }
  