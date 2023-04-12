import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarGeneralComponent from '../components/Navbar/NavbarGeneralComponent';
import RUTAS from '../helpers/RutasHelpers';

const LayoutIndex = () => {
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