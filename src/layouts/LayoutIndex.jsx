import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from "../helpers/auth/useAuth";
import NavbarGeneralComponent from '../components/Navbar/NavbarGeneralComponent';
import RUTAS from '../helpers/RutasHelpers';

const LayoutIndex = () => {


    let { tieneToken } = useAuth()



    if (!tieneToken()) {
        return <Navigate to={RUTAS.login} />
    }


    return (
        <div className="root-layout">
            <header>
                <NavbarGeneralComponent />
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default LayoutIndex