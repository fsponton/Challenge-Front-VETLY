
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const SignupButton = () => {
    const { loginWithRedirect } = useAuth0();

    const handlerSignUp = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/",
            },
            authorizationParams: {
                screen_hint: "signup",
            },
        });
    };

    return (
        <button className="btn btn-dark " style={{ letterSpacing: '0.3px' }} onClick={handlerSignUp}>
            Crear Cuenta
        </button>
    );
};