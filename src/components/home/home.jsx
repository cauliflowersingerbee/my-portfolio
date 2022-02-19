import React from 'react';
import NavbarView from '../navbar/navbar';
import HomeVector from '../imgs/home-vector.svg';
import HomeImage from '../imgs/home-img.svg';
import './home.scss';





export default class HomeView extends React.Component {  
    
    render() {
    
      return (
      <div className='container'>
      <NavbarView className='nav'/>
      
      <img id='home-img' src={HomeImage} alt='' className='image'/>
      <img id='home-vector' src={HomeVector} alt='' className='image'/>
      <div id='home-text'>
            <div>Hi, I'm Okwiri.</div>
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
  