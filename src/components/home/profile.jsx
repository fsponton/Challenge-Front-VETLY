import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const Profile = ({ perfil }) => {
    const { user, isAuthenticated, isLoading } = useAuth0()

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>{
            isAuthenticated && (
                <div className="d-flex  flex-column align-items-center">
                    <img src={user.picture} alt={user.name} style={{ width: '50px', height: '50px', borderRadius: '50px' }} />
                    <span className="m-1" style={{ fontWeight: 'bold' }}>Nombre: {perfil?.name}</span>
                    <span className="m-1" style={{ fontWeight: 'bold' }}>Tipo usuario:  {perfil?.perfil}</span>
                </div>
            )
        }</>
    )
}

