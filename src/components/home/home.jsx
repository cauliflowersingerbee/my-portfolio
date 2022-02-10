import React from 'react';
import NavbarView from '../navbar/navbar';
import HomeVector from '../imgs/home-vector.svg';
import HomeImage from '../imgs/home-img.svg';
import './home.scss';
import LogoImage from '../imgs/portfolio-logo.svg';
import { Link } from "react-router-dom";




export default class HomeView extends React.Component {  
    
    render() {
    
      return (
      <div>
      <NavbarView />
      <img id='logo-img' src={LogoImage} alt=''/>
      <img id='home-img' src={HomeImage} alt=''/>
      <img id='home-vector' src={HomeVector} alt=''/>
      <div id='home-text'>
            <p>Hi, I'm Okwiri.</p>
                <div id='flip'>
                    <div><div>Writer</div></div>
                    <div><div>Web developer</div></div>
                    <div><div>UX designer</div></div>     
                </div>
                <p>Welcome to my portfolio.</p>
            </div>

        <Link to="/home">home</Link> |{" "}
        <Link to="/about">about</Link>
        <Link to="/work">work</Link>
        <Link to="/contact">contact</Link>
        <Link to="/landing page">landing page</Link>
        
      </div>

      //adding global navigation
      
      );
    }
  }
  