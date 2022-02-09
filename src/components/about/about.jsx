import React from 'react';
import Navbar from '../navbar/navbar';
import './about.scss';
import LogoImage from '../imgs/portfolio-logo.svg';
import AboutImage from '../imgs/about-img.svg'
import AboutVector from '../imgs/about-vector.svg'




export default class AboutView extends React.Component {  
    
    render() {
    
      return (
      <div>
      <Navbar/>
      <img id='logo-img' src={LogoImage} alt=''/>
      <img id='about-img' src={AboutImage} alt=''/>
      <img id='about-vector' src={AboutVector} alt=''/>
        <div id='about-text'>
        Hi, I’m Okwiri, a writer, web developer and UX Designer. After years of working as a fiction writer, I've decided to venture into tech. I am skilled in JavaScript, Node.js, React, React Native, and Angular. I am also skilled in UX research, wireframing, prototyping, and usability testing.  
Designing and creating stories is an important part of my writing work, something I approach with great care and thoughtfulness. I have found surprising similarities between story design and software design. The empathy and detail with which I craft my fiction characters, I now bring to my personas in the UX design process. The structure of narrative and the meticulousness of grammar, I now bring to the structure and syntax code. I am interested in building software that is human-centered, aesthetic, and useful.

        </div>
      </div>
      );
    }
  }
  