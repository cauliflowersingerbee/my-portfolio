import React from 'react';
import NavbarView from '../navbar/navbar';
import HomeVector from '../imgs/home-vector.svg';
import HomeImage from '../imgs/home-img.svg';
import './home.scss';
import LogoImage from '../imgs/portfolio-logo.svg';





export default class HomeView extends React.Component {  
    
    render() {
    
      return (
      <div>
      <NavbarView className='primary'/>
      <img id='logo-img' src={LogoImage} alt='' className='primary'/>
      <img id='home-img' src={HomeImage} alt='' className='primary'/>
      <img id='home-vector' src={HomeVector} alt='' className='primary'/>
      <div id='home-text' className='primary'>
            <p>Hi, I'm Okwiri.</p>
                <div id='flip'>
                    <div><div>Writer</div></div>
                    <div><div>Web developer</div></div>
                    <div><div>UX designer</div></div>     
                </div>
                <p>Welcome to my portfolio.</p>
            </div>

        
        
      </div>
      
      );
    }
  }
  