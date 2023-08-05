import { Formik, Field, Form, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginButtonGoogle } from '../components/login/loginButtonGoogle';
import { SignupButton } from '../components/login/singUpButton'
import { loginSchema } from '../utils/_yupSchemas/loginSchema.js';
import { NavBar } from '../components/home/navBar';
const LoginForm = () => {

    return (
        <>
            <NavBar />
            <div className="container my-5" style={{ padding: 50, border: '2px solid #000' }}>
                <div className="row">
                    {/* Columna Izquierda */}
                    <div className="col-md-7">
                        <div className='row' style={{ height: '100%' }}>
                            <div className="col-md-3">
                                <img src="../assets/iconVetly.png" alt="IconoVently" />
                            </div>
                            <div className="col-md-9 d-flex flex-column justify-content-center " >
                                <span>Estas a un paso!</span>
                                <p style={{ color: '#C122DF', fontSize: '40px' }}>Inicia sesion o crea una nueva cuenta para poder iniciar tu consulta</p>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha */}
                    <div className="col-md-5">
                        <div style={{ padding: 20, borderLeft: 'px solid #ccc' }}>
                            <div className="card-body">
                                <Formik
                                    initialValues={{
                                        email: '',
                                        password: '',
                                    }}
                                    validationSchema={loginSchema}
                                    onSubmit={async values => {
                                        // ... Código para enviar los datos del formulario de login ...
                                    }}
                                >
                                    <Form>
                                        <div className="form-outline mb-4 ">
                                            <label htmlFor="email" className="form-label">Email:</label>
                                            <Field className="form-control" id="email" name="email" />
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label htmlFor="password" className="form-label">Password:</label>
                                            <Field className="form-control" id="password" name="password" type="password" />
                                            <ErrorMessage name="password" component="div" className="text-danger" />
                                        </div>

                                        <div className="mb-4">
                                            <a href="/forgot_password">Oops.. olvidé mi contraseña</a>
                                        </div>

                                        <button className="btn btn-block  w-100" type="submit" style={{ color: '#fff', borderColor: '#C122DF', background: ' #C122DF', letterSpacing: '1px', fontSize: '20px' }} >INICIAR SESION</button>

                                        <div className="mt-4  d-flex  justify-content-around align-items-center">
                                            <p style={{ fontSize: '18px', alignItems: 'center', margin: '0' }}>Todavia no tenes cuenta?</p> <SignupButton />
                                        </div>

                                        <div className="mt-4  d-flex justify-content-center   ">
                                            <LoginButtonGoogle />
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>






                    </div>
                </div>
            </div >
        </>
    );
};

export default LoginForm;