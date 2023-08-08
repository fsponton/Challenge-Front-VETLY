import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import { menuNames } from '../../utils/menuNames';

export const DropdownCategories = () => {
    const arr = menuNames('allCategories')

    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Menú
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {arr.map((option, index) => (
                    <Dropdown.Item key={index} href={`#/action-${index + 1}`}>
                        {option}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
