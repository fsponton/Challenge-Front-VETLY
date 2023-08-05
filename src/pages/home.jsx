import React from 'react';
import Profile from './profile';
import { SearchBar } from '../components/home/searchBar';
import { FaUserAlt, FaShoppingBag } from "react-icons/fa";
import { Menu } from '../components/home/menu'
import { LogoutButton } from '../components/home/logoutButon';
import { IniciarSesionButton } from '../components/home/iniciarSessionButton';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
    const { user } = useAuth0()


    console.log("USERRR3", user)
    const handlerSearch = (input) => {
        alert(`Se encontro a: ${input} `)
    }

    return (
        <div className="vh-100 d-flex flex-column" >
            {/* Nav Estático */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container" style={{ color: 'red' }}>
                    {/* Contenido del Nav Estático */}<>NAVVV</>
                </div>
            </nav>

            {/* Espacio para Otro Nav */}
            <div className='col-md-12' style={{ background: '#999' }}>
                <div className="row p-3 d-flex justify-content-between" style={{ maxHeight: `700px!important` }}>
                    <div className="col-md-4 d-flex flex-grow-1">
                        <>ICON</>
                    </div>
                    <div className="col-md-4 d-flex flex-grow-1 justify-content-center">
                        <SearchBar onSearch={handlerSearch} />
                    </div>
                    <div className="col-md-4 d-flex flex-grow-1 justify-content-end">
                        <Profile user={user} />
                        <FaUserAlt onClick={() => alert('redireccion al profile')} className="me-3" size={25} />
                        <FaShoppingBag onClick={() => alert('redireccion al carrito')} size={25} />
                    </div>
                </div>


                <div className='row p-3'>
                    <div className="col-md-6">

                        <>Categorias=</>
                    </div>
                    <div className="col-md-6 d-flex flex-grow-1 justify-content-end">
                        <a href={'/'} className='me-3'>home</a>
                        <IniciarSesionButton />
                        <LogoutButton />
                    </div>
                </div>
            </div>


            {/* Row con 2 Columnas */}
            <div className="row " style={{ background: "#000" }}>

                <div className="col-md-2">
                    <Menu />
                </div>
                <div className="col-md-10">
                    <>PRODUCTOS?</>
                </div>

            </div>
        </div >
    );
};

export default Home;