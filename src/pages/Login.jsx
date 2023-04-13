import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'

import RUTAS from '../helpers/RutasHelpers';
import Logo from "../../public/images/logo-login-registro.png"
import Eye_InputComponent from '../components/Eye_InputComponent';
import { LoginServices } from '../services/LoginServices';
import useAuth from '../helpers/auth/useAuth'

const Login = () => {

    const [showPwd, setShowPwd] = useState(false)
    const { saveToken, saveUsuerLocal } = useAuth();


    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [datos, setDatos] = useState({
        usuario: "",
        password: ""
    });


    let getDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    let enviarDatos = async (datosEnviados, e) => {

        let userData = {
            usuario: datosEnviados.usuario,
            pass: datosEnviados.password,
        }
        try {
            let data = await LoginServices(userData)

            if (Object.keys(data).length === 0) {
                // toast.error(`${data}`)
                // mostrarAlertError(data)
                throw new Error(`${data}`)
            }

            let { token } = data;
            saveToken(token)
            saveUsuerLocal(data)
            // mostrarAlertSuccess(data)
            navigate("home")
        }
        catch (e) {
            console.log(e.message)
        }
        e.target.reset()
    }

    return (
        <>
            <div className="login-container">
                <div className="info-login">
                    <img src={Logo} alt="" />
                    <div className="info">
                        <p>Campus Universitario</p>
                        <p>Paraje Arroyo Seco S/N</p>
                        <p>0249 438 5522</p>
                        <p>info@cice.unicen.edu.ar</p>
                    </div>
                </div>

                <div className="login-form-container">
                    <form className="form-login" action="" onSubmit={handleSubmit(enviarDatos)}>
                        <div className="titulo">
                            <h2>INICIAR SESION</h2>
                        </div>
                        <div className="inputLog">
                            <div className="labInput sig_form">
                                <label className="label" htmlFor="">Email</label>
                                <input className="input inputLog"
                                    type="text"
                                    name=""

                                    {
                                    ...register("usuario", {
                                        required: {
                                            value: true,
                                            message: "*Campo requerido"
                                        },
                                        minLength: {
                                            value: 4,
                                            message: "*El minimo son 4 caracteres"
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: "*El maximo son 20 caracteres"
                                        },
                                    })
                                    }
                                    // style={{ border: colorUserInput }}
                                    onChange={getDatos} />


                            </div>
                            <small className='fail'>{errors?.usuario?.message}</small>
                            <div className="labInput sig_form">
                                <label className="label" htmlFor="">Contraseña</label>
                                <div className="eye-password">
                                    <input
                                        className="input input-eye inputLog"
                                        type={showPwd ? "text" : "Password"}
                                        name=""


                                        {
                                        ...register("password", {
                                            required: {
                                                value: true,
                                                message: "*Campo requerido"
                                            },
                                            minLength: {
                                                value: 6,
                                                message: "*El minimo son 6 caracteres"
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: "*El maximo son 20 caracteres"
                                            },
                                        })
                                        }

                                        // style={{ border: colorPassInput }}
                                        onChange={getDatos}
                                    />
                                    <Eye_InputComponent setShowPwd={setShowPwd} showPwd={showPwd} />
                                </div>
                                <small className='fail'>{errors?.password?.message}</small>
                                <a href="">¿Olvidaste tu contraseña?</a>
                            </div>
                        </div>
                        <div className="button-volver">
                            <button className="button" >
                                INGRESAR
                            </button>
                            <a >¿No sos usuario?</a>
                            <button className="submit button" onClick={() => navigate("register")}>
                                REGISTRARSE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login