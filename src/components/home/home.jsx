import React from 'react';
import NavbarView from '../navbar/navbar';
import HomeVector from '../imgs/home-vector.svg';
import HomeImage from '../imgs/home-img.svg';
import './home.scss'


//importing svg as react component
//import { ReactComponent as HomeImage} from '../imgs/home-img.svg'
//import { Router } from 'react-router-dom';




export default class HomeView extends React.Component {  
    
    render() {
    
      return (
      <div>
      <NavbarView />
      <img id='home-img' src={HomeImage} alt=''/>
      <img id='home-vector' src={HomeVector} alt=''/>
      <div id='home-text'>
      <p>Hi there, I'm Okwiri</p>
      <p>I'm a writer</p>
      </div>
      
      
      </div>

      );
    }
  }
  