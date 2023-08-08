import React from "react";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-primary bg-primary">
            <div className="row flex-grow-1" style={{ color: '#fff', marginLeft: '20px', marginRight: '20px' }}>
                <div className="col-md-6 d-flex align-items-center align-items-center gap-2">
                    <FaPhoneAlt /><span>+549-1165269434</span>
                    <FaRegEnvelope />
                </div>

                <div className="col-md-6  d-flex justify-content-end align-items-center gap-2">
                    <FaPhoneAlt /><span>+549-1165269434</span>
                    <FaRegEnvelope />
                </div>
            </div>
        </nav>
    )
}