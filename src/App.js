import React from 'react';
import logo from './minigram.png';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src={logo} alt="logo"></img>
      </div>
      <h1>Starter</h1>

    </div>
  );
}

export default App;
