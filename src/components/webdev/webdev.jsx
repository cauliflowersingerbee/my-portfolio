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
          <li><HashLink to='#myflix-angular' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>Kino Noir Angular</HashLink></li>
          <li><HashLink to='#myflix-react' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}> Kino Noir React</HashLink></li>
          <li><HashLink to='#myflix-api' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor} >Kino Noir API</HashLink></li>
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
                            <p>This is a single-page, responsive movie app built with Angular, with routing and several
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


        <div id='myflix-api' >

        <div>
        
        </div>
        <div className='webdev-text' style={{border: 'solid 0.5px #000', padding:'1rem'}}>
          
                            <p className='title'>KINO NOIR API</p>
                            <img alt='' src={MyFlixApiImg} style={{ width: '30rem', height: 'auto', float: 'left', margin: '1rem', border: 'solid 4px #fff'}}/>
                     <p>This is the complete server-side of a movie web application, including the server, business logic, 
                             and business layers of the application. It consists of a well-designed REST API and architected 
                             database built using JavaScript, Node.js, Express, and MongoDB. The REST API is accessed via commonly 
                             used HTTP methods like GET and POST.  </p>

                          
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

        <div id='titbit' >

<div>

</div>
<div className='webdev-text' style={{border: 'solid 0.5px #000', padding:'1rem'}} >
  
                    <p className='title' >TITBIT</p>
                    <img alt='' src={TitbitImg} style={{ width: '21.5rem', height: 'auto', float: 'left', margin: '.2rem', border: 'solid 2px #fff'}}/>
                       <p>Titibit is a chat app for mobile 
                              devices, built using React Native. The app provides users with a chat interface and options to share images and their location.
                              The app is written in React Native. It's developed using Expo. Conversations are stored in Google Firestore Database.
                              The app authenticates users anonymously via Google Firebase authentication.
                              Chat conversations are stored locally. The app lets users pick and send images from the phone’s image library.
                              It lets users take and send pictures using their device’s camera app.
                              It stores images in Firebase Cloud Storage.
                              The app is able to read the user’s location data.
                              Location data is sent via the chat in a map view.
                              The chat interface and functionality are created using the Gifted Chat library.</p>

                  
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

<div id='aptly' >

<div>

</div>
<div className='webdev-text' style={{border: 'solid 0.5px #000', padding:'1rem'}} >
  
                    <p className='title' >APTLY</p>
                    <img alt='' src={AptlyImg} style={{ width: '24rem', height: 'auto', float: 'left', margin: '1rem', border: 'solid .1px #fff'}}/>
                     <p>This is a serverless, progressive web application (PWA) built with React using a test-driven development 
                              (TDD) technique. It uses the Google Calendar API to fetch upcoming events. Features include: 

                              <ul >
                              <li>Uses the Google Calendar API and OAuth2 authentication flow.</li>
                              <li>Uses serverless functions (AWS lambda) for the authorization server 
                                instead of using a traditional server.</li>
                              <li>Passes Lighthouse’s PWA checklist.</li>
                              <li>Works offline or in slow network conditions with the help of a service worker.</li>
                              <li>The API calls use React axios and async/await.</li>
                              <li>Implements an alert system using an OOP approach to show information to the user.</li>
                              <li>Makes use of data visualization (using recharts).</li>
                              </ul> </p>

                  
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


<div id='pokedex' style={{marginBottom: '10rem'}}>

<div>

</div>
<div className='webdev-text' style={{border: 'solid 0.5px #000', padding:'1rem'}} >
  
                    <p className='title' >POKEDEX</p>
                    <img alt='' src={PokedexImg} style={{ width: '35rem', height: 'auto', margin: '1rem', border: 'solid 1px #fff'}}/>
                      <p>This is a small web application with HTML, CSS, and JavaScript that loads data from an external 
                               API and enables the viewing of data points in detail. </p>

                  
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
        <Row style={{marginTop: '5rem'}}></Row>
</div>



</div>

        
    </div>);
    }
  }
  
