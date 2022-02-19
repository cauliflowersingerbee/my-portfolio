import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './navbar.scss';
import LogoImage from '../imgs/portfolio-logo.svg';


export default class NavbarView extends React.Component {
    render() {
        return(
<>
<Navbar expand="lg" fixed='top'>
  <Container>
  <Navbar.Brand href="#home">
      <img id='logo-img' src={LogoImage} alt=''  className="d-inline-block align-top" style={{width: '9rem', height:'auto'}}/>
  </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
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
</>
        );
    };

}
