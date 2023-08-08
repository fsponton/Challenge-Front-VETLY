import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';
import registrationSchema from '../utils/_yupSchemas/registrationSchema';
import iconCliente from '../assets/iconCliente.png'
import iconProfesional from '../assets/iconProfesional.png'
import iconVeterinaria from '../assets/iconVeterinaria.png'
import registerUser from "../services/registerUser";


const RegisterUser = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(false)


    return (
        <div className="container py-5">
            <div className="row d-flex justify-content-center align-items-center p-3" style={{ border: '2px solid #000' }}>
                <div className="col-12 col-md-8 col-lg-8 col-xl-5">
                    <div className="card text-dark" style={{ border: 'border-radius: 2rem', background: '' }}>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                password: '',
                                perfil: ''
                            }}
                            validationSchema={registrationSchema}
                            onSubmit={async values => {
                                const form = {
                                    name: values.name,
                                    email: values.email,
                                    password: values.password,
                                    perfil: values.perfil,
                                    from: 'manual-register'
                                }
                                const result = await registerUser(form)
                                if (result.status === "success") {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'User registered successfully',
                                        text: `${result.msg}`
                                    });
                                    navigate('/');
                                    return
                                }
                                Swal.fire({
                                    icon: 'error',
                                    title: `User Cant be Register`,
                                    text: `${result.msg}`
                                })

                            }}
                        >
                            {({ handleSubmit, setFieldValue }) => (

                                <Form className="card-body p-5 text-center" onSubmit={handleSubmit}>
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h3 className="mb-5 text-uppercase">Register</h3>

                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="name" className="form-label">Name:</label>
                                            <Field className="form-control form-control-lg" id="name" name="name" />
                                            <ErrorMessage name="name" component="div" className="text-danger" />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="email" className="form-label">Email:</label>
                                            <Field className="form-control form-control-lg" id="email" name="email" />
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <label htmlFor="password" className="form-label">Password:</label>
                                            <Field className="form-control form-control-lg" id="password" name="password" type="password" />
                                            <ErrorMessage name="password" component="div" className="text-danger" />
                                        </div>


                                        <div className="d-flex justify-content-between mb-5">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setFieldValue('perfil', 'cliente')
                                                    setSelected('cliente')
                                                }}
                                                style={selected === 'cliente' ? { border: '4px solid lightblue' } : null}
                                            >
                                                <img src={iconCliente} alt='IconoCliente' style={{ width: '100px', height: '100px' }} /><br />
                                                <span style={{ fontSize: '20px', fontWeight: 'bold' }} >Cliente</span>
                                            </button>


                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setFieldValue('perfil', 'profesional')
                                                    setSelected('profesional')
                                                }}
                                                style={selected === 'profesional' ? { border: '4px solid lightblue' } : null}
                                            >
                                                <img src={iconProfesional} alt="IconoProfesional" style={{ width: '100px', height: '100px' }} /><br />
                                                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Profesional</span>
                                            </button>


                                            <button
                                                type="button"
                                                id='veterinaria'
                                                onClick={
                                                    () => {
                                                        setFieldValue('perfil', 'veterinaria')
                                                        setSelected('veterinaria')
                                                    }}
                                                style={selected === 'veterinaria' ? { border: '4px solid lightblue' } : null}
                                            >
                                                <img src={iconVeterinaria} alt="IconoVeterinaria" style={{ width: '100px', height: '100px' }} /><br />
                                                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Veterinaria</span >
                                            </button>



                                        </div>

                                        <button className="btn btn-primary btn-block w-100" type="submit" style={{ color: '#fff', borderColor: '#C122DF', background: ' #C122DF', letterSpacing: '1px', fontSize: '20px' }} >Registrar</button>
                                        <br />
                                        <button
                                            onClick={() => navigate('/')}
                                            className="btn btn-primary btn-block w-100 mt-5" style={{ color: '#fff', borderColor: '#C122DF', letterSpacing: '1px', fontSize: '20px' }} >Ir al inicio</button>

                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default RegisterUser;