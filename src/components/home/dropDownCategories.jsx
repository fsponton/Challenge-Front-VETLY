import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { menuNames } from '../../utils/menuNames';
import { CategoryContext } from '../../contexts/category-selected-context';

export const DropdownCategories = () => {
    const arr = menuNames('allCategories')
    const { setCategorySelected } = useContext(CategoryContext)

    const handlerFilter = (e) => {
        const { id } = e.target
        setCategorySelected(id)
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                categorias
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {arr.map((option, index) => (
                    <Dropdown.Item key={index} id={option} onClick={handlerFilter}>
                        {option}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown >
    );
};
