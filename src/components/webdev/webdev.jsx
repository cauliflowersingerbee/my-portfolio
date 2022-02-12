import React from 'react';
import Navbar from '../navbar/navbar';
import './webdev.scss'
import LogoImage from '../imgs/portfolio-logo.svg';
import { Card, ListGroup, ListGroupItem, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFlixAngularImg from '../imgs/myflix-angular-img.png';
import WebDevImg from '../imgs/work-projects-img.svg';
import WebDevVector from '../imgs/work-projects-vector.svg';


export default class WebDevView extends React.Component {  
    
    render() {

      return (
      <div id='navbar'>
      <Navbar/>
      <img id='logo-img' src={LogoImage} alt=''/>
      <img id='wwebdev-vector-img' src={WebDevVector} alt=''/>
      <img id='webdev-img' src={WebDevImg} alt=''/>
      
    </div>      );
    }
  }
  
