import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { RegisterServices } from '../services/RegisterServices';
import { mostrarAlertError, successAndRedirect } from '../helpers/sweetAlerts/Alerts';
import useAuth from '../helpers/auth/useAuth'

import Eye_InputComponent from "../components/Eye_InputComponent"
import InformacionCICE from "../components/Login/InformacionCICE"
import Logo from "../../public/images/logo-login-registro.png"

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { tieneToken, deleteUserLocal } = useAuth();
    const [disabled, setdisabled] = useState(true)

    let navigate = useNavigate();

    const [showPwd, setShowPwd] = useState(false)
    const [showRePwd, setShowRePwd] = useState(false)
    const [datos, setDatos] = useState({
        nombre: "",
        apellido: "",
        password: "",
        email: "",
        re_password: "",
    });

    let getDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if ((datos.email.length != 0 && datos.password.length != 0 &&
            datos.nombre.length != 0, datos.apellido.length != 0, datos.re_password.length != 0)) {
            setdisabled(false)
        } else {
            setdisabled(true)
        }
    }, [datos.email, datos.password, datos.nombre, datos.apellido, datos.re_password])

    if (!tieneToken()) {
        deleteUserLocal()
    }

    let enviarDatos = async (datosEnviados, e) => {

        let registerData = {
            nombre: datosEnviados.nombre,
            apellido: datosEnviados.apellido,
            pass: datosEnviados.password,
            email: datosEnviados.email,
            re_pass: datosEnviados.re_password,
        }
        try {
            let data = await RegisterServices(registerData)

            if (data.ok) {
                successAndRedirect(data)
                setTimeout(() => {
                    navigate("/")
                }, 1500)
                return
            }
            return mostrarAlertError(data.error)
        }
        catch (e) {
            console.log(e.message)
        }
        e.target.reset()
    }



    return (
        <>

            <div className="login-container">
                <InformacionCICE Logo={Logo} />
                <div className="login-form-container">
                    <form className="form-registro" action="" onSubmit={handleSubmit(enviarDatos)}>
                        <div className="titulo">
                            <h2>REGISTRO</h2>
                        </div>

                        <div className="flex">
                            <div className="signin_form">
                                <label className="label" htmlFor="">Nombre</label>
                                <input className="input-short"
                                    type="text"
                                    name=""
                                    {
                                    ...register("nombre", {
                                        required: {
                                            value: true,
                                            message: "*Campo requerido"
                                        },
                                    })
                                    }
                                    // style={{ border: colorUserInput }}
                                    onChange={getDatos}
                                />
                            </div>
                            <small className='fail'>{errors?.email?.message}</small>

                            <div className="signin_form">
                                <label className="label" htmlFor="">Apellido</label>
                                <input className="input-short"
                                    type="text"
                                    name=""
                                    {
                                    ...register("apellido", {
                                        required: {
                                            value: true,
                                            message: "*Campo requerido"
                                        },
                                    })
                                    }
                                    // style={{ border: colorUserInput }}
                                    onChange={getDatos}
                                />
                            </div>
                            <small className='fail'>{errors?.email?.message}</small>
                        </div>

                        <div className="email signin_form">
                            <label className="label" htmlFor="">Email</label>
                            <input className="input input-error"
                                type="email"
                                name=""
                                {
                                ...register("email", {
                                    required: {
                                        value: true,
                                        message: "*Campo requerido"
                                    },
                                    minLength: {
                                        value: 4,
                                        message: "*El minimo son 4 caracteres"
                                    },
                                    maxLength: {
                                        value: 40,
                                        message: "*El maximo son 40 caracteres"
                                    },
                                })
                                }
                                // style={{ border: colorUserInput }}
                                onChange={getDatos} />
                        </div>
                        <small className='fail'>{errors?.email?.message}</small>



                        <div className="pass signin_form">
                            <label className="label" htmlFor="">Contraseña</label>
                            <div className="eye-password">
                                <input className="input-eye"
                                    type={showPwd ? "text" : "Password"}

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
                                <Eye_InputComponent cambiar={setShowPwd} mostrar={showPwd} />
                            </div>
                            <small className='fail'>{errors?.password?.message}</small>

                            <label className="label pd-t" htmlFor="">Confirmar contraseña</label>
                            <div className="eye-password">
                                <input className="input-eye"
                                    type={showRePwd ? "text" : "Password"}
                                    name=""
                                    {
                                    ...register("re_password", {
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
                                <Eye_InputComponent cambiar={setShowRePwd} mostrar={showRePwd} />
                            </div>
                            <small className='fail'>{errors?.re_password?.message}</small>
                        </div>

                        <div className="button-volver">
                            <button type="submit" className="button" disabled={disabled}>
                                REGISTRARSE
                            </button>
                            <a href="#" onClick={() => navigate("/")} >¿Ya tienes una cuenta?</a>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Register