import React from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import UserSelector from "./UserSelector";

const FixedHeader = () => {
    return (
        <header className="App-Fixed-Header">
            <Button style={{ position: "absolute", left: 5 }}>
                List Of Users
            </Button>
            <div style={{ position: "absolute", right: 5 }}>
                <UserSelector></UserSelector>
            </div>
            <h1>Rate-A-Restaurant</h1>
        </header>
    );
};

export default FixedHeader;
