import React from "react";
import { menuNames } from '../../utils/menuNames.js';

export const Menu = () => {
    const arr = menuNames('invitado')
    return (
        <div className="container">
            <ul className="list-group">
                {arr.map((item, index) => (
                    <li key={index} className="list-group-item">{item}</li>
                ))}
            </ul>
        </div>
    )
}