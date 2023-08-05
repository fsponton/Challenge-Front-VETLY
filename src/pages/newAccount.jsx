import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import iconCliente from '../assets/iconCliente.png'
import iconProfesional from '../assets/iconProfesional.png'
import iconVeterinaria from '../assets/iconVeterinaria.png'
import iconVetly from '../assets/iconVetly.png'

const NewAccount = () => {
    const { user, isLoading } = useAuth0()

    if (isLoading) { return <>Loading...</> }

    return (
        <div className='container' style={{ border: "1px solid #000" }}>
            <div className='row'>
                <div className='col-md-12'>
                    <img src={iconVetly} alt='IconoVetly' style={{ width: '100px', height: '100px' }} />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>EMAIL DE REGISTRACIÓN :  {user.email}</span><br />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Seleccione tipo de usuario:</span>
                </div>
            </div>

            <div className='row mt-5 '>
                <div className='col-md-4 d-flex flex-column align-items-center' style={{ backgroundColor: '#fff' }}>
                    <img src={iconCliente} alt='IconoCliente' /><br />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }} >Cliente</span>
                </div>
                <div className=' mt-2 col-md-4 d-flex flex-column align-items-center'>
                    <img src={iconProfesional} alt="IconoProfesional" /><br />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Profesional</span>
                </div>
                <div className='col-md-4 d-flex flex-column align-items-center'>
                    <img src={iconVeterinaria} alt="IconoVeterinaria" /><br />
                    <span α>Veterinaria</span>
                </div>
            </div>
        </div>
    )
}

export default NewAccount;