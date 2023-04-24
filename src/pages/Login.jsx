import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'

import RUTAS from '../helpers/RutasHelpers';
import Logo from "../images/logo-login-registro.png"
import Eye_InputComponent from '../components/Eye_InputComponent';
import { LoginServices } from '../services/LoginServices';
import useAuth from '../helpers/auth/useAuth'
import { mostrarAlertSuccess, mostrarAlertError } from '../helpers/sweetAlerts/Alerts';
import InformacionCICE from '../components/Login/InformacionCICE';
import Btn_Ingresar from '../components/Login/Btn_Ingresar';
import Btn_Registro from '../components/Login/Btn_Registro';


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { saveToken, saveUsuerLocal, tieneToken, deleteUserLocal } = useAuth();

    let navigate = useNavigate();

    const [showPwd, setShowPwd] = useState(false)
    const [disabled, setdisabled] = useState(true)

    const [datos, setDatos] = useState({
        email: "",
        password: ""
    });


    let getDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })


    }

    useEffect(() => {
        if ((datos.email.length != 0 && datos.password.length != 0)) {
            setdisabled(false)
        } else {
            setdisabled(true)
        }
    }, [datos.email, datos.password])


    if (!tieneToken()) {
        deleteUserLocal()
    }

    let enviarDatos = async (datosEnviados, e) => {
        let userData = {
            email: datosEnviados.email,
            pass: datosEnviados.password,
        }
        try {
            let data = await LoginServices(userData)
            if (Object.keys(data).length === 0) {
                return mostrarAlertError(data)
            }

            let { token } = data;
            saveUsuerLocal(data, token)
            mostrarAlertSuccess(`Bienvenido ${data.email}`)
            navigate("home")
        }
        catch (err) {
            mostrarAlertError("Error de conexion")
        }
        e.target.reset()
    }

    return (
        <>
            <div className="login-container">
                <InformacionCICE Logo={Logo} />

                <div className="login-form-container">
                    <form className="form-login" action="" onSubmit={handleSubmit(enviarDatos)}>
                        <div className="titulo">
                            <h2>INICIAR SESION</h2>
                        </div>
                        <div className="inputLog">
                            <div className="labInput sig_form">
                                <label className="label" htmlFor="">Email</label>
                                <input className="input"
                                    type="text"
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
                            <div className="labInput sig_form">
                                <label className="label" htmlFor="">Contraseña</label>
                                <div className="eye-password">
                                    <input
                                        className="input input-eye"
                                        type={showPwd ? "text" : "Password"}
                                        name=""

                                        {
                                        ...register("password", {
                                            required: {
                                                value: true,
                                                message: "*Campo requerido"
                                            },
                                            minLength: {
                                                value: 8,
                                                message: "*El minimo son 8 caracteres"
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
                                <a href="">¿Olvidaste tu contraseña?</a>
                            </div>
                        </div>
                        <div className="button-volver">
                            <Btn_Ingresar disabled={disabled} />
                            <Btn_Registro />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login