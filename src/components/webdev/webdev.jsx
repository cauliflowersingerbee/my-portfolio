import React from 'react';
import Navbar from '../navbar/navbar';
import './webdev.scss'
import LogoImage from '../imgs/portfolio-logo.svg';
import { Card, ListGroup, ListGroupItem, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import MyFlixAngularImg from '../imgs/myflix-angular-img.png';
//import WebDevImg from '../imgs/work-projects-img.svg';
//import WebDevVector from '../imgs/work-projects-vector.svg';


export default class WebDevView extends React.Component {  
    
    render() {

      return (
      <div id='navbar'>
      <Navbar/>
      <img id='logo-img' src={LogoImage} alt=''/>
      <div className='project-grid'>
            <div id='red' class="grid-item">1</div>
            <div class="grid-item">3</div>
            <div  class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div id='stool' class="grid-item">6</div>
            <div class="grid-item">7</div>
            <div  class="grid-item">8</div>
            <div id='stool' class="grid-item">9</div>
            <div class="grid-item">10</div>
            <div class="grid-item">11</div>
            <div id='stool' class="grid-item">12</div>
            <div class="grid-item">13</div>
            <div class="grid-item">14</div>
            
      </div>
      <p id='my-projects-text'>My Projects</p>
   
      
    </div>      );
    }
  }
  
