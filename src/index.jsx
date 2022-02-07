import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeView from './components/home/home';

//ReactDOM.render(
  //<React.StrictMode>
    //<HomeView />
  //</React.StrictMode>,
  //document.getElementById('root')
//);



class MyPortfolio extends React.Component {
  render() {
    return (
      <HomeView />
   );
  }
}



// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyPortfolio), document.getElementsById('root'));
