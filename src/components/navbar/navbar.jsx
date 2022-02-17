import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import './navbar.scss';


export default class NavbarView extends React.Component {
    render() {
        return(

<Navbar className='Navbar' >
  <Container>
   
      <Nav className="nav-link">
         
          <ul ><Nav.Link href="/" id='home-link'>home</Nav.Link></ul>
          <ul><Nav.Link href="/my-portfolio/about" id='about-link'>about</Nav.Link></ul>
          <ul><Nav.Link href="/my-portfolio/webdevelopment" id='webdev-link'>web development</Nav.Link></ul>
          <ul><Nav.Link href="/my-portfolio/uxdesign" id='ux-link'>ux design</Nav.Link></ul>
          <ul><Nav.Link href="/my-portfolio/writing" id='writing-link'>writing</Nav.Link></ul>
          <ul><Nav.Link href="/my-portfolio/contact" id='contact-link'>contact</Nav.Link></ul>
          
      </Nav>
  </Container>
</Navbar>
        );
    };

}
