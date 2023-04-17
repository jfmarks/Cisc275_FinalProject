import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Group 6 Final Project
        </header>
        <div
                    style={{
                        textAlign: "left"
                    }}
                >
          <ul>
            <li>Quinten Bettin</li>
            <li>Anastasia Donato</li>
            <li>Kareena Keswani</li>
            <li>Logan Levine</li>
            <li>Jacob Marks</li>
            <li>Alex Peluso</li>
          </ul>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
