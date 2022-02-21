import React from 'react';
import Navbar from '../navbar/navbar';
import './about.scss';
import AboutImage from '../imgs/about-img.svg'
import AboutVector from '../imgs/about-vector.svg'




export default class AboutView extends React.Component {  
    
    render() {
    
      return (
      <div>
      <Navbar/>
      <img id='about-img' src={AboutImage} alt=''/>
      <img id='about-vector' src={AboutVector} alt=''/>
        <div id='about-text'>
          <p>ABOUT ME</p>
        <p>I am a <span style={{color:'#F24968'}}>fiction writer </span> 
        who, after years of interest in programming, finally scratched 
        the itch and ventured into tech. I now write both stories and 
        code. I like designing <span style={{color:'#F24968'}}>user experience too.</span> </p>
        <p>I am skilled in <span style={{color:'#F24968'}}>JavaScript, Node.js, React, React Native, and 
          Angular</span>. I am also skilled in <span style={{color:'#F24968'}}>UX research, wireframing, prototyping, 
          and usability testing</span>.</p>  
        <p>Designing and creating stories is an important part of my writing work, 
          something I approach with great care and thoughtfulness. I have found
           surprising similarities between story design and software design.</p>
         <p>The empathy and detail with which I craft my fiction characters, I 
           now bring to my personas in the UX design process. The structure of 
           narrative and the meticulousness of grammar, I now bring to the 
           structure and syntax of code. </p>
         <p>I am interested in building software that is<span style={{color:'#F24968'}}> human-centered, 
           aesthetic, and useful</span>. </p>

        </div>
      </div>
      );
    }
  }
  