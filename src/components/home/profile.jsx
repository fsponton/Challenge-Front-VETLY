import React from "react";
import { LoadingContext } from '../../contexts/loading-context';
import { useContext } from 'react';
import { ImagenProfile } from "./imagenProfile";

export const Profile = (props) => {
    const { loading } = useContext(LoadingContext)
    const { name, perfil } = props.userData

    if (loading) {
        return <>Loading User...</>
    }

    return (
        <>
            <div className="d-flex  flex-column align-items-center">
                <ImagenProfile perfil={perfil} />
                <span style={{ fontWeight: 'bold' }}>Nombre: {name}</span>
                <span style={{ fontWeight: 'bold' }}>Usuario:  {perfil}</span>
            </div>
        </>

    )
}

