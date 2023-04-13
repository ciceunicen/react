import React, { createContext, useState } from 'react'
export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState({
        id: localStorage.getItem("id_usuario"),
        usuario: localStorage.getItem("Usuario"),
        rol: localStorage.getItem("Rol"),
    })

    const [token, setToken] = useState(null);


    const saveToken = (t) => setToken(t)



    // const login = (data) => {
    //     setUser({
    //         // id: data.id,
    //         // nombre: data.name,
    //         // rol: data.rol,
    //         // usuario: data.user,
    //         // email: data.email
    //     })
    // }

    // const saveUsuerLocal = (data) => {
    //     localStorage.setItem("id_usuario", data.id)
    //     localStorage.setItem("Usuario", data.user)
    //     localStorage.setItem("Rol", data.rol)
    //     setUser({
    //         id: localStorage.getItem("id_usuario"),
    //         usuario: localStorage.getItem("Usuario"),
    //         rol: localStorage.getItem("Rol"),
    //     })
    // }


    const saveUsuerLocal = (data) => {
        console.log(data)
        let rol = []

        data.rol.forEach(e => {
            rol.push(e.tipo);
        });
        localStorage.setItem("id_usuario", data._id)
        localStorage.setItem("Usuario", data.usuario)
        localStorage.setItem("Rol", rol)

    }

    const getRoleUser = () => {
        let str = localStorage.getItem("Rol")
        let arr = str.split(',');
        return arr
    }



    const deleteUserLocal = () => localStorage.clear()


    const tieneToken = () => {
        let token = document.cookie.split("=")[1]
        if (token?.length > 0) {
            return true
        } else {
            deleteUserLocal()
            return false
        }
    }

    const estaLogeado = () => !!usuario

    const tieneRol = (rol) => {
        return getRoleUser()?.includes(rol)

    }
    // rol && user?.rol === rol

    const contextValue = {
        user,
        token,

        getRoleUser,
        estaLogeado,
        tieneRol,
        tieneToken,
        saveUsuerLocal,
        deleteUserLocal,
        saveToken,


    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}