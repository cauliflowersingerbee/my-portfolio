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
    <Router >
      <div>
    <Switch>
        <Route exact path="/my-portfolio/" ><HomeView /></Route>
        <Route path="/my-portfolio/about"><AboutView /></Route>
        <Route path="/my-portfolio/my-portfolio/webdevelopment/"><WebDevView /></Route>
        <Route path="/my-portfolio/uxdesign"><UXDesignView /></Route>
        <Route path="/my-portfolio/writing"><WritingView /></Route>
        <Route path="/my-portfolio/contact"><ContactView /></Route>


        

    </Switch>
    </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



