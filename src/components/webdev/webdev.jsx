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
import SquigglyLineOne from '../imgs/squiggly-line.svg';
import SquigglyLineTwo from '../imgs/squiggly-line.svg';
import SquigglyLineThree from '../imgs/squiggly-line.svg';
import SquigglyLineFour from '../imgs/squiggly-line.svg';
import SquigglyLineFive from '../imgs/squiggly-line.svg';
import SquigglyLineSix from '../imgs/squiggly-line.svg';
import { Link } from 'react-router-dom';

//import WebDevImg from '../imgs/work-projects-img.svg';
//import WebDevVector from '../imgs/work-projects-vector.svg';
import "bootstrap/dist/css/bootstrap.min.css";

export default class WebDevView extends React.Component {  


    render() {
  //changing text color over side links
  const changeTextColor = (e) => {
    e.target.style.color = '#EF4B68';
  }

  const returnTextColor = (e) => {
    e.target.style.color = '#F2CA52'
  }

  const handleClickReact = () => {
    window.scroll("myflix-react");
  };

  

      return (
    <div className='container'>
      <div id='navbar'>
        <Navbar/>
        <img id='logo-img' src={LogoImage} alt=''/>
      <div>

      <div id='webdev-links'>
        <ul>
        
          <li style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>MyFlix Angular</li>
          <Link to='#myflix-react' onClick={handleClickReact} style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}> MyFlixReact</Link>
          <li style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor} >MyFlix API</li>
          <li style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>Titbit</li>
          <li style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>Aptly</li>
          <li style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>Pokedex</li>
        </ul>
      </div>
      <div>
      <img id='squiggly-one' src={SquigglyLineOne} alt=''/> 
      <img id='squiggly-two' src={SquigglyLineTwo} alt=''/> 
      <img id='squiggly-three' src={SquigglyLineThree} alt=''/> 
      <img id='squiggly-four' src={SquigglyLineFour} alt=''/> 
      <img id='squiggly-five' src={SquigglyLineFive} alt=''/> 
      <img id='squiggly-six' src={SquigglyLineSix} alt=''/> 
      </div>
     
    
        
