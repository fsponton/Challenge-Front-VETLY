import React, { createContext, useState } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
    const [categorySelected, setCategorySelected] = useState(null)
    return (
        <CategoryContext.Provider value={{ categorySelected, setCategorySelected }}>
            {children}
        </CategoryContext.Provider>
    );
};

export { CategoryContext, CategoryProvider };