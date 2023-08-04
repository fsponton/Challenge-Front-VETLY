import React from 'react';
import SearchBar from './components/searchBar';
import { FaUserAlt } from "react-icons/fa";

const Index = () => {


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
            <div className=" p-3 d-flex justify-content-between" style={{ background: "red", maxHeight: `700px!important` }}>
                <div className="col-md-4 d-flex flex-grow-1">
                    {/* Contenido de la Columna 1 */}<>ICON</>
                </div>
                <div className="col-md-4 d-flex flex-grow-1 justify-content-center">
                    {/* Contenido de la Columna 2 */}
                    <SearchBar onSearch={handlerSearch} />
                </div>
                <div className="col-md-4 d-flex flex-grow-1 justify-content-end">
                    {/* Contenido de la Columna 3 */}
                    <FaUserAlt onClick={alert('ir al profile')} />
                </div>
            </div>
            <div className='row p-3'>
                <div className="col-md-6">
                    {/* Contenido de la Columna 1 */}
                    <>Categorias=</>
                </div>
                <div className="col-md-6 d-flex flex-grow-1 justify-content-end">
                    {/* Contenido de la Columna 2 */}
                    <>home</>
                    <>iniciar sesion</>
                </div>
            </div>


            {/* Row con 2 Columnas */}
            <div className="container mt-4">

                <div className="col-md-6">
                    {/* Contenido de la Columna 1 */}
                    <>LIST DEPENDIENDO PERFIL</>
                </div>
                <div className="col-md-6">
                    {/* Contenido de la Columna 2 */}
                    <>PRODUCTOS?</>
                </div>

            </div>
        </div >
    );
};

export default Index;