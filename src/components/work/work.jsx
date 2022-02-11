import React from 'react';
import Navbar from '../navbar/navbar';
import LogoImage from '../imgs/portfolio-logo.svg';
import './work.scss'
import WorkImage from '../imgs/work-img.svg';
import WorkVector from '../imgs/work-vector.svg';
import SquigglyLine from '../imgs/squiggly-line.svg';
import SquigglyLineThree from '../imgs/squiggly-line.svg';
import WebDevView from '../webdev/webdev';
import WritingView from '../writing/writing';
import UXDesignView from '../uxdesign/uxdesign';
import { Routes, Route, Link } from 'react-router-dom';

//import { Router } from 'react-router-dom';




export default class WorkView extends React.Component {  
    
    render() {

      //const {WebDevView, WritingView, UXDesignView} = this.props.children;
      //const WebDevView = props => <span>{WebDevView}</span>

      

      const handleClickWebDev = () => {
        const webdev = () => {
          return (
            <WebDevView />
          )
        };
        
        window.open(webdev, '_blank');
      };

      const handleClickUXDesign = () => {
        const uxdesign = () => {
          return (
            <UXDesignView />
          )
        };

        window.open(uxdesign, '_blank');
      };

      const handleClickWriting = () => {
        const writing = () => {
          return (
            <WritingView />
          )
        };
        
        window.open(writing, '_blank');
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
      <img id='squiggly-five' src={SquigglyLine} alt=''/>
      <img id='squiggly-line-three' src={SquigglyLineThree} alt=''/>
      <img id='squiggly-line-four' src={SquigglyLineThree} alt=''/>
      
      <p id='work-text'>My work</p>
      
      <div id='work-links'>
          <Link to="webdev" id='webdev' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>Web Development</Link>
    
          <Link to="uxdesign" id='uxdesign' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>UX Design</Link>
      
          <Link to="writing" id='writing' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>Writing</Link>
     
      <div className="work-link-routes">
        <Routes>
          <Route path="webdev" element={<WebDevView />}></Route>
          <Route path="uxdesign" element={<UXDesignView />}></Route>
          <Route path="writing" element={<WritingView />}></Route>
        </Routes>
      </div>
    </div>
     
      </div>
      );
    }
  }
  

  