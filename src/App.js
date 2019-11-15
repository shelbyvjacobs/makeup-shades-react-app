import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import Body from './components/Body/Body'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1>Makeup Shades</h1>
        <Body />
      </header>
    </div>
  );
}

export default App;
