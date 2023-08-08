import React from 'react'
import iconCliente from '../../assets/iconCliente.png'
import iconProfesional from '../../assets/iconProfesional.png'
import iconVeterinaria from '../../assets/iconVeterinaria.png'



export const ImagenProfile = ({ perfil }) => {

    let icon = ''

    if (perfil === 'cliente') {
        icon = iconCliente
    } else if (perfil === 'profesional') {
        icon = iconProfesional
    } else if (perfil === 'veterinaria') {
        icon = iconVeterinaria
    }

    return (
        <img src={icon} alt={icon} style={{ width: '50px', height: '50px', borderRadius: '50px' }} />
    )
}
