import React from 'react';
import Navbar from '../navbar/navbar';
import './webdev.scss'
import LogoImage from '../imgs/portfolio-logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class WebDevView extends React.Component {  
  
 

    render() {
  //changing text color over side links
  const changeTextColor = (e) => {
    e.target.style.color = '#EF4B68';
  }

  const returnTextColor = (e) => {
    e.target.style.color = '#F2CA52'
  }

  

      return (
    <div className='container'>
      <div id='navbar'>
        <Navbar/>
      <div>

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

     
    
        <div className='project-cards' style={{display: 'block'}}>
         
        <div id='myflix-angular' >
           <Card style={{background: '#F2CA52', width: '65rem', height: '45rem', marginTop: 'rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '27rem', lineHeight: '2.2rem', color: '#fff', fontSize: '30px', fontFamily: 'Roboto', fontWeight: '800'}}>
                MyFlix Angular
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '0.5rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#000', fontSize: '20px', fontFamily: 'Roboto-Slab', lineHeight: '1px', marginLeft: '15px'}}>About the App</p>
                            
                            <div>
                            <img alt='' src={MyFlixAngularImg} style={{ width: '15rem', height: 'auto', float: 'left', margin: '1rem', border: 'solid 4px #fff'}}/>
                              
                            
                              <p style={{marginTop: '1rem', color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab',}}>This is a single-page, responsive movie app built with Angular, with routing and several
                            interface views. The client-side is an Angular rendition of a previous project that I built 
                            with React. It is designed using Angular Material, with documentation created using Typedoc and JSDoc </p>

                            <Row>
                    <Col id='site-links' style={{border:'2px solid #fff', margin:'1px'}}><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">Github</Card.Link></Col>
                    <Col id='site-links' style={{border:'2px solid #fff', margin:'1px'}}><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Live Site</Card.Link></Col>
                    <Col id='site-links' style={{border:'2px solid #fff', margin:'1px'}}><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Case Study</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                 
                </Row>
                            </div>      
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Card style={{margin: '2rem'}}>
                      <img id='user-flows' src={UserFlows} alt='' style={{margin: '.1rem', width: '600px', border: 'solid 4px #fff'}}/>
                      </Card>   
                      <Row><p style={{color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab'}}>I created user stories and user flows on Adobe Illustrator. These were crucial in guiding me as I added features to the app. To keep track of the project, I used Kanban boards built with Trello. </p></Row>
                     
                      </Col>

                </Row>
              
               
          </Card> 
          
          
      </div>
     
     

      <div id='myflix-react' >
           <Card style={{background: '#F2CA52', width: '65rem', height: '40rem', marginTop: '2rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '27rem', lineHeight: '2.2rem', color: '#fff', fontSize: '30px', fontFamily: 'Roboto', fontWeight: '800'}}>
                MyFlix React
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '0.5rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#000', fontSize: '20px', fontFamily: 'Roboto-Slab', lineHeight: '1px'}}>About the App</p>
                            
                            <div>
                            <img alt='' src={MyFlixReactImg} style={{ width: '40rem', height: 'auto', float: 'right', margin: '1rem', border: 'solid 8px #fff'}}/>
                     
                            
                              <p style={{marginTop: '1rem', color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab',}}>
                                This is the client-side of a movie API. It's built using the MERN tech stack 
                                (MongoDB, Express, React, and Node.js). It’s a single-page application (SPA). 
                                It uses routing to navigate between views and share URLs. It uses Parcel as its build tool.
                                The user interface is made up of a number of views e.g. the main view (returns a list of all 
                                movies to the user), the  single movie view (returns data about a single movie to the user 
                                and allows users to add a movie to their list of favorites), the login view (allows users to 
                                log in with a username and password), the registration view (allows new users to register) and 
                                the profile view (allows users to update their user info, deregister, access and edit their 
                                list of favorite movies).
 </p>

                            <Row>
                    <Col id='site-links' style={{border:'2px solid #fff', margin:'1px'}}><Card.Link href="https://github.com/cauliflowersingerbee/MyFlixClient" target="_blank">Github</Card.Link></Col>
                    <Col id='site-links' style={{border:'2px solid #fff', margin:'1px'}}><Card.Link href="https://kino-noir.herokuapp.com/" target="_blank">Live Site</Card.Link></Col>
                    <Col id='site-links' style={{border:'2px solid #fff', margin:'1px'}}><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Case Study</Card.Link></Col><Col></Col>
                   <Col></Col>
                 
                </Row>
                            </div>      
          
                      </Col>
                 
                     

                </Row>
              
               
          </Card> 
          
          
      </div>


      <div id='myflix-api' >
           <Card style={{background: '#F2CA52', width: '65rem', height: '35rem', marginTop: '2rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '27rem', lineHeight: '2.2rem', color: '#fff', fontSize: '30px', fontFamily: 'Roboto', fontWeight: '800'}}>
                MyFlix API
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '0.5rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#000', fontSize: '20px', fontFamily: 'Roboto-Slab', lineHeight: '1px'}}>About the App</p>
                            
                            <div>
                              
                            
                              <p style={{marginTop: '1rem', color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab',}}>
                             This is the complete server-side of a movie web application, including the server, business logic, 
                             and business layers of the application. It consists of a well-designed REST API and architected 
                             database built using JavaScript, Node.js, Express, and MongoDB. The REST API is accessed via commonly 
                             used HTTP methods like GET and POST.  </p>

                            <Row>
                    <Col id='site-links' style={{border:'2px solid #fff', margin:'1px'}}><Card.Link href="https://github.com/cauliflowersingerbee/MyFlix-Movie-API" target="_blank">Github</Card.Link></Col>
                    <Col id='site-links' style={{border:'2px solid #fff', margin:'1px'}}><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Case Study</Card.Link></Col><Col></Col>
                   <Col></Col>
                 
                </Row>
                            </div>      
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Card style={{margin: '2rem'}}>
                      <img alt='' src={MyFlixApiImg} style={{ width: '30rem', height: 'auto', float: 'left', margin: '1rem', border: 'solid 4px #fff'}}/>
                     </Card>   
                      
                      </Col>

                </Row>
              
               
          </Card> 
          
          
      </div>


      <div id='titbit' >
           <Card style={{background: '#F2CA52', width: '65rem', height: '40rem', marginTop: '2rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '27rem', lineHeight: '2.2rem', color: '#fff', fontSize: '30px', fontFamily: 'Roboto', fontWeight: '800'}}>
                Titbit
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '0.5rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#000', fontSize: '20px', fontFamily: 'Roboto-Slab', lineHeight: '1px'}}>About the App</p>
                            
                            <div>
                               
                            
                              <p style={{marginTop: '1rem', color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab',}}>Titibit is a chat app for mobile 
                              devices, built using React Native. The app provides users with a chat interface and options to share images and their location.
                              The app is written in React Native. It's developed using Expo. Conversations are stored in Google Firestore Database.
                              The app authenticates users anonymously via Google Firebase authentication.
                              Chat conversations are stored locally. The app lets users pick and send images from the phone’s image library.
                              It lets users take and send pictures using their device’s camera app.
                              It stores images in Firebase Cloud Storage.
                              The app is able to read the user’s location data.
                              Location data is sent via the chat in a map view.
                              The chat interface and functionality are created using the Gifted Chat library.
                            
                              </p>

                            <Row>
                    <Col id='site-links' style={{border:'2px solid #fff', margin:'1px'}}><Card.Link href="https://github.com/cauliflowersingerbee/titbit" target="_blank">Github</Card.Link></Col>
                    <Col id='site-links' style={{border:'2px solid #fff', margin:'1px'}}><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Case Study</Card.Link></Col>
                    <Col></Col>
                   <Col></Col>
                 
                </Row>
                            </div>      
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Card style={{margin: '2rem', width: '22rem'}}>
                      <img alt='' src={TitbitImg} style={{ width: '21.5rem', height: 'auto', float: 'left', margin: '.2rem', border: 'solid 2px #fff'}}/>
                      </Card>   
                     
                      </Col>

                </Row>
              
               
          </Card> 
          
          
      </div>

      <div id='aptly' >
           <Card style={{background: '#F2CA52', width: '65rem', height: '40rem', marginTop: '2rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '27rem', lineHeight: '2.2rem', color: '#fff', fontSize: '30px', fontFamily: 'Roboto', fontWeight: '800'}}>
                Aptly
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '0.5rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#000', fontSize: '20px', fontFamily: 'Roboto-Slab', lineHeight: '1px'}}>About the App</p>
                            
                            <div>
                               
                            
                              <p style={{marginTop: '1rem', color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab',}}>
                              This is a serverless, progressive web application (PWA) built with React using a test-driven development 
                              (TDD) technique. It uses the Google Calendar API to fetch upcoming events.  </p>

                              <ul style={{marginTop: '1rem', color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab',}}>
                              <li>Uses the Google Calendar API and OAuth2 authentication flow.</li>
                              <li>Uses serverless functions (AWS lambda) for the authorization server 
                                instead of using a traditional server.</li>
                              <li>Passes Lighthouse’s PWA checklist.</li>
                              <li>Works offline or in slow network conditions with the help of a service worker.</li>
                              <li>The API calls use React axios and async/await.</li>
                              <li>Implements an alert system using an OOP approach to show information to the user.</li>
                              <li>Makes use of data visualization (using recharts).</li>
                              </ul>

                             
  
                             

                            <Row>
                    <Col id='site-links' style={{border:'2px solid #fff', margin:'1px'}}><Card.Link href="https://github.com/cauliflowersingerbee/aptly" target="_blank">Github</Card.Link></Col>
                    <Col id='site-links' style={{border:'2px solid #fff', margin:'1px'}}><Card.Link href="https://cauliflowersingerbee.github.io/aptly/" target="_blank">Live Site</Card.Link></Col>
                    <Col id='site-links' style={{border:'2px solid #fff', margin:'1px'}}><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Case Study</Card.Link></Col><Col></Col>
                   <Col></Col>
                 
                </Row>
                            </div>      
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Card style={{width: '26rem'}}>
                      <img alt='' src={AptlyImg} style={{ width: '24rem', height: 'auto', float: 'left', margin: '1rem', border: 'solid .1px #fff'}}/>
                      </Card>   
                      </Col>

                </Row>
              
               
          </Card> 
          
          
      </div>


      <div id='pokedex' >
           <Card style={{background: '#F2CA52', width: '65rem', height: '40rem', marginTop: '2rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '27rem', lineHeight: '2.2rem', color: '#fff', fontSize: '30px', fontFamily: 'Roboto', fontWeight: '800'}}>
                Pokedex
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '0.5rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#000', fontSize: '20px', fontFamily: 'Roboto-Slab', lineHeight: '1px'}}>About the App</p>
                            
                            <div>
                                
                            
                              <p style={{marginTop: '1rem', color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab',}}>
                                
                             This is a small web application with HTML, CSS, and JavaScript that loads data from an external 
                               API and enables the viewing of data points in detail.

                             </p>

                            <Row>
                    <Col id='site-links' style={{border:'2px solid #fff', margin:'1px'}}><Card.Link href="https://github.com/cauliflowersingerbee/pokedex-app" target="_blank">Github</Card.Link></Col>
                    <Col id='site-links' style={{border:'2px solid #fff', margin:'1px'}}><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Case Study</Card.Link></Col><Col></Col>
                   <Col></Col>
                 
                </Row>
                            </div>      
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Card style={{margin: '2rem'}}>
                      <img alt='' src={PokedexImg} style={{ width: '35rem', height: 'auto', float: 'left', margin: '1rem', border: 'solid 1px #fff'}}/>
                              </Card>   
                       
                      </Col>

                </Row>
              
               
          </Card> 
          
          
      </div>
       

      </div>




      </div>
            
      </div>
     
    
    </div>);
    }
  }
  
