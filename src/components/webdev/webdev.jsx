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
   const changeTextColor = (e) => {
    e.target.style.color = '#EF4B68';
  }

  const returnTextColor = (e) => {
    e.target.style.color = '#000'
  }

  

      return (
    <div className='container'>
      <div id='navbar'>
        <Navbar/>
      </div>
      <Row>
      <div id='webdev-links'>
        
        <ul>
          <li><HashLink to='#myflix-angular' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>MyFlix Angular</HashLink></li>
          <li><HashLink to='#myflix-react' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}> MyFlixReact</HashLink></li>
          <li><HashLink to='#myflix-api' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor} >MyFlix API</HashLink></li>
          <li><HashLink to='#titbit'style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>Titbit</HashLink></li>
          <li><HashLink to='#aptly' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>Aptly</HashLink></li>
          <li><HashLink to='#pokedex' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>Pokedex</HashLink></li>
           <li><HashLink to="#top" id='to-top' >Back to Top</HashLink></li>
          </ul>
      </div>
      </Row>
      <div>
      <img alt='' src={WebDevImg} id='webdev-vector'/>            
      </div>



      <div id='myflix-angular' >

        <div>
        
        </div>
        <div className='webdev-text' style={{border: 'solid 0.5px #000', padding:'1rem'}} >
          
                            <p className='title' >KINO NOIR ANGULAR</p>
                            <img alt='' src={MyFlixAngularImg} id='webdev-img-angular'/>
                            <p>This is a single-page, responsive movie app built with <span style={{color:'#F24968'}}>Angular</span>, with routing and several
                            interface views. The client-side is an Angular rendition of a previous project that I built 
                            with React. It is designed using Angular Material, with documentation created using Typedoc and JSDoc. </p>

                          
         <Row>
                    <Col id='site-links' ><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">Github</Card.Link></Col>
                    <Col id='site-links' ><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Live Site</Card.Link></Col>
                    <Col id='site-links' ><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Case Study</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                 
                </Row>
        </div>
       

       
        </div>


        <div id='myflix-react' >

        <div>
        
        </div>
        <div className='webdev-text' style={{border: 'solid 0.5px #000', padding:'1rem'}}>
          
                            <p className='title'>KINO NOIR REACT</p>
                            <img alt='' src={MyFlixReactImg} id='webdev-img-react'/>
                            <p>This is the client-side of a movie API. It's built using the MERN tech stack 
                                (MongoDB, Express, React, and Node.js). It’s a single-page application (SPA). 
                                It uses routing to navigate between views and share URLs. It uses Parcel as its build tool.
                                The user interface is made up of a number of views e.g. the main view, single movie view,
                                login view, registration view and profile view. </p>

                          
        
        </div>
        <Row>
                    <Col id='site-links' ><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">Github</Card.Link></Col>
                    <Col id='site-links' ><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Live Site</Card.Link></Col>
                    <Col id='site-links' ><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Case Study</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                 
                </Row>

       
        </div>


        <div id='myflix-angular' >

        <div>
        
        </div>
        <div className='webdev-text'>
          
                            <p>KINO NOIR ANGULAR</p>
                            <img alt='' src={MyFlixAngularImg} id='webdev-img-angular'/>
                            <p>This is a single-page, responsive movie app built with <span style={{color:'#F24968'}}>Angular</span>, with routing and several
                            interface views. The client-side is an Angular rendition of a previous project that I built 
                            with React. It is designed using Angular Material, with documentation created using Typedoc and JSDoc. </p>

                          
        
        </div>
        <Row>
                    <Col id='site-links' ><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">Github</Card.Link></Col>
                    <Col id='site-links' ><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Live Site</Card.Link></Col>
                    <Col id='site-links' ><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Case Study</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                 
                </Row>

       
        </div>


        <div id='myflix-angular' >

        <div>
        
        </div>
        <div className='webdev-text'>
          
                            <p>KINO NOIR ANGULAR</p>
                            <img alt='' src={MyFlixAngularImg} id='webdev-img-angular'/>
                            <p>This is a single-page, responsive movie app built with <span style={{color:'#F24968'}}>Angular</span>, with routing and several
                            interface views. The client-side is an Angular rendition of a previous project that I built 
                            with React. It is designed using Angular Material, with documentation created using Typedoc and JSDoc. </p>

                          
        
        </div>
        <Row>
                    <Col id='site-links' ><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">Github</Card.Link></Col>
                    <Col id='site-links' ><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Live Site</Card.Link></Col>
                    <Col id='site-links' ><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Case Study</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                 
                </Row>

       
        </div>


        <div id='myflix-angular' >

        <div>
        
        </div>
        <div className='webdev-text'>
          
                            <p>KINO NOIR ANGULAR</p>
                            <img alt='' src={MyFlixAngularImg} id='webdev-img-angular'/>
                            <p>This is a single-page, responsive movie app built with <span style={{color:'#F24968'}}>Angular</span>, with routing and several
                            interface views. The client-side is an Angular rendition of a previous project that I built 
                            with React. It is designed using Angular Material, with documentation created using Typedoc and JSDoc. </p>

                          
        
        </div>
        <Row>
                    <Col id='site-links' ><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">Github</Card.Link></Col>
                    <Col id='site-links' ><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Live Site</Card.Link></Col>
                    <Col id='site-links' ><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Case Study</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                 
                </Row>

       
        </div>



        <div id='myflix-angular' >

        <div>
        
        </div>
        <div className='webdev-text'>
          
                            <p>KINO NOIR ANGULAR</p>
                            <img alt='' src={MyFlixAngularImg} id='webdev-img-angular'/>
                            <p>This is a single-page, responsive movie app built with <span style={{color:'#F24968'}}>Angular</span>, with routing and several
                            interface views. The client-side is an Angular rendition of a previous project that I built 
                            with React. It is designed using Angular Material, with documentation created using Typedoc and JSDoc. </p>

                          
        
        </div>
        <Row>
                    <Col id='site-links' ><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">Github</Card.Link></Col>
                    <Col id='site-links' ><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Live Site</Card.Link></Col>
                    <Col id='site-links' ><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Case Study</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                   <Col></Col>
                 
                </Row>

       
        </div>



        
    </div>);
    }
  }
  
