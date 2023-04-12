
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'

import RUTAS from '../helpers/RutasHelpers';

import Logo from "../../public/images/male_avatar.svg"
import Eye_InputComponent from '../components/Eye_InputComponent';





const Login = () => {
    const [showPwd, setShowPwd] = useState(false)


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
        console.log(userData)

        try {

        }
        catch (e) {

        }
        e.target.reset()
    }

    return (
        <>
            <div className="container_form">
                <form onSubmit={handleSubmit(enviarDatos)} className="form-container-lavender" >
                    <div className="div_img" >
                        <img src={Logo} alt="login-logo" className="logo-img" />
                    </div>

                    <div className='form_box'>

                        <input
                            type="text"
                            className="form_input"
                            placeholder="Usuario"
                            id='usuario'
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
                        <label htmlFor="usuario" className="form_label">Usuario</label>
                        <small className='fail'>{errors?.usuario?.message}</small>
                    </div>

                    <div className='form_box' >
                        <Eye_InputComponent setShowPwd={setShowPwd} showPwd={showPwd} />
                        <input
                            type={showPwd ? "text" : "password"}

                            className="form_input i_pass"
                            placeholder="Password"
                            id='password'
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
                        <label htmlFor="password" className="form_label">Password</label>
                        <small className='fail'>{errors?.password?.message}</small>
                    </div>

                    <div className="d-flex justify-content-end">
                        <p className="d-inline-block m-0 pe-2 pt-2 fst-italic fw-semibold pointer forgot-text">No tienes cuenta? Registrate!👍</p>
                    </div>
                    <div className="px-5">
                        <button className="btn-purple">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login