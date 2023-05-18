/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { CurrUser } from "../Interfaces";
import userList from "../CurrentUser";

interface userProp {
    user: CurrUser;
    handleUserChange: (newUser: number) => void;
}

const UserSelector = ({ user, handleUserChange }: userProp) => {
    const [userIndex, setUserIndex] = useState<number>(0);

    const handleUserTypeChange = (event: { target: { value: string } }) => {
        setUserIndex(event.target.value as unknown as number);
        handleUserChange(userIndex);
    };
    return (
        <div>
            <label style={{ fontWeight: "bold", fontSize: 15 }}>
                Select user:{" "}
                <select
                    value={user.id}
                    onChange={handleUserTypeChange}
                    style={{ fontWeight: "bold" }}
                >
                    {userList.map((UserOption) => (
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
