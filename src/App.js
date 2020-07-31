import React from 'react';
import logo from './minigram.png';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src={logo} alt="logo"></img>
      </div>
      <h1>User Stories</h1>
      <hr />
      <Post />
    </div>
  );
}

export default App;
