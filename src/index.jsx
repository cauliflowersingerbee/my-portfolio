import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from './components/home/home';
import AboutView from './components/about/about'
import WorkView from './components/work/work'
import ContactView from './components/contact/contact'
import WritingView from './components/writing/writing';
import WebDevView from './components/webdev/webdev';
import UXDesignView from './components/uxdesign/uxdesign';




ReactDOM.render(

  //wrapping whole app in browser router to connect browser URL 
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomeView />} />
        <Route path="about" element={<AboutView />} />
        <Route path="work" element={<WorkView />} />
        <Route path="contact" element={<ContactView />} />
        <Route path="web development" element={<WebDevView />} />
        <Route path="ux design" element={<UXDesignView />} />
        <Route path="writing" element={<WritingView />} />
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



