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

      <div id='myflix-angular' >

        <div>
        
        </div>
        <div className='webdev-text'>
          
                            KINO NOIR ANGULAR
                            <img alt='' src={MyFlixAngularImg} id='webdev-img-angular'/>
                            <p>This is a single-page, responsive movie app built with <span style={{color:'#F24968'}}>Angular</span>, with routing and several
                            interface views. The client-side is an Angular rendition of a previous project that I built 
                            with React. It is designed using <span style={{color:'#F24968'}}>Angular Material</span>, with documentation created using <span style={{color:'#F24968'}}>Typedoc and JSDoc</span>. </p>

                            <Row>
                    <Col id='site-links' style={{ margin:'1px', maxWidth: '50%'}}><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">Github</Card.Link></Col>
                    <Col id='site-links' style={{ margin:'1px'}}><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Live Site</Card.Link></Col>
                    <Col id='site-links' style={{ margin:'1px'}}><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Case Study</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                 
                </Row>
        
        </div>

       
        </div>
    </div>);
    }
  }
  