        <div id='myflix-angular' >
           <Card style={{background: '#F2CA52', width: '50rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '19rem', lineHeight: '2.2rem', color: '#fff', fontSize: '2rem', fontFamily: 'Roboto', fontWeight: '800'}}>
                MyFlix Angular
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '2rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>About the App</p>
                          
                              <img alt='' src={MyFlixAngularImg} style={{ width: '15rem', height: 'auto', }}/>
                              
                            
                                <p style={{marginTop: '3rem', color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>This is a single-page, responsive movie app built with Angular, with routing and several
                              interface views. The client-side is an Angular rendition of a previous project that I built 
                              with React. </p>
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Row> <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab',}}>User Flows and User Stories</p></Row>
                      <Row><p style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>I created user stories and user flows to help guide me as I added features to the app.</p></Row>
                      <Card style={{margin: '2rem'}}>
                      <img id='user-flows' src={UserFlows} alt='' style={{margin: '1rem',}}/>
                      </Card>   
                      <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>Kanban Board</p> 
                      <p style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>I worked with a kanban board to help me keep track of the project from start to finish.</p>
                      
                      </Col>

                </Row>
              
                <Row>

                     <Col  style={{margin: '1rem', marginRight: '8rem'}}>
                       <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>Technical information</p>
                          <ul style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>
                            <li>Written in Angular</li>
                            <li>Contains user registration and login forms</li>
                            <li>Designed using Angular Material</li>
                            <li>Documentation created using Typedoc and JSDoc</li>
                         </ul>
                    </Col>
            
                    <Col style={{marginRight:'2rem'}}>
                    <Row>
                   <Col><img alt='' src={KanbanImgOne} style={{ width: '20rem', height: 'auto', }}/></Col>
                      <Col><img alt='' src={KanbanImgTwo} style={{ width: '20rem', height: 'auto', marginTop:'2rem'}}/></Col>
                          
                          
                    </Row>
                    </Col>

                </Row>
              
              
                    
              
                <Row style={{marginLeft:'1rem', marginTop:'2rem' ,marginBottom: '3rem'}}>
                    <Col><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">See Project on Github</Card.Link></Col>
                    <Col><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">See Project on Live Site</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                   
                
                </Row>
          </Card>
      </div>

      <div id='myflix-react' style={{marginTop: '4rem'}}>
           <Card style={{background: '#F2CA52', width: '50rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '19rem', lineHeight: '2.2rem', color: '#fff', fontSize: '2rem', fontFamily: 'Roboto', fontWeight: '800'}}>
                MyFlix React
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '2rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>About the App</p>
                          
                              <img alt='' src={MyFlixAngularImg} style={{ width: '15rem', height: 'auto', }}/>
                              
                            
                                <p style={{marginTop: '3rem', color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>This is a single-page, responsive movie app built with Angular, with routing and several
                              interface views. The client-side is an Angular rendition of a previous project that I built 
                              with React. </p>
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Row> <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab',}}>User Flows and User Stories</p></Row>
                      <Row><p style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>I created user stories and user flows to help guide me as I added features to the app.</p></Row>
                      <Card style={{margin: '2rem'}}>
                      <img id='user-flows' src={UserFlows} alt='' style={{margin: '1rem',}}/>
                      </Card>   
                      <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>Kanban Board</p> 
                      <p style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>I worked with a kanban board to help me keep track of the project from start to finish.</p>
                      
                      </Col>

                </Row>
              
                <Row>

                     <Col  style={{margin: '1rem', marginRight: '8rem'}}>
                       <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>Technical information</p>
                          <ul style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>
                            <li>Written in Angular</li>
                            <li>Contains user registration and login forms</li>
                            <li>Designed using Angular Material</li>
                            <li>Documentation created using Typedoc and JSDoc</li>
                         </ul>
                    </Col>
            
                    <Col style={{marginRight:'2rem'}}>
                    <Row>
                   <Col><img alt='' src={KanbanImgOne} style={{ width: '20rem', height: 'auto', }}/></Col>
                      <Col><img alt='' src={KanbanImgTwo} style={{ width: '20rem', height: 'auto', marginTop:'2rem'}}/></Col>
                          
                          
                    </Row>
                    </Col>

                </Row>
              
              
                <Row style={{marginLeft:'1rem', marginTop:'2rem' ,marginBottom: '3rem'}}>
                    <Col><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">See Project on Github</Card.Link></Col>
                    <Col><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">See Project on Live Site</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                   
                
                </Row>
          </Card>
      </div>

      
      
      <div id='myflix-api' style={{marginTop: '4rem'}}>
           <Card style={{background: '#F2CA52', width: '50rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '19rem', lineHeight: '2.2rem', color: '#fff', fontSize: '2rem', fontFamily: 'Roboto', fontWeight: '800'}}>
                MyFlix API
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '2rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>About the App</p>
                          
                              <img alt='' src={MyFlixAngularImg} style={{ width: '15rem', height: 'auto', }}/>
                              
                            
                                <p style={{marginTop: '3rem', color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>This is a single-page, responsive movie app built with Angular, with routing and several
                              interface views. The client-side is an Angular rendition of a previous project that I built 
                              with React. </p>
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Row> <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab',}}>User Flows and User Stories</p></Row>
                      <Row><p style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>I created user stories and user flows to help guide me as I added features to the app.</p></Row>
                      <Card style={{margin: '2rem'}}>
                      <img id='user-flows' src={UserFlows} alt='' style={{margin: '1rem',}}/>
                      </Card>   
                      <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>Kanban Board</p> 
                      <p style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>I worked with a kanban board to help me keep track of the project from start to finish.</p>
                      
                      </Col>

                </Row>
              
                <Row>

                     <Col  style={{margin: '1rem', marginRight: '8rem'}}>
                       <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>Technical information</p>
                          <ul style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>
                            <li>Written in Angular</li>
                            <li>Contains user registration and login forms</li>
                            <li>Designed using Angular Material</li>
                            <li>Documentation created using Typedoc and JSDoc</li>
                         </ul>
                    </Col>
            
                    <Col style={{marginRight:'2rem'}}>
                    <Row>
                   <Col><img alt='' src={KanbanImgOne} style={{ width: '20rem', height: 'auto', }}/></Col>
                      <Col><img alt='' src={KanbanImgTwo} style={{ width: '20rem', height: 'auto', marginTop:'2rem'}}/></Col>
                          
                          
                    </Row>
                    </Col>

                </Row>
              
              
                <Row style={{marginLeft:'1rem', marginTop:'2rem' ,marginBottom: '3rem'}}>
                    <Col><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">See Project on Github</Card.Link></Col>
                    <Col><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">See Project on Live Site</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                   
                
                </Row>
          </Card>
      </div>

      <div id='titbit' style={{marginTop: '4rem'}}>
           <Card style={{background: '#F2CA52', width: '50rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '19rem', lineHeight: '2.2rem', color: '#fff', fontSize: '2rem', fontFamily: 'Roboto', fontWeight: '800'}}>
                Titbit
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '2rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>About the App</p>
                          
                              <img alt='' src={MyFlixAngularImg} style={{ width: '15rem', height: 'auto', }}/>
                              
                            
                                <p style={{marginTop: '3rem', color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>This is a single-page, responsive movie app built with Angular, with routing and several
                              interface views. The client-side is an Angular rendition of a previous project that I built 
                              with React. </p>
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Row> <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab',}}>User Flows and User Stories</p></Row>
                      <Row><p style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>I created user stories and user flows to help guide me as I added features to the app.</p></Row>
                      <Card style={{margin: '2rem'}}>
                      <img id='user-flows' src={UserFlows} alt='' style={{margin: '1rem',}}/>
                      </Card>   
                      <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>Kanban Board</p> 
                      <p style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>I worked with a kanban board to help me keep track of the project from start to finish.</p>
                      
                      </Col>

                </Row>
              
                <Row>

                     <Col  style={{margin: '1rem', marginRight: '8rem'}}>
                       <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>Technical information</p>
                          <ul style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>
                            <li>Written in Angular</li>
                            <li>Contains user registration and login forms</li>
                            <li>Designed using Angular Material</li>
                            <li>Documentation created using Typedoc and JSDoc</li>
                         </ul>
                    </Col>
            
                    <Col style={{marginRight:'2rem'}}>
                    <Row>
                   <Col><img alt='' src={KanbanImgOne} style={{ width: '20rem', height: 'auto', }}/></Col>
                      <Col><img alt='' src={KanbanImgTwo} style={{ width: '20rem', height: 'auto', marginTop:'2rem'}}/></Col>
                          
                          
                    </Row>
                    </Col>

                </Row>
              
              
                <Row style={{marginLeft:'1rem', marginTop:'2rem' ,marginBottom: '3rem'}}>
                    <Col><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">See Project on Github</Card.Link></Col>
                    <Col><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">See Project on Live Site</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                   
                
                </Row>
          </Card>
      </div>

      <div id='aptly' style={{marginTop: '4rem'}}>
           <Card style={{background: '#F2CA52', width: '50rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '19rem', lineHeight: '2.2rem', color: '#fff', fontSize: '2rem', fontFamily: 'Roboto', fontWeight: '800'}}>
                Aptly
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '2rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>About the App</p>
                          
                              <img alt='' src={MyFlixAngularImg} style={{ width: '15rem', height: 'auto', }}/>
                              
                            
                                <p style={{marginTop: '3rem', color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>This is a single-page, responsive movie app built with Angular, with routing and several
                              interface views. The client-side is an Angular rendition of a previous project that I built 
                              with React. </p>
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Row> <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab',}}>User Flows and User Stories</p></Row>
                      <Row><p style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>I created user stories and user flows to help guide me as I added features to the app.</p></Row>
                      <Card style={{margin: '2rem'}}>
                      <img id='user-flows' src={UserFlows} alt='' style={{margin: '1rem',}}/>
                      </Card>   
                      <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>Kanban Board</p> 
                      <p style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>I worked with a kanban board to help me keep track of the project from start to finish.</p>
                      
                      </Col>

                </Row>
              
                <Row>

                     <Col  style={{margin: '1rem', marginRight: '8rem'}}>
                       <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>Technical information</p>
                          <ul style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>
                            <li>Written in Angular</li>
                            <li>Contains user registration and login forms</li>
                            <li>Designed using Angular Material</li>
                            <li>Documentation created using Typedoc and JSDoc</li>
                         </ul>
                    </Col>
            
                    <Col style={{marginRight:'2rem'}}>
                    <Row>
                   <Col><img alt='' src={KanbanImgOne} style={{ width: '20rem', height: 'auto', }}/></Col>
                      <Col><img alt='' src={KanbanImgTwo} style={{ width: '20rem', height: 'auto', marginTop:'2rem'}}/></Col>
                          
                          
                    </Row>
                    </Col>

                </Row>
              
              
                <Row style={{marginLeft:'1rem', marginTop:'2rem' ,marginBottom: '3rem'}}>
                    <Col><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">See Project on Github</Card.Link></Col>
                    <Col><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">See Project on Live Site</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                   
                
                </Row>
          </Card>
      </div>


      <div id='pokedex' style={{marginTop: '4rem'}}>
           <Card style={{background: '#F2CA52', width: '50rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '19rem', lineHeight: '2.2rem', color: '#fff', fontSize: '2rem', fontFamily: 'Roboto', fontWeight: '800'}}>
                Pokedex
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '2rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>About the App</p>
                          
                              <img alt='' src={MyFlixAngularImg} style={{ width: '15rem', height: 'auto', }}/>
                              
                            
                                <p style={{marginTop: '3rem', color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>This is a single-page, responsive movie app built with Angular, with routing and several
                              interface views. The client-side is an Angular rendition of a previous project that I built 
                              with React. </p>
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Row> <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab',}}>User Flows and User Stories</p></Row>
                      <Row><p style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>I created user stories and user flows to help guide me as I added features to the app.</p></Row>
                      <Card style={{margin: '2rem'}}>
                      <img id='user-flows' src={UserFlows} alt='' style={{margin: '1rem',}}/>
                      </Card>   
                      <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>Kanban Board</p> 
                      <p style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>I worked with a kanban board to help me keep track of the project from start to finish.</p>
                      
                      </Col>

                </Row>
              
                <Row>

                     <Col  style={{margin: '1rem', marginRight: '8rem'}}>
                       <p style={{fontWeight: 'bold', color: '#fff', fontSize: '28px', fontFamily: 'Roboto-Slab'}}>Technical information</p>
                          <ul style={{color: '#fff', fontSize: '24px', fontFamily: 'Roboto-Slab'}}>
                            <li>Written in Angular</li>
                            <li>Contains user registration and login forms</li>
                            <li>Designed using Angular Material</li>
                            <li>Documentation created using Typedoc and JSDoc</li>
                         </ul>
                    </Col>
            
                    <Col style={{marginRight:'2rem'}}>
                    <Row>
                   <Col><img alt='' src={KanbanImgOne} style={{ width: '20rem', height: 'auto', }}/></Col>
                      <Col><img alt='' src={KanbanImgTwo} style={{ width: '20rem', height: 'auto', marginTop:'2rem'}}/></Col>
                          
                          
                    </Row>
                    </Col>

                </Row>
              
              
                <Row style={{marginLeft:'1rem', marginTop:'2rem' ,marginBottom: '3rem'}}>
                    <Col><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">See Project on Github</Card.Link></Col>
                    <Col><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">See Project on Live Site</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                   
                
                </Row>
          </Card>
      </div>


      </div>
            
      </div>
         
    </div>);
    }
  }
  
