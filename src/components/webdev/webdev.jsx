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

  

      return (
    <div className='container'>
      <div id='navbar'>
        <Navbar/>
        <img id='logo-img' src={LogoImage} alt=''/>
      <div>

      <div id='webdev-links'>
        
        <ul>
          <li><Link to='#myflix-angular' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>MyFlix Angular</Link></li>
          <li><Link to='#myflix-react' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}> MyFlixReact</Link></li>
          <li><Link to='#myflix-api' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor} >MyFlix API</Link></li>
          <li><Link to='#titbit'style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>Titbit</Link></li>
          <li><Link to='#aptly' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>Aptly</Link></li>
          <li><Link to='#pokedex' style={{cursor:'pointer'}} onMouseEnter={changeTextColor} onMouseLeave={returnTextColor}>Pokedex</Link></li>
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
     
    
        <div className='project-cards' style={{display: 'block'}}>
         
        <div id='myflix-angular' >
           <Card style={{background: '#F2CA52', width: '70rem', height: '40rem', marginTop: '2rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '19rem', lineHeight: '2.2rem', color: '#000', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '800'}}>
                MyFlix Angular
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '0.5rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#000', fontSize: '20px', fontFamily: 'Roboto-Slab', lineHeight: '1px'}}>About the App</p>
                            
                            <div>
                            <img alt='' src={MyFlixAngularImg} style={{ width: '15rem', height: 'auto', float: 'left', margin: '1rem'}}/>
                              
                            
                              <p style={{marginTop: '1rem', color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab',}}>This is a single-page, responsive movie app built with Angular, with routing and several
                            interface views. The client-side is an Angular rendition of a previous project that I built 
                            with React. It is designed using Angular Material, with documentation created using Typedoc and JSDoc </p>

                            <Row>
                    <Col><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">Github</Card.Link></Col>
                    <Col><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Live Site</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                 
                </Row>
                            </div>      
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Card style={{margin: '2rem'}}>
                      <img id='user-flows' src={UserFlows} alt='' style={{margin: '.1rem', width: '600px',}}/>
                      </Card>   
                      <Row><p style={{color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab'}}>I created user stories and user flows on Adobe Illustrator. These were crucial in guiding me as I added features to the app. To keep track of the project, I used Kanban boards built with Trello. </p></Row>
                     
                      </Col>

                </Row>
              
               
          </Card> 
          
          
      </div>
     
     

      <div id='myflix-react' >
           <Card style={{background: '#F2CA52', width: '70rem', height: '40rem', marginTop: '2rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '19rem', lineHeight: '2.2rem', color: '#000', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '800'}}>
                MyFlix React
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '0.5rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#000', fontSize: '20px', fontFamily: 'Roboto-Slab', lineHeight: '1px'}}>About the App</p>
                            
                            <div>
                            <img alt='' src={MyFlixAngularImg} style={{ width: '15rem', height: 'auto', float: 'left', margin: '1rem'}}/>
                              
                            
                              <p style={{marginTop: '1rem', color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab',}}>This is a single-page, responsive movie app built with Angular, with routing and several
                            interface views. The client-side is an Angular rendition of a previous project that I built 
                            with React. It is designed using Angular Material, with documentation created using Typedoc and JSDoc </p>

                            <Row>
                    <Col><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">Github</Card.Link></Col>
                    <Col><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Live Site</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                 
                </Row>
                            </div>      
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Card style={{margin: '2rem'}}>
                      <img id='user-flows' src={UserFlows} alt='' style={{margin: '.1rem', width: '600px',}}/>
                      </Card>   
                      <Row><p style={{color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab'}}>I created user stories and user flows on Adobe Illustrator. These were crucial in guiding me as I added features to the app. To keep track of the project, I used Kanban boards built with Trello. </p></Row>
                     
                      </Col>

                </Row>
              
               
          </Card> 
          
          
      </div>


      <div id='titbit' >
           <Card style={{background: '#F2CA52', width: '70rem', height: '40rem', marginTop: '2rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '19rem', lineHeight: '2.2rem', color: '#000', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '800'}}>
                Titbit
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '0.5rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#000', fontSize: '20px', fontFamily: 'Roboto-Slab', lineHeight: '1px'}}>About the App</p>
                            
                            <div>
                            <img alt='' src={MyFlixAngularImg} style={{ width: '15rem', height: 'auto', float: 'left', margin: '1rem'}}/>
                              
                            
                              <p style={{marginTop: '1rem', color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab',}}>This is a single-page, responsive movie app built with Angular, with routing and several
                            interface views. The client-side is an Angular rendition of a previous project that I built 
                            with React. It is designed using Angular Material, with documentation created using Typedoc and JSDoc </p>

                            <Row>
                    <Col><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">Github</Card.Link></Col>
                    <Col><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Live Site</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                 
                </Row>
                            </div>      
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Card style={{margin: '2rem'}}>
                      <img id='user-flows' src={UserFlows} alt='' style={{margin: '.1rem', width: '600px',}}/>
                      </Card>   
                      <Row><p style={{color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab'}}>I created user stories and user flows on Adobe Illustrator. These were crucial in guiding me as I added features to the app. To keep track of the project, I used Kanban boards built with Trello. </p></Row>
                     
                      </Col>

                </Row>
              
               
          </Card> 
          
          
      </div>


      <div id='myflix-api' >
           <Card style={{background: '#F2CA52', width: '70rem', height: '40rem', marginTop: '2rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '19rem', lineHeight: '2.2rem', color: '#000', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '800'}}>
                MyFlix API
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '0.5rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#000', fontSize: '20px', fontFamily: 'Roboto-Slab', lineHeight: '1px'}}>About the App</p>
                            
                            <div>
                            <img alt='' src={MyFlixAngularImg} style={{ width: '15rem', height: 'auto', float: 'left', margin: '1rem'}}/>
                              
                            
                              <p style={{marginTop: '1rem', color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab',}}>This is a single-page, responsive movie app built with Angular, with routing and several
                            interface views. The client-side is an Angular rendition of a previous project that I built 
                            with React. It is designed using Angular Material, with documentation created using Typedoc and JSDoc </p>

                            <Row>
                    <Col><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">Github</Card.Link></Col>
                    <Col><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Live Site</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                 
                </Row>
                            </div>      
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Card style={{margin: '2rem'}}>
                      <img id='user-flows' src={UserFlows} alt='' style={{margin: '.1rem', width: '600px',}}/>
                      </Card>   
                      <Row><p style={{color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab'}}>I created user stories and user flows on Adobe Illustrator. These were crucial in guiding me as I added features to the app. To keep track of the project, I used Kanban boards built with Trello. </p></Row>
                     
                      </Col>

                </Row>
              
               
          </Card> 
          
          
      </div>


      <div id='aptly' >
           <Card style={{background: '#F2CA52', width: '70rem', height: '40rem', marginTop: '2rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '19rem', lineHeight: '2.2rem', color: '#000', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '800'}}>
                Aptly
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '0.5rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#000', fontSize: '20px', fontFamily: 'Roboto-Slab', lineHeight: '1px'}}>About the App</p>
                            
                            <div>
                            <img alt='' src={MyFlixAngularImg} style={{ width: '15rem', height: 'auto', float: 'left', margin: '1rem'}}/>
                              
                            
                              <p style={{marginTop: '1rem', color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab',}}>This is a single-page, responsive movie app built with Angular, with routing and several
                            interface views. The client-side is an Angular rendition of a previous project that I built 
                            with React. It is designed using Angular Material, with documentation created using Typedoc and JSDoc </p>

                            <Row>
                    <Col><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">Github</Card.Link></Col>
                    <Col><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Live Site</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                 
                </Row>
                            </div>      
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Card style={{margin: '2rem'}}>
                      <img id='user-flows' src={UserFlows} alt='' style={{margin: '.1rem', width: '600px',}}/>
                      </Card>   
                      <Row><p style={{color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab'}}>I created user stories and user flows on Adobe Illustrator. These were crucial in guiding me as I added features to the app. To keep track of the project, I used Kanban boards built with Trello. </p></Row>
                     
                      </Col>

                </Row>
              
               
          </Card> 
          
          
      </div>


      <div id='pokedex' >
           <Card style={{background: '#F2CA52', width: '70rem', height: '40rem', marginTop: '2rem'}}>
            <Card.Title style={{margin: '2rem', marginLeft: '19rem', lineHeight: '2.2rem', color: '#000', fontSize: '24px', fontFamily: 'Roboto', fontWeight: '800'}}>
                Pokedex
            </Card.Title>
                <Row>
                        <Col style={{margin: '2rem', marginRight: '0.5rem'}}>
          
                              <p style={{fontWeight: 'bold', color: '#000', fontSize: '20px', fontFamily: 'Roboto-Slab', lineHeight: '1px'}}>About the App</p>
                            
                            <div>
                            <img alt='' src={MyFlixAngularImg} style={{ width: '15rem', height: 'auto', float: 'left', margin: '1rem'}}/>
                              
                            
                              <p style={{marginTop: '1rem', color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab',}}>This is a single-page, responsive movie app built with Angular, with routing and several
                            interface views. The client-side is an Angular rendition of a previous project that I built 
                            with React. It is designed using Angular Material, with documentation created using Typedoc and JSDoc </p>

                            <Row>
                    <Col><Card.Link href="https://github.com/cauliflowersingerbee/myFlix-Angular-client" target="_blank">Github</Card.Link></Col>
                    <Col><Card.Link href="https://cauliflowersingerbee.github.io/myFlix-Angular-client/welcome" target="_blank">Live Site</Card.Link></Col>
                   <Col></Col>
                   <Col></Col>
                 
                </Row>
                            </div>      
          
                      </Col>
                 
                      <Col style={{marginRight:'2rem'}}>
                      <Card style={{margin: '2rem'}}>
                      <img id='user-flows' src={UserFlows} alt='' style={{margin: '.1rem', width: '600px',}}/>
                      </Card>   
                      <Row><p style={{color: '#000', fontSize: '16px', fontFamily: 'Roboto-Slab'}}>I created user stories and user flows on Adobe Illustrator. These were crucial in guiding me as I added features to the app. To keep track of the project, I used Kanban boards built with Trello. </p></Row>
                     
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
  
