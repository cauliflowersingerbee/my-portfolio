import React from 'react';
import Navbar from '../navbar/navbar';
import LogoImage from '../imgs/portfolio-logo.svg';
import WorkImage from '../imgs/work-img.svg';
import WorkVector from '../imgs/work-vector.svg';
import './work.scss';





export default class WorkView extends React.Component {  
    
    render() {
    
      return (
      <div>
      <Navbar/>
      <img id='logo-img' src={LogoImage} alt=''/>
      <img id='work-img' src={WorkImage} alt=''/>
      <img id='work-vector' src={WorkVector} alt=''/>
      </div>
      );
    }
  }
  