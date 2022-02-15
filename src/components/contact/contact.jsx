import React from 'react';
import Navbar from '../navbar/navbar';
import LogoImage from '../imgs/portfolio-logo.svg';
import ContactImage from '../imgs/contact-img.svg';
import ContactVector from '../imgs/contact-vector.svg';
import './contact.scss';
import SquigglyLine from '../imgs/squiggly-line.svg';
import SquigglyLineTwo from '../imgs/squiggly-line-two.svg';
import MailTo from '../mailto/mailto';
//import LinkedIn from '../linkedin/linkedin';
import ReactModal from '../modal/modal';



export default class ContactView extends React.Component {  
  

  
    render = () =>{

      //adding external linkedin link
    const  handleClick = () => {
      window.open("https://www.linkedin.com/in/okwiri-oduor-ab2010219/", '_blank');
    };

    //creating hover effect over linkedin link
    //can't use hover in react so you create listeners for onMouseEnter and onMouseLeave
    const changeTextColor = (e) => {
      e.target.style.color = '#EF4B68';
    }

    const returnTextColor = (e) => {
      e.target.style.color = 'white'
    }


      return (
      <div>
      <Navbar/>
      <img id='logo-img' src={LogoImage} alt=''/>
      <img id='contact-img' src={ContactImage} alt=''/>
      <img id='contact-vector' src={ContactVector} alt=''/>
      <div id='contact-text'>
      <img id='squiggly-line-one' src={SquigglyLine} alt=''/>
      <img id='squiggly-line-two' src={SquigglyLineTwo} alt=''/>
     
      <div id='contact-me'>Contact Me</div>
      <p>Thanks for checking out my portfolio. If you wish, you 
        may contact me by  {<MailTo/>} or via 
        <span id='linkedin-link' onClick={handleClick} style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}> Linkedin</span>. </p>
        </div>
      </div>
      );
    }
  }

 