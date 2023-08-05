import React from "react";
import { useNavigate } from "react-router";

export const IniciarSesionButton = () => {
    const navigate = useNavigate()

    const handlerLogin = () => {
        navigate('/login')
    };
    return (
        <button onClick={handlerLogin}>inciar sesion</button>
    )
}
