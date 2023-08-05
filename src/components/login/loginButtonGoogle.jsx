import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const LoginButtonGoogle = () => {
  const { loginWithRedirect } = useAuth0();

  const handlerLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  return (<button onClick={handlerLogin} className="btn btn-primary btn-block w-100 " style={{ letterSpacing: '0.3px!important', fontSize: '20px' }}  >Ingresar con google o facebook</button>)
}


