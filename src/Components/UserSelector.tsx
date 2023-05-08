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
            <label>
                Select user type:
                <select value={userType} onChange={handleUserTypeChange}>
                    <option value="Critic">Critic</option>
                    <option value="Manager">Manager</option>
                    <option value="Foodie">Foodie</option>
                </select>
            </label>
        </div>
    );
};

export default UserSelector;
