import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import './navbar.scss';


export default class NavbarView extends React.Component {
    render() {
        return(

<Navbar bg="primary" className='Navbar' expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="nav-link">
         
          <ul><Nav.Link href="home">HOME</Nav.Link></ul>
          <ul><Nav.Link href="about" >ABOUT</Nav.Link></ul>
          <ul><Nav.Link href="work" >WORK</Nav.Link></ul>
          <ul><Nav.Link href="contact" >CONTACT</Nav.Link></ul>
          
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        );
    };

}
