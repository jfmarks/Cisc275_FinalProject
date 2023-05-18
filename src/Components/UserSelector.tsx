/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import userList from "../CurrentUser";

interface userProp {
    handleUserChange: (newUser: number) => void;
}

const UserSelector = ({ handleUserChange }: userProp) => {
    const [userIndex, setUserIndex] = useState<number>(0);

    const handleUserTypeChange = (event: { target: { value: string } }) => {
        setUserIndex(event.target.value as unknown as number);
        handleUserChange(userIndex);
    };
    return (
        <div>
            <label style={{ fontWeight: "bold", fontSize: 17 }}>
                Select user:
                <select
                    value={userList[userIndex].id}
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
