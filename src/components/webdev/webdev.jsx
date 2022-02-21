import React from 'react';
import Navbar from '../navbar/navbar';
import './webdev.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import WebDevImg from '../imgs/webdev-page-vector.svg';
import MyFlixAngularImg from '../imgs/myflix-angular-img.svg';
import MyFlixReactImg from '../imgs/myflix-react-img.svg';
import MyFlixApiImg from '../imgs/myflix-api-img.svg';
import AptlyImg from '../imgs/aptly-img.svg';
import TitbitImg from '../imgs/titbit-img.svg';
import PokedexImg from '../imgs/pokedex-img.svg';
import UserFlows from '../imgs/user-flows.svg';
import { Card, Row, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import "bootstrap/dist/css/bootstrap.min.css";


export default class WebDevView extends React.Component {  
  
 

    render() {
  //changing text color over side links

  

      return (
    <div className='container'>
      <div id='navbar'>
        <Navbar/>
      </div>
      <div>
      <img alt='' src={WebDevImg} id='webdev-vector'/>            
      </div>
      <div>
        </div>
        <Card style={{border: '1 px solid #F2CA52', maxWidth: '60%',}} >
      <div id='myflix-angular' >
                             
        <p className='webdev-text'>KINO NOIR ANGULAR</p>
        <p>This is a single-page, responsive movie app built with Angular, with routing and several
         interface views. The client-side is an Angular rendition of a previous project that I built 
          with React. It is designed using Angular Material, with documentation created using Typedoc and JSDoc. </p>

          <img alt='' src={MyFlixAngularImg} id='webdev-img-angular'/>
      


        </div>
        </Card>
    </div>);
    }
  }
  
