import React, { useState } from "react";
import CurrentSort from "../CurrentSort";

interface editProp {
    edit: boolean;
}

const SortSelector = ({ edit }: editProp) => {
    const [sortType, setSortType] = useState(CurrentSort.type);

    const handleSortChange = (event: { target: { value: string } }) => {
        const newSort = event.target.value;
        setSortType(newSort);
        CurrentSort.type = newSort;
    };

    return (
        <div>
            <select
                disabled={!edit}
                value={sortType}
                onChange={handleSortChange}
                style={{ fontSize: 12 }}
            >
                <option value="alphabetical">A-Z</option>
                <option value="highToLow">Rating High-Low</option>
            </select>
        </div>
    );
};

export default SortSelector;
