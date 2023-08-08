import React from "react";
import { menuNames } from '../../utils/menuNames.js';

export const Menu = (props) => {
    const { userData } = props
    let arr

    userData !== null ?
        arr = menuNames(userData.perfil)
        : arr = menuNames('invitado')



    // onClick={handlerFilter}
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