import React from "react";
import "./App.css";
import { HomePage } from "./Components/HomePage";
import { Restaurant } from "./Components/Restaurant";
import { UserRestaurants } from "./Components/UserRestaurants";

function App() {
    return (
        <div className="App">
            <header className="App-header">Team 6 Final</header>
            <div
                style={{
                    textAlign: "left"
                }}
            >
                <h1>Group Members</h1>
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
            <p>
                <Restaurant></Restaurant>
            </p>
            <p>
                <UserRestaurants></UserRestaurants>
            </p>
        </div>
    );
}

export default App;
