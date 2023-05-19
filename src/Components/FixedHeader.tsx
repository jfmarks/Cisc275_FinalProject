import React, { useState } from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import UserSelector from "./UserSelector";
import userList from "../CurrentUser";
import { CurrUser } from "../Interfaces";
interface userProp {
    handleUserChange: (newUser: number) => void;
    user: CurrUser;
    users: CurrUser[];
}

const FixedHeader = ({ handleUserChange, user }: userProp) => {
    const [users, setUsers] = React.useState(userList);
    const [showInput, setShowInput] = useState(false);
    const [newUsername, setNewUsername] = useState("");

    const addUser = () => {
        const newUser: CurrUser = {
            id: (userList.length + 1) as unknown as string,
            username: "",
            type: "Foodie"
        };

        setUsers([...users, newUser]);
        setShowInput(true);
    };
    const handleUsernameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewUsername(event.target.value);
    };
    const saveUsername = () => {
        const updatedUsers = [...users];
        const newUser = updatedUsers[updatedUsers.length - 1];
        newUser.username = newUsername;
        setUsers(updatedUsers);
        setShowInput(false);
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
            <Button
                style={{
                    position: "absolute",
                    right: 300,
                    top: 8,
                    fontWeight: "bold"
                }}
                disabled={user.type !== "Critic"}
                onClick={() => addUser()}
            >
                Add User
            </Button>
            {showInput && (
                <div>
                    <input
                        type="text"
                        value={newUsername}
                        onChange={handleUsernameChange}
                        placeholder="Enter username"
                    />
                    <Button variant="primary" onClick={saveUsername}>
                        Save
                    </Button>
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
