import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './navbar.scss';
import LogoImage from '../imgs/portfolio-logo.svg';


export default class NavbarView extends React.Component {
    render() {
        return(
<>
<Navbar expand="lg" className='justify-content-between' style={{zIndex: '2'}}>
  <Container>
  <Navbar.Brand href="/">
      <img id='logo-img' src={LogoImage} alt='website logo'  className="d-inline-block align-top" style={{width: '50%', height:'auto', margin:'0.5%'}}/>
  </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
      <Nav className="me-auto navbar-nav ms-auto" style={{float: 'right'}}>
          <Nav.Link href="/" id='home-link' style={{  marginRight: '30px', color: '#000', fontWeight: '400', textTransform: 'lowercase', fontFamily: 'Roboto-Slab', fontSize: '20px', lineHeight: '2px', marginTop:'10px' }}>HOME</Nav.Link>
          <Nav.Link href="/my-portfolio/about" id='about-link' style={{marginRight: '30px', color: '#000', fontWeight: '400', textTransform: 'lowercase', fontFamily: 'Roboto-Slab', fontSize: '20px', lineHeight: '2px', marginTop:'10px' }}>ABOUT</Nav.Link>
          <Nav.Link href="/my-portfolio/webdevelopment" id='webdev-link' style={{marginRight: '30px', color: '#000', fontWeight: '400', textTransform: 'lowercase', fontFamily: 'Roboto-Slab', fontSize: '20px', lineHeight: '2px', marginTop:'10px' }}>WEB DEVELOPMENT</Nav.Link>
          <Nav.Link href="/my-portfolio/uxdesign" id='ux-link' style={{marginRight: '30px', color: '#000', fontWeight: '400', textTransform: 'lowercase', fontFamily: 'Roboto-Slab', fontSize: '20px', lineHeight: '2px', marginTop:'10px' }}>UX DESIGN</Nav.Link>
          <Nav.Link href="/my-portfolio/writing" id='writing-link' style={{marginRight: '30px', color: '#000', fontWeight: '400', textTransform: 'lowercase', fontFamily: 'Roboto-Slab', fontSize: '20px', lineHeight: '2px', marginTop:'10px' }}>WRITING</Nav.Link>
          <Nav.Link href="/my-portfolio/contact" id='contact-link' style={{marginRight: '30px', color: '#000', fontWeight: '400', textTransform: 'lowercase', fontFamily: 'Roboto-Slab', fontSize: '20px', lineHeight: '2px', marginTop:'10px' }}>CONTACT</Nav.Link>
  
          


      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>
        );
    };

}
