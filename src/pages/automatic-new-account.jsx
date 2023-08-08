import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import iconCliente from '../assets/iconCliente.png'
import iconProfesional from '../assets/iconProfesional.png'
import iconVeterinaria from '../assets/iconVeterinaria.png'
import iconVetly from '../assets/iconVetly.png'
import { useNavigate } from 'react-router'
import registerUser from '../services/registerUser'
import getInfoUser from '../services/get_infoUser'
import { LoadingContext } from '../contexts/loading-context'
import Swal from 'sweetalert2'


const NewAccount = () => {
    const navigate = useNavigate()
    const { user, isLoading } = useAuth0()
    const { setLoading } = useContext(LoadingContext)
    const [userToRegister, setUserToCreate] = useState({
        email: '',
        name: '',
        perfil: ''
    })

    //cuando se ingresa con google/facebook se hace una peticion con el mail de auth0 a la api para ver si existe el user
    useEffect(() => {
        if (isLoading) { return <>Loading...</> }
        try {
            const fetchData = async () => {
                const userData = await getInfoUser(user.email)
                //si retorna null, permite elegir tipo de perfil para crear la cuenta de google/facebook
                //si retorna un usuario, lo redirige al home con su perfil ya registrado en la api. 
                if (userData === null) { return }
                sessionStorage.setItem('session', JSON.stringify(userData))
                navigate('/')
            }
            fetchData()

        } catch (err) {
            return err
        }

        if (user) {
            setUserToCreate({
                ...userToRegister,
                email: user.email,
                name: user.name
            })
        } else {
            navigate('/')
        }
    }, [user, isLoading])

    const handlerSubmitType = async (value) => {
        const form = { ...userToRegister, perfil: value, from: 'google-facebook' }
        const result = await registerUser(form)

        if (result.status === "success") {
            Swal.fire({
                icon: 'success',
                title: 'User registered successfully',
                text: `${result.msg}`
            });
            setLoading(true)
            navigate('/')
            return
        } else {
            Swal.fire({
                icon: 'error',
                title: `User Cant be Register`,
                text: `${result.msg}` // mail ya utilizado si no funciona al querer grabar -- escribir respuesta en el back para tomarla.
            })

        }
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
                    <button onClick={() => handlerSubmitType('cliente')} >
                        <img src={iconCliente} alt='IconoCliente' /><br />
                        <span style={{ fontSize: '20px', fontWeight: 'bold' }} >Cliente</span>
                    </button>
                </div>
                <div className=' mt-2 col-md-4 d-flex flex-column align-items-center'>
                    <button onClick={() => handlerSubmitType('profesional')}>
                        <img src={iconProfesional} alt="IconoProfesional" /><br />
                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Profesional</span>
                    </button>
                </div>
                <div className='col-md-4 d-flex flex-column align-items-center'>
                    <button onClick={() => handlerSubmitType('veterinaria')} >
                        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Veterinaria</p>
                        <img src={iconVeterinaria} alt="IconoVeterinaria" /><br />
                    </button>
                </div>
            </div>
        </div >
    )
}

export default NewAccount;