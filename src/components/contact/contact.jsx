import React from 'react';
import Navbar from '../navbar/navbar';
import LogoImage from '../imgs/portfolio-logo.svg';
import ContactImage from '../imgs/contact-img.svg';
import ContactVector from '../imgs/contact-vector.svg';
import './contact.scss';
import SquigglyLine from '../imgs/squiggly-line.svg';
import SquigglyLineTwo from '../imgs/squiggly-line-two.svg';




export default class ContactView extends React.Component {  
    
    render() {
    
      return (
      <div>
      <Navbar/>
      <img id='logo-img' src={LogoImage} alt=''/>
      <img id='work-img' src={ContactImage} alt=''/>
      <img id='work-vector' src={ContactVector} alt=''/>
      <div id='work-text'>
      <img id='squiggly-line-one' src={SquigglyLine} alt=''/>
      <img id='squiggly-line-two' src={SquigglyLineTwo} alt=''/>
      <p>Thanks for checking out 
        my portfolio. If you wish, you 
        may contact me by <span id='contact-link'>email</span> or via 
        <span id='contact-link'> LinkedIn</span>. </p>
        </div>
      </div>
      );
    }
  }
  