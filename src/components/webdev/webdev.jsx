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
import KanbanImgOne from '../imgs/kanban-img1.svg'
import KanbanImgTwo from '../imgs/kanban-img2.svg'
import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
//import WebDevImg from '../imgs/work-projects-img.svg';
//import WebDevVector from '../imgs/work-projects-vector.svg';
import "bootstrap/dist/css/bootstrap.min.css";

export default class WebDevView extends React.Component {  


    render() {

      return (
    <div className='container'>
      <div id='navbar'>
        <Navbar/>
        <img id='logo-img' src={LogoImage} alt=''/>
      <div>
     
      <div className='project-grid' style={{marginTop: '4rem'}}>
        
        <div className='angular' >
           <Card style={{background: '#F2CA52', width: '60rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '30rem', lineHeight: '2.2rem', color: '#fff', fontSize: '3rem', fontFamily: 'Roboto', fontWeight: '800'}}>
                MyFlix Angular
            </Card.Title>
                <Row>
                        <Col style={{margin: '1rem', marginRight: '2rem'}}>
          
                              <p><h6>About App</h6></p>
                          
                              <img alt='' src={MyFlixAngularImg} style={{ width: '15rem', height: 'auto', }}/>
                              
                            
                                <p style={{marginTop: '3rem'}}>This is a single-page, responsive movie app built with Angular, with routing and several
                              interface views. The client-side is an Angular rendition of a previous project that was built 
                              with React. </p>
          
                      </Col>
                 
                      <Col>
                      <p><h6>User Flows and User Stories</h6></p>
                      <p>I created user stories and user flows to help guide me as I added features to the app.</p>
                      <Card style={{margin: '2rem'}}>
                      <img id='user-flows' src={UserFlows} alt='' style={{margin: '2rem'}}/>
                      </Card>    
                      </Col>

                </Row>
              
                <Row>

                     <Col  style={{margin: '1rem', marginRight: '8rem'}}>
                       <p><h6 >Technical information</h6></p>
                          <ul>
                            <li>Written in Angular</li>
                            <li>Contains user registration and login forms</li>
                            <li>Designed using Angular Material</li>
                            <li>Documentation created using Typedoc and JSDoc</li>
                         </ul>
                    </Col>
            
                    <Col>
                    <Row>
                    <p><h6>Kanban Board</h6> </p>
                    <p>I worked with a kanban board to keep track of the project from start to finish.</p>
                      <Col><img alt='' src={KanbanImgOne} style={{ width: '20rem', height: 'auto', }}/></Col>
                      <Col><img alt='' src={KanbanImgTwo} style={{ width: '20rem', height: 'auto', }}/></Col>
                          
                          
                    </Row>
                    </Col>

                </Row>
              
              
                    
              
                <Row>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                
                </Row>
          </Card>
      </div>

     
      </div>

      </div>
            
      </div>
         
    </div>);
    }
  }
  
