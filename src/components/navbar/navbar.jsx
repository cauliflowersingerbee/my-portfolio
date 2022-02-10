import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import './navbar.scss';


export default class NavbarView extends React.Component {
    render() {
        return(

<Navbar className='Navbar' >
  <Container>
   
      <Nav className="nav-link">
         
          <ul><Nav.Link href="/">HOME</Nav.Link></ul>
          <ul><Nav.Link href="about" >ABOUT</Nav.Link></ul>
          <ul><Nav.Link href="work" >WORK</Nav.Link></ul>
          <ul><Nav.Link href="contact" >CONTACT</Nav.Link></ul>
          
      </Nav>
  </Container>
</Navbar>
        );
    };

}
