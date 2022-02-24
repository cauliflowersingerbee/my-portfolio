import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './components/home/home';
import AboutView from './components/about/about'
import ContactView from './components/contact/contact'
import WritingView from './components/writing/writing';
import WebDevView from './components/webdev/webdev';
import UXDesignView from './components/uxdesign/uxdesign';




ReactDOM.render(

  //wrapping whole app in browser router to connect browser URL 
  <React.StrictMode>
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div>
    <Switch>
        <Route exact path="/my-portfolio/" ><HomeView /></Route>
        <Route path="/about"><AboutView /></Route>
        <Route path="/webdevelopment/"><WebDevView /></Route>
        <Route path="/uxdesign"><UXDesignView /></Route>
        <Route path="/writing"><WritingView /></Route>
        <Route path="/contact"><ContactView /></Route>


        

    </Switch>
    </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



