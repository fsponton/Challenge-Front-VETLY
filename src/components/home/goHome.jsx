import React from 'react'
import { useNavigate } from 'react-router'


export const GoHome = () => {
    const navigate = useNavigate()

    const handlerRedirect = () => {
        navigate('/')
    }

    return (
        <button className='btn btn-warning mx-2' onClick={handlerRedirect}>Inicio</button>
    )
}
