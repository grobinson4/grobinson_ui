import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/NavMenu";
import Posts from "./components/Posts/Posts";
import Scene from './components/scene/scene';



function App() {

  const MyNav = Navigation();
  const MyScene = Scene();


  return (
    <div className="App">
      <MyNav/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
        g.robinson 
        </h1>
        <MyScene/>
        <h2>
         Under Construction  
        </h2>
        {/* <button type="submit" style={{height:'30px', display:'inline-block'}} className="cta-button submit-gif-button">
              Submit
            </button> */}
      </header>
      <div className="footer-container">
          {/* <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} /> */}
        </div>
    
    </div>
  );
}

export default App;
