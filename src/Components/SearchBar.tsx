import React, { useState } from "react";
import { Restaurant } from "../Interfaces";

interface SearchBarProps {
    placeholder: string;
    data: Restaurant[];
}

function SearchBar({ placeholder, data }: SearchBarProps): JSX.Element {
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} />
                <div className="searchIcon"></div>
            </div>
            <div className="dataResult"></div>
        </div>
    );
}

export default SearchBar;
