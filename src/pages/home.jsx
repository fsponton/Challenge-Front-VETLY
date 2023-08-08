import React, { useContext, useEffect } from 'react';
import { Profile } from '../components/home/profile';
import { SearchBar } from '../components/home/searchBar';
import { FaUserAlt, FaShoppingBag } from "react-icons/fa";
import { Menu } from '../components/home/menu'
import { LogoutButton } from '../components/home/logoutButon';
import { IniciarSesionButton } from '../components/home/iniciarSessionButton';
import { NavBar } from '../components/home/navBar';
import iconVetly from '../assets/iconVetly.png'
import { LoadingContext } from '../contexts/loading-context';
import { useAuth0 } from '@auth0/auth0-react';
import { DropdownCategories } from '../components/home/dropDownCategories';
import { Main } from '../components/home/main';
import { CategoryContext } from '../contexts/category-selected-context';
import { GoHome } from '../components/home/goHome';

const Home = () => {
    const { isLoading } = useAuth0()
    const { setLoading } = useContext(LoadingContext)
    const { categorySelected, setCategorySelected } = useContext(CategoryContext)

    const handlerSearch = (input) => {
        alert(`request al back para buscar: ${input} o al redux si se trajo info con el login`)
    }

    const userDataToParse = sessionStorage.getItem('session')
    const userData = JSON.parse(userDataToParse)


    useEffect(() => {
        if (isLoading) { setLoading(true) }
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [userData])


    return (
        <>
            <NavBar />
            <div className="vh-100 d-flex flex-column" style={{ margin: '0', padding: '0', overflow: 'hidden' }}>
                <div className='col-md-12' style={{ background: '#999' }}>
                    <div className="row p-3 d-flex justify-content-between">
                        <div className="col-md-4 d-flex flex-grow-1">
                            <img src={iconVetly} alt="IconoVetly" style={{ widh: '30px', height: '60px' }} />
                        </div>
                        <div className="col-md-4 d-flex align-items-center">
                            <SearchBar onSearch={handlerSearch} />
                        </div>
                        <div className="col-md-4 d-flex flex-grow-1 justify-content-end align-items-center">
                            {userData ?
                                <Profile userData={userData} /> :
                                <FaUserAlt onClick={() => alert('redireccion al profile')} className="me-3" size={30} />
                            }
                            <FaShoppingBag onClick={() => alert('redireccion al carrito')} size={30} />
                        </div>
                    </div>


                    <div className='row p-3'>
                        <div className="col-md-6">
                            <DropdownCategories />
                        </div>
                        <div className="col-md-6 d-flex flex-grow-1 justify-content-end">
                            <GoHome />
                            {userData ? <LogoutButton /> : <IniciarSesionButton />}
                        </div>
                    </div>
                </div>

                <div className="row mt-3" style={{ background: "#fff" }}>
                    <div className="col-md-2">
                        <Menu userData={userData} categorySelected={categorySelected} setCategorySelected={setCategorySelected} />
                    </div>
                    <div className="col-md-10 ">
                        <Main categorySelected={categorySelected} />
                    </div>
                </div>
            </div >
        </>
    );
};

export default Home;