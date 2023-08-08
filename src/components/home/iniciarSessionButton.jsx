import React from "react";
import { useNavigate } from "react-router";

export const IniciarSesionButton = () => {
    const navigate = useNavigate()

    const handlerLogin = () => {
        navigate('/login')
    };
    return (
        <button className="btn btn-primary" onClick={handlerLogin}>iniciar sesion</button>
    )
}
