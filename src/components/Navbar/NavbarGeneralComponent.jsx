import RUTAS from '../../helpers/RutasHelpers';
import { Navigate } from 'react-router-dom'
import UL_NavbarComponent from './UL_NavbarComponent';
import ImagesComponents from '../ImagesComponents';

import useAuth from '../../helpers/auth/useAuth';

const NavComponent = () => {

    let { tieneRol } = useAuth()

    const cerrarSesion = async () => {
        return <Navigate to={RUTAS.login} />
    }

    return (
        <>
            <div className="containerNav">
                <div className="navbarDiv">
                    <a href={RUTAS.home}>
                        <ImagesComponents src="./public/images/male_avatar.svg" className="logoNav" href={RUTAS.login}></ImagesComponents>
                    </a>
                    <UL_NavbarComponent cerrarSesion={cerrarSesion} tieneRol={tieneRol} />
                </div>
            </div>
        </>
    )
}

export default NavComponent