import React from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import UserSelector from "./UserSelector";
import SearchBar from "./SearchBar";
import Restaurant from "./RestaurantList";

const FixedHeader = () => {
    return (
        <header className="App-Fixed-Header">
            <Button
                style={{
                    position: "absolute",
                    left: 10,
                    top: 8,
                    fontWeight: "bold"
                }}
            >
                List Of Users
            </Button>
            <div style={{ position: "absolute", right: 15, top: 15 }}>
                <UserSelector></UserSelector>
            </div>
            <h1 style={{ fontWeight: "bold" }}>Rate-A-Restaurant! 🍽️</h1>
        </header>
    );
};

export default FixedHeader;
