import React, { useState } from "react";


export const SearchBar = ({ onSearch }) => {
    const [input, setSearchInput] = useState()

    const handlerInputChange = ({ target: { value } }) => {
        setSearchInput(value)
    }

    const handlerSearch = () => {
        onSearch(input)
    }

    return (
        <div className="input-group">
            <input
                type="text"
                className="form-control"
                placeholder="Buscar..."
                value={input}
                onChange={handlerInputChange}
            />
            <button className="btn btn-primary" onClick={handlerSearch}>
                Buscar
            </button>
        </div>
    );
}