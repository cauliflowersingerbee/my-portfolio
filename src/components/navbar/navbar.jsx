import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './navbar.scss';
import LogoImage from '../imgs/portfolio-logo.svg';


export default class NavbarView extends React.Component {
    render() {
        return(

<Navbar className='Navbar' expand="lg">
  <Container>
  <Navbar.Brand href="#home">
      <img id='logo-img' src={LogoImage} alt='' className='image' style={{width: '8rem', height:'auto'}}/>
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>
         
          <Nav.Link href="/" id='home-link'>home</Nav.Link>
          <Nav.Link href="/my-portfolio/about" id='about-link'>about</Nav.Link>
          <Nav.Link href="/my-portfolio/webdevelopment" id='webdev-link'>web development</Nav.Link>
          <Nav.Link href="/my-portfolio/uxdesign" id='ux-link'>ux design</Nav.Link>
          <Nav.Link href="/my-portfolio/writing" id='writing-link'>writing</Nav.Link>
          <Nav.Link href="/my-portfolio/contact" id='contact-link'>contact</Nav.Link>
          
      </Nav>
      </Navbar.Collapse>
  </Container>
</Navbar>
        );
    };

}
