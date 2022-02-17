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
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';

//import { Router } from 'react-router-dom';




export default class WorkView extends React.Component {  
    
    render() {

     
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
      <img id='squiggly-line-three' src={SquigglyLineThree} alt=''/>
      <img id='squiggly-line-four' src={SquigglyLineThree} alt=''/>
      
      
      <p id='work-text'>My work</p>
      
      <div id='work-links'>
        <ul>
          <li><Link to="/work/webdev" id='webdev' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>Web Development</Link></li>
    
          <li><Link to="/work/uxdesign" id='uxdesign' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>UX Design</Link></li>
      
          <li><Link to="/work/writing" id='writing' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>Writing</Link></li>
     </ul>
      <div className="work-link-routes">
       
        <Switch>
          <Route exact path="/work/webdev">
             <WebDevView/> 
          </Route>
          <Route path="/work/uxdesign">
             <UXDesignView/> 
          </Route>
          <Route path="/work/writing">
             <WritingView/> 
          </Route>
        </Switch>

        
        
      </div>
    </div>
     
      </div>
      );
    }
  }
  

  