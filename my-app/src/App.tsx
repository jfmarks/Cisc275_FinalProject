import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Restaurant } from "./Components/Restaurant"

function App() : JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
      <Restaurant></Restaurant>
      </header>
    </div>
  );
}

export default App;
