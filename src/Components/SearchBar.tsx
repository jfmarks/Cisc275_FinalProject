import React, { useState } from "react";
import { Restaurant } from "../Interfaces";
import "../SearchBar.css";

interface SearchBarProps {
    placeholder: string;
    data: Restaurant[];
}

function SearchBar({ placeholder, data }: SearchBarProps): JSX.Element {
    const [filteredData, setFilteredData] = useState([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleFilter = (event: { target: { value: any } }) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };
    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={handleFilter}
                />
            </div>
            {filteredData.length != 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 5).map((value, key) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div className="dataItem">
                                <p>{value.name}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;