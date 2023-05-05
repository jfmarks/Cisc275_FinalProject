import React, { useState } from "react";
import "../App.css";
import CurrentUser from "../CurrentUser";
import { Button } from "react-bootstrap";
import UserSelector from "./UserSelector";
import { left } from "@popperjs/core";

const FixedHeader = () => {
    return (
        <header className="App-Fixed-Header">
            <Button style={{ position: "absolute", left: 5 }}>
                List Of Users
            </Button>
            <div style={{ position: "absolute", right: 5 }}>
                <UserSelector></UserSelector>
            </div>
        </header>
    );
};

export default FixedHeader;
