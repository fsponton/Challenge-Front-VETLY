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
                {/* <img src={user.picture} alt={user.name} style={{ width: '50px', height: '50px', borderRadius: '50px' }} /> */}
                <span className="m-1" style={{ fontWeight: 'bold' }}>Nombre: {name}</span>
                <span className="m-1" style={{ fontWeight: 'bold' }}>Tipo usuario:  {perfil}</span>
            </div>
        </>

    )
}

