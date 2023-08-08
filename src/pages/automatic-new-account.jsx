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
                text: `${result.msg}`
            })
        }
    }
    return (
        <div className='h-100 d-flex justify-content-center align-items-center '>
            <div className='container' style={{ border: "3px solid #999" }}>
                <div className='row'>
                    <div className='col-md-12 p-3'>
                        <img src={iconVetly} alt='IconoVetly' style={{ width: '100px', height: '100px' }} /><br />
                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Email de registracion :  {user.email}</span><br />
                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Seleccione tipo de usuario:</span>
                    </div>
                </div>

                <div className='row mt-5 d-flex align-items-center mb-5'>
                    <div className='col-md-4 d-flex flex-column align-items-center' style={{ backgroundColor: '#fff' }}>
                        <button className="btn btn-outline-dark" onClick={() => handlerSubmitType('cliente')} >
                            <img src={iconCliente} alt='IconoCliente' style={{ width: '100px', height: '100px' }} /><br />
                            <span style={{ fontSize: '20px', fontWeight: 'bold' }} >Cliente</span>
                        </button>
                    </div>
                    <div className=' col-md-4 d-flex flex-column align-items-center'>
                        <button className="btn btn-outline-dark" onClick={() => handlerSubmitType('profesional')}>
                            <img src={iconProfesional} alt="IconoProfesional" style={{ width: '100px', height: '100px' }} /><br />
                            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Profesional</span>
                        </button>
                    </div>
                    <div className='col-md-4 d-flex flex-column align-items-center'>
                        <button className="btn btn-outline-dark" onClick={() => handlerSubmitType('veterinaria')} >
                            <img src={iconVeterinaria} alt="IconoVeterinaria" style={{ width: '100px', height: '100px' }} /><br />
                            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Veterinaria</span>
                        </button>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default NewAccount;