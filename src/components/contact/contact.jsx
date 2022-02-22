import React from 'react';
import Navbar from '../navbar/navbar';
import ContactImage from '../imgs/contact-img.svg';
import ContactVector from '../imgs/contact-vector.svg';
import './contact.scss';
import MailTo from '../mailto/mailto';



export default class ContactView extends React.Component {  
  

  
    render = () =>{

      //adding external linkedin link
    const  handleClick = () => {
      window.open("https://www.linkedin.com/in/okwiri-oduor-ab2010219/", '_blank');
    };


      return (
      <div>
      <Navbar/>
      <img id='contact-img' src={ContactImage} alt='flat illustration of a hand holding a red envelope'/>
      <img id='contact-vector' src={ContactVector} alt=''/>
      <div id='contact-text'>
     
      <p id='contact-me'>Thanks for checking out my portfolio. If you wish, you 
        may contact me by  {<MailTo/>} or via 
        <span id='linkedin-link' onClick={handleClick} style={{cursor:'pointer', color:'#EF4B68'}}> Linkedin</span>. </p>
        </div>
      </div>
      );
    }
  }

 