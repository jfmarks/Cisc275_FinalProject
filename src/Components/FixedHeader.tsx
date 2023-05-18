import React from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import UserSelector from "./UserSelector";
import { CurrUser } from "../Interfaces";

interface userProp {
    user: CurrUser;
    handleUserChange: (newUser: number) => void;
}

const FixedHeader = ({ user, handleUserChange }: userProp) => {
    return (
        <header className="App-Fixed-Header">
            <p
                style={{
                    fontWeight: "bold",
                    fontSize: 40,
                    position: "absolute",
                    left: 10
                }}
            >
                Rate-A-Restaurant! 🍽️
            </p>
            <Button
                style={{
                    position: "absolute",
                    right: 300,
                    top: 8,
                    fontWeight: "bold"
                }}
            >
                List Of Users
            </Button>
            <div style={{ left: 10, fontSize: 10 }}></div>
            <div style={{ position: "absolute", right: 15, top: 15 }}>
                <UserSelector
                    user={user}
                    handleUserChange={handleUserChange}
                ></UserSelector>
            </div>
        </header>
    );
};

export default FixedHeader;
