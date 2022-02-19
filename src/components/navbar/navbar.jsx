import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './navbar.scss';
import LogoImage from '../imgs/portfolio-logo.svg';


export default class NavbarView extends React.Component {
    render() {
        return(
<>
<Navbar expand="lg" fixed='top' className='justify-content-between'>
  <Container>
  <Navbar.Brand href="/">
      <img id='logo-img' src={LogoImage} alt=''  className="d-inline-block align-top" style={{width: '15%', height:'auto', marginRight: '150px', margin:'10px'}}/>
  </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
      <Nav className="me-auto navbar-nav ms-auto" style={{float: 'right'}}>
          <Nav.Link href="/" id='home-link' style={{ marginRight: '60px', color: '#F2CA52', fontWeight: 'bold', textTransform: 'capitalize', fontFamily: 'Roboto-Slab', fontSize: '12px', lineHeight: '1px' }}>HOME</Nav.Link>
          <Nav.Link href="/my-portfolio/about" id='about-link' style={{marginRight: '60px', color: '#F2CA52', fontWeight: 'bold', textTransform: 'capitalize', fontFamily: 'Roboto-Slab', fontSize: '12px', lineHeight: '1px' }}>ABOUT</Nav.Link>
          <Nav.Link href="/my-portfolio/webdevelopment" id='webdev-link' style={{marginRight: '50px', color: '#F2CA52', fontWeight: 'bold', textTransform: 'capitalize', fontFamily: 'Roboto-Slab', fontSize: '12px', lineHeight: '1px' }}>WEB DEVELOPMENT</Nav.Link>
          <Nav.Link href="/my-portfolio/uxdesign" id='ux-link' style={{marginRight: '60px', color: '#F2CA52', fontWeight: 'bold', textTransform: 'capitalize', fontFamily: 'Roboto-Slab', fontSize: '12px', lineHeight: '1px' }}>UX DESIGN</Nav.Link>
          <Nav.Link href="/my-portfolio/writing" id='writing-link' style={{marginRight: '60px', color: '#F2CA52', fontWeight: 'bold', textTransform: 'capitalize', fontFamily: 'Roboto-Slab', fontSize: '12px', lineHeight: '1px' }}>WRITING</Nav.Link>
          <Nav.Link href="/my-portfolio/contact" id='contact-link' style={{marginRight: '60px', color: '#F2CA52', fontWeight: 'bold', textTransform: 'capitalize', fontFamily: 'Roboto-Slab', fontSize: '12px', lineHeight: '1px' }}>CONTACT</Nav.Link>
  
          


      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
        );
    };

}
