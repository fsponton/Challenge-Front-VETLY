import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import iconCliente from '../assets/iconCliente.png'
import iconProfesional from '../assets/iconProfesional.png'
import iconVeterinaria from '../assets/iconVeterinaria.png'
import iconVetly from '../assets/iconVetly.png'
import { useNavigate } from 'react-router'

const NewAccount = () => {
    const navigate = useNavigate()
    const { user, isLoading } = useAuth0()
    const [userToCreate, setUserToCreate] = useState({
        email: '',
        name: '',
        picture: '',
        type_user: ''

    })

    useEffect(() => {
        if (isLoading) { return <>Loading...</> }

        if (user) {
            setUserToCreate({
                ...userToCreate,
                email: user.email,
                name: user.name,
                picture: user.picture
            })
        } else {
            navigate('/')
        }
    }, [user, isLoading, navigate])

    const handlerType = (event) => {
        const { value } = event.target
        setUserToCreate({ ...userToCreate, type_user: value })
        //request a api para guardar la info del user, guardo en sessionStorage

        sessionStorage.setItem('userCreated', JSON.stringify(userToCreate))
        navigate('/')

    }
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
                    <button>
                        <img src={iconCliente} alt='IconoCliente' /><br />
                        <span style={{ fontSize: '20px', fontWeight: 'bold' }} >Cliente</span>
                    </button>
                </div>
                <div className=' mt-2 col-md-4 d-flex flex-column align-items-center'>
                    <button>
                        <img src={iconProfesional} alt="IconoProfesional" /><br />
                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Profesional</span>
                    </button>
                </div>
                <div className='col-md-4 d-flex flex-column align-items-center'>
                    <button onClick={handlerType} name="veterinaria" id="veterinaria" value='veterinaria'>
                        <img src={iconVeterinaria} alt="IconoVeterinaria" /><br />
                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Veterinaria</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewAccount;