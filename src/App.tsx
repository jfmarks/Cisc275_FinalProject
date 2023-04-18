import React from "react";
import "./App.css";
import { HomePage } from "./Components/HomePage";

function App() {
    return (
        <div className="App">
            <header className="App-header">Group 6 Final Project</header>
            <div
                style={{
                    textAlign: "left"
                }}
            >
                <h1>Group Members:</h1>
                <ul>
                    <li>Quinten Bettin</li>
                    <li>Anastasia Donato</li>
                    <li>Kareena Keswani</li>
                    <li>Logan Levine</li>
                    <li>Jacob Marks</li>
                    <li>Alex Peluso</li>
                </ul>
            </div>
            <p>
                <HomePage></HomePage>
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
