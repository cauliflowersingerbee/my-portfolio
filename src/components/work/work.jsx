import React from 'react';
import Navbar from '../navbar/navbar';
import LogoImage from '../imgs/portfolio-logo.svg';
import './work.scss'
import WorkImage from '../imgs/work-img.svg';
import WorkVector from '../imgs/work-vector.svg';
import SquigglyLine from '../imgs/squiggly-line.svg';
import SquigglyLineOne from '../imgs/squiggly-line-one.svg';
import SquigglyLineTwo from '../imgs/squiggly-line.svg';
import SquigglyLineThree from '../imgs/squiggly-line.svg';
import LandingPage from '../landing-page/landing-page';

//import { Router } from 'react-router-dom';




export default class WorkView extends React.Component {  
    
    render() {

      const handleClickWebDev = () => {
        window.open('_blank');
      };

      const handleClickUXDesign = () => {
        window.open('_blank');
      };

      const handleClickWriting = () => {
        window.open('_blank');
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
      <img id='work-vector' src={WorkVector} alt=''/>
      <img id='work-img' src={WorkImage} alt=''/>
      <img id='squiggly-line' src={SquigglyLine} alt=''/>
      <img id='squiggly-line-one' src={SquigglyLineOne} alt=''/>
      <img id='squiggly-line-two' src={SquigglyLineTwo} alt=''/>
      <img id='squiggly-line-three' src={SquigglyLineThree} alt=''/>
      <p id='work-text'>My work</p>
      <div id='web-dev'onClick={handleClickWebDev} style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>Web Development</div>
      <div id='ux-design' onClick={handleClickUXDesign} style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>UX Design</div>
      <div id='writing' onClick={handleClickWriting} style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>Writing</div>

      
      </div>
      );
    }
  }
  