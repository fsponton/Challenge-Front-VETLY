import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  return <button onClick={handleLogin} className="btn btn-primary" >Ingresar con google o facebook</button>
}

