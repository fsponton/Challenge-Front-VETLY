import React from 'react';
import { Profile } from '../components/home/profile';
import { SearchBar } from '../components/home/searchBar';
import { FaUserAlt, FaShoppingBag } from "react-icons/fa";
import { Menu } from '../components/home/menu'
import { LogoutButton } from '../components/home/logoutButon';
import { IniciarSesionButton } from '../components/home/iniciarSessionButton';
import { useAuth0 } from '@auth0/auth0-react';
import { NavBar } from '../components/home/navBar';
import iconVetly from '../assets/iconVetly.png'

const Home = () => {
    const { user, isAuthenticated } = useAuth0()

    const handlerSearch = (input) => {
        alert(`Se encontro a: ${input} `)
    }

    //userCreated captura la info de un usuario recien creado
    let userCreated = sessionStorage.getItem('userCreated')
    userCreated = JSON.parse(userCreated)
    console.log('usercreated', userCreated)

    if (user && userCreated) {
        const userJSON = JSON.stringify(userCreated)
        sessionStorage.setItem('session', userJSON)
    } else if (user) {
        const userJSON = JSON.stringify(user)
        sessionStorage.setItem('session', userJSON)
    } else {
        sessionStorage.removeItem('session')
    }

    const INFO = sessionStorage.getItem('session')

    console.log('info', INFO)

    return (
        <>
            <NavBar />
            <div className="vh-100 d-flex flex-column" style={{ margin: '0', padding: '0', overflow: 'hidden' }}>

                {/* Espacio para Otro Nav */}

                <div className='col-md-12' style={{ background: '#999' }}>
                    <div className="row p-3 d-flex justify-content-between">
                        <div className="col-md-4 d-flex flex-grow-1">
                            <img src={iconVetly} alt="IconoVetly" style={{ widh: '30px', height: '60px' }} />
                        </div>
                        <div className="col-md-4 d-flex flex-grow-1 justify-content-center">
                            <SearchBar onSearch={handlerSearch} />
                        </div>
                        <div className="col-md-4 d-flex flex-grow-1 justify-content-end align-items-center">
                            {isAuthenticated ?
                                <Profile user={user} /> :
                                <FaUserAlt onClick={() => alert('redireccion al profile')} className="me-3" size={30} />
                            }
                            <FaShoppingBag onClick={() => alert('redireccion al carrito')} size={30} />
                        </div>
                    </div>


                    <div className='row p-3'>
                        <div className="col-md-6">

                            <>Categorias=</>
                        </div>
                        <div className="col-md-6 d-flex flex-grow-1 justify-content-end">
                            <a href={'/'} className='me-3'>home</a>
                            {isAuthenticated ? <LogoutButton /> : <IniciarSesionButton />}

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
        </>
    );
};

export default Home;