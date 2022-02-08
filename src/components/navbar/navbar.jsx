import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

export default class NavbarView extends React.Component {
    render() {
        return(
<Navbar bg="primary" className='Navbar' expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
        <Nav.Link href="#about" >About</Nav.Link>
        <Nav.Link href="#work" >Work</Nav.Link>
        <Nav.Link href="#contact" >Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        );
    };

}
