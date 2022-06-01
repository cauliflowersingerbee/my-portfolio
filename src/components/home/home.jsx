import React from 'react';
import NavbarView from '../navbar/navbar';
import HomeVector from '../imgs/home-vector.svg';
import HomeImage from '../imgs/home-img.svg';
import './home.scss';





export default class HomeView extends React.Component {  
    
    render() {
      console.log('Welcome!')
    
      return (
      <div className='container'>
      <NavbarView className='nav'/>
      
      <img id='home-img' src={HomeImage} alt='flat illustration of woman with laptop sitting at desk' className='image'/>
      <img id='home-vector' src={HomeVector} alt='' className='image'/>
      <div id='home-text'>
            <p>Hi, I'm Okwiri.</p>
                <div id='flip'>
                    <div><div>Writer</div></div>
                    <div><div>Web developer</div></div>
                    <div><div>UX designer</div></div>     
                </div>
                <p>Welcome to my <span style={{color:'#F24968'}}>portfolio.</span></p>
            </div>

        
        
      </div>
      
      );
    }
  }
  