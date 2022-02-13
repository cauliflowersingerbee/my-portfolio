import React from 'react';
import Navbar from '../navbar/navbar';
import './webdev.scss'
import LogoImage from '../imgs/portfolio-logo.svg';
import { Card, ListGroup, ListGroupItem, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFlixAngularImg from '../imgs/myflix-angular-img.svg';
import MyFlixReactImg from '../imgs/myflix-react-img.svg';
import MyFlixApiImg from '../imgs/myflix-api-img.svg';
import AptlyImg from '../imgs/aptly-img.svg';
import TitbitImg from '../imgs/titbit-img.svg';
import PokedexImg from '../imgs/pokedex-img.svg';
//import WebDevImg from '../imgs/work-projects-img.svg';
//import WebDevVector from '../imgs/work-projects-vector.svg';


export default class WebDevView extends React.Component {  
    
    render() {

      return (
          <div className='container'>
      <div id='navbar'>
      <Navbar/>
      <img id='logo-img' src={LogoImage} alt=''/>
      <div className='project-grid'>
             
          
                <img id='angular' src={MyFlixAngularImg} alt=''/>
            
                <img id='titbit' src={TitbitImg} alt=''/>

                <img id='react' src={MyFlixReactImg} alt=''/>
         
                <img id='api' src={MyFlixApiImg} alt=''/>
          
               <img id='aptly' src={AptlyImg} alt=''/>
         
                <img id='pokedex' src={PokedexImg} alt=''/>
           
           
            
      </div>
      <p id='my-projects-text'>My Projects</p>
   
      
    </div>      
    </div>);
    }
  }
  
