import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from './components/home/home';
import AboutView from './components/about/about'
import WorkView from './components/work/work'
import ContactView from './components/contact/contact'
import LandingPage from './components/landing-page/landing-page';



ReactDOM.render(

  //wrapping whole app in browser router to connect browser URL 
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomeView />} >
        <Route path="about" element={<AboutView />} />
        <Route path="work" element={<WorkView />} />
        <Route path="contact" element={<ContactView />} />
    </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



