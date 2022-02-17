import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Switch } from 'react-router';
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
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
    <Switch>
        <Route exact path="/" ><HomeView /></Route>
        <Route path="about"><AboutView /></Route>
        <Route path="work/"><WorkView /></Route>
        <Route path="contact"><ContactView /></Route>

        <Route path="work/webdev"><WebDevView /></Route>
              <Route path="work/about"><AboutView /></Route>
              <Route path="work/work" ><WorkView /></Route>
              <Route path="work/contact"><ContactView /></Route>
        <Route path="work/uxdesign"><UXDesignView /></Route>
        <Route path="work/writing"><WritingView /></Route>

    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



