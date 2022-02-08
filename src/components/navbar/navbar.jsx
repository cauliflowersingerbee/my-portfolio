import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import './navbar.scss'

export default class NavbarView extends React.Component {
    render() {
        return(
<Navbar bg="primary" className='Navbar' expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="nav-link">
         
          <ul><Nav.Link href="#home">Home</Nav.Link></ul>
          <ul><Nav.Link href="#about" >About</Nav.Link></ul>
          <ul><Nav.Link href="#work" >Work</Nav.Link></ul>
          <ul><Nav.Link href="#contact" >Contact</Nav.Link></ul>
          
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        );
    };

}
