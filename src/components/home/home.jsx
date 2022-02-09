import React from 'react';
import NavbarView from '../navbar/navbar';
import HomeVector from '../imgs/home-vector.svg';
import HomeImage from '../imgs/home-img.svg';
import './home.scss';
import LogoImage from '../imgs/leaf-logo.svg';




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
      <div className='word-carousel'>
          <ul className='text-animation'>
              <li>Writer.</li>
              <li>Web developer.</li>
              <li>UX designer.</li>
          </ul>
      </div>
      <p>Welcome to my portfolio.</p>
      </div>
      
      
      </div>

      );
    }
  }
  