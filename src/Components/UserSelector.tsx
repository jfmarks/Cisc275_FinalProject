/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import userList from "../CurrentUser";
import { CurrUser } from "../Interfaces";

interface userProp {
    handleUserChange: (newUser: number) => void;
    users: CurrUser[];
}

const UserSelector = ({ handleUserChange, users }: userProp) => {
    const [userIndex, setUserIndex] = useState<number>(0);

    const handleUserTypeChange = (event: { target: { value: string } }) => {
        handleUserChange(event.target.value as unknown as number);
        setUserIndex(event.target.value as unknown as number);
    };
    return (
        <div>
            <label style={{ fontWeight: "bold", fontSize: 15 }}>
                Select user:{" "}
                <select
                    value={userList[userIndex].id}
                    onChange={handleUserTypeChange}
                    style={{ fontWeight: "bold" }}
                >
                    {users.map((UserOption) => (
                        <option key={UserOption.id} value={UserOption.id}>
                            {UserOption.type} {": "} {UserOption.username}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default UserSelector;
