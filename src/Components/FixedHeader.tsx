/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import UserSelector from "./UserSelector";
import { CurrUser } from "../Interfaces";
interface userProp {
    handleUserChange: (newUser: number) => void;
    handleUserAdd: (newUser: CurrUser) => void;
    user: CurrUser;
    users: CurrUser[];
}

const FixedHeader = ({
    handleUserChange,
    user,
    handleUserAdd,
    users
}: userProp) => {
    const [newUsername, setNewUsername] = useState("");

    const handleUsernameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewUsername(event.target.value);
    };
    const handleAddUser = () => {
        const newUser: CurrUser = {
            type: "Foodie",
            username: newUsername,
            id: users.length as unknown as string
        };
        handleUserAdd(newUser);
    };
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
            {user.type === "Critic" && (
                <Button
                    style={{
                        position: "absolute",
                        right: 300,
                        top: 8,
                        fontWeight: "bold"
                    }}
                    disabled={user.type !== "Critic"}
                    onClick={() => handleAddUser()}
                >
                    Add User
                </Button>
            )}
            {user.type === "Critic" && (
                <div
                    style={{
                        position: "absolute",
                        right: 400,
                        top: 8,
                        fontWeight: "bold"
                    }}
                >
                    <input
                        type="text"
                        value={newUsername}
                        onChange={handleUsernameChange}
                        placeholder="Enter username"
                    />
                </div>
            )}
            <div style={{ left: 10, fontSize: 10 }}></div>
            <div style={{ position: "absolute", right: 15, top: 15 }}>
                <UserSelector
                    handleUserChange={handleUserChange}
                    users={users}
                ></UserSelector>
            </div>
        </header>
    );
};

export default FixedHeader;
