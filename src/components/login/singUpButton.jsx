
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const SignupButton = () => {
    const { loginWithRedirect } = useAuth0();

    const handlerSignUp = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/new-account",
            },
            authorizationParams: {
                screen_hint: "signup",
            },
        });
    };

    return (

        <button className="btn" style={{ textDecoration: 'underline', backgroundColor: 'transparent', color: '#C122DF', fontSize: '18px' }} onClick={handlerSignUp}>
            Crear nueva cuenta
        </button>
    );
};