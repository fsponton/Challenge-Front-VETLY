import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export const NavBar = () => {
    return (
        <nav className=" navbar navbar-expand-lg navbar-primary bg-primary ">
            <div style={{ color: '#fff', marginLeft: '20px' }}>
                <FaPhoneAlt /><span style={{ marginLeft: '10px' }}>+549-1165269434</span>
            </div>
        </nav>
    )
}