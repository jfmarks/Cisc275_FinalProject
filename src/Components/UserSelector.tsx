import React, { useState } from "react";
import CurrentUser from "../CurrentUser";

const UserSelector = () => {
    const [userType, setUserType] = useState(CurrentUser.type);

    const handleUserTypeChange = (event: { target: { value: string } }) => {
        const newUserType = event.target.value;
        setUserType(newUserType);
        CurrentUser.type = newUserType;
    };

    return (
        <div>
            <label style={{ fontWeight: "bold", fontSize: 17 }}>
                Select user type:{" "}
                <select
                    value={userType}
                    onChange={handleUserTypeChange}
                    style={{ fontWeight: "bold" }}
                >
                    <option value="Critic">Critic</option>
                    <option value="Manager">Manager</option>
                    <option value="Foodie">Foodie</option>
                </select>
            </label>
        </div>
    );
};

export default UserSelector;
