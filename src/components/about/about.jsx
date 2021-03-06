import React from 'react';
import Navbar from '../navbar/navbar';
import './about.scss';
import AboutImage from '../imgs/about-img.svg';
import AboutVector from '../imgs/about-vector.svg';
import Resume from '../imgs/okwiri-oduor-resume-2022.pdf'; 





export default class AboutView extends React.Component {  
    
    render() {
      const  handleClick = () => {
        <a href={Resume} target="_blank" rel="noreferrer">
</a>
      };
  
      return (
      <div>
      <Navbar/>
      <img id='about-img' src={AboutImage} alt='flat illustration of woman lying down with a book facedown on her stomach'/>
      <img id='about-vector' src={AboutVector} alt=''/>
      
        <div id='about-text'>
          <p>ABOUT ME</p>
        <p>I am a fiction writer who, after years of interest in programming, finally scratched 
        the itch and ventured into tech. I now write both stories and 
        code. I like designing user experience too.
        I am skilled in JavaScript, Node.js, React, React Native, and 
          Angular. I am also skilled in UX research, wireframing, prototyping, 
          and usability testing. I enjoy illustrating and using design tools such 
          as Adobe Illustrator and Figma.</p>  
        <p>Designing and creating stories is an important part of my writing work, 
          something I approach with great care and thoughtfulness. I have found
           surprising similarities between story design and software design.</p>
         <p>The empathy and detail with which I craft my fiction characters, I 
           now bring to my personas in the UX design process. The structure of 
           narrative and the meticulousness of grammar, I now bring to the 
           structure and syntax of code. </p>
         <p>I am interested in building software that is human-centered, 
           aesthetic, and useful. </p>
           <p>Here is my <span id='resume' onClick={handleClick} style={{cursor:'pointer', color:'#EF4B68'}}>resume</span>.</p>

        </div>
      </div>
      );
    }
  }
  