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
     
      <div className='project-grid' >
        
        <div className='angular' >
           <Card style={{background: '#F2CA52',}}>
            <Card.Title style={{margin: '2rem', marginLeft: '30rem', lineHeight: '2.2rem', color: '#fff', fontSize: '3rem', fontFamily: 'Roboto', fontWeight: '800'}}>
                MyFlix Angular
            </Card.Title>
                <Row>
                  <Col style={{margin: '1rem', marginRight: '8rem'}}>
                        <p><h6>About App</h6></p>
                        <img alt='' src={MyFlixAngularImg} style={{ width: '20rem', height: 'auto', margin: '1rem', float: 'left', border: '10px solid #fff'}}/>
                        This is a single-page, responsive movie app built with Angular, with routing and several
                        interface views. The client-side is an Angular rendition of a previous project that was built 
                        with React. 
                 </Col>
                </Row>
                <Row>
                 <Col>
                 <p><h6>User Flows and User Stories</h6></p>
                    <Card style={{margin: '2rem'}}>
                    <img id='user-flows' src={UserFlows} alt='' style={{margin: '2rem'}}/>
                    </Card>    
                </Col>
               
                <Col>
                    <p><h6>Kanban Board</h6> </p>
                </Col>
                </Row>
              
                <Row>
                    <Col  style={{margin: '1rem', marginRight: '8rem'}}>
                    <p>
                    <h6 style={{lineHeight: '3rem'}}>Technical information</h6>
                    </p>
                    <ul>
                        <li>Written in Angular</li>
                        <li>Contains user registration and login forms</li>
                        <li>Designed using Angular Material</li>
                        <li>Documentation created using Typedoc and JSDoc</li>
                    </ul>
                   
                    </Col>
                </Row>
                <Row>
               

                
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                
                </Row>
                </Card>
      </div>

      <div>
      <Card >
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Titbit</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
      </div>

      <div>
      <Card >
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Aptly</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
      </div>
      
      <div>
      <Card >
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>MyFlix React</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
      </div>

      <div>
      <Card>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>MyFlix API</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
      </div>

      <div>
      <Card >
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Pokedex App</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
      </div>

      </div>

      </div>
            
      </div>
      <p id='my-projects-text'>My Projects</p>
     
     
         
         
    </div>);
    }
  }
  
