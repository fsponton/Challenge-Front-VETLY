import React from "react";
import { useNavigate } from "react-router";

export const SignupButton = () => {
    const navigate = useNavigate()

    const handlerSignUp = async () => {
        navigate('/manual-register-user')
    };

    return (

        <button className="btn" style={{ textDecoration: 'underline', backgroundColor: 'transparent', color: '#C122DF', fontSize: '18px' }} onClick={handlerSignUp}>
            Crear nueva cuenta
        </button>
    );
};