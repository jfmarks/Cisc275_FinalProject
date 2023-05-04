import React from "react";
import "../App.css";
import CurrentUser from "../CurrentUser";
import { Button } from "react-bootstrap";

const FixedHeader = () => {
    return (
        <header className="App-Fixed-Header">
            <Button>List Of Users</Button>
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
