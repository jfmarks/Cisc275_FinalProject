import React from "react";
import "../App.css";
import CurrentUser from "../CurrentUser";

const FixedHeader = () => {
    return (
        <header className="App-Fixed-Header">
            <label>
                Select User Type:
                <select>
                    <option value="Critic">Critic</option>
                    <option value="Manager">Manager</option>
                    <option value="Foodie">Foodie</option>
                </select>
            </label>
        </header>
    );
};

export default FixedHeader;
