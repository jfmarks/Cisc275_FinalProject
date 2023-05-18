import React from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import UserSelector from "./UserSelector";
import SearchBar from "./SearchBar";
import Restaurant from "./RestaurantList";
import { CurrUser } from "../Interfaces";

interface userProp {
    user: CurrUser;
    handleUserChange: (newUser: number) => void;
}

const FixedHeader = ({ user, handleUserChange }: userProp) => {
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
            <div>
                <SearchBar
                    placeholder="Do we have your restaurant?"
                    data={Restaurant}
                />
            </div>
            <div style={{ position: "absolute", right: 15, top: 15 }}>
                <UserSelector
                    user={user}
                    handleUserChange={handleUserChange}
                ></UserSelector>
            </div>
            <h1 style={{ fontWeight: "bold" }}>Rate-A-Restaurant! 🍽️</h1>
        </header>
    );
};

export default FixedHeader;
