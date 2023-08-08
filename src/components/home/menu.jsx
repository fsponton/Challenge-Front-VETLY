import React, { useContext } from "react";
import { menuNames } from '../../utils/menuNames.js';
import { CategoryContext } from "../../contexts/category-selected-context.jsx";


export const Menu = (props) => {
    const { userData } = props
    const { setCategorySelected } = useContext(CategoryContext)

    let arr

    userData !== null ?
        arr = menuNames(userData.perfil)
        : arr = menuNames('invitado')


    const handlerFilter = (e) => {
        const { id } = e.target
        setCategorySelected(id)
    }

    return (
        <div className="container">
            <ul className="list-group">
                {arr.map((item, index) => (
                    <li key={index} onClick={handlerFilter} id={item} style={{ cursor: 'pointer' }} className="list-group-item list-group-item-action list-group-item-dark">{item}</li>
                ))}
            </ul>
        </div>
    )
}