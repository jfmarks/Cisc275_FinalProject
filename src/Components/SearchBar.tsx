import React, { useState } from "react";
import { Restaurant } from "../Interfaces";
import "./SearchBar.css";

interface SearchBarProps {
    placeholder: string;
    data: Restaurant[];
}

function SearchBar({ placeholder, data }: SearchBarProps): JSX.Element {
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} />
            </div>
            <div className="dataResult">
                {data.map((value, key) => {
                    return <div></div>;
                })}
            </div>
        </div>
    );
}

export default SearchBar;
