import React from "react";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

export const NavBar = () => {
    return (
        <nav className="vh-5 navbar navbar-primary bg-primary ">
            <div className="row d-flex " style={{ color: '#fff', marginLeft: '20px' }}>
                <div className="col-md-6 ">
                    <FaPhoneAlt /><span style={{ marginLeft: '10px' }}>+549-1165269434</span>
                    <FaRegEnvelope />
                </div>
                <div className="col-md-6">
                    <FaPhoneAlt /><span style={{ marginLeft: '10px' }}>+549-1165269434</span>
                    <FaRegEnvelope />
                </div>
            </div>
        </nav>
    )
}