import RUTAS from '../../helpers/RutasHelpers';
import { Navigate, useNavigate } from 'react-router-dom'
import UL_NavbarComponent from './UL_NavbarComponent';
import ImagesComponents from '../ImagesComponents';

import useAuth from '../../helpers/auth/useAuth';
import { LogoutServices } from '../../services/LogoutServices';

const NavComponent = () => {

    let { tieneRol, deleteUserLocal, user } = useAuth()

    let navigate = useNavigate();

    const cerrarSesion = async () => {
        await LogoutServices();
        deleteUserLocal()
        navigate(RUTAS.login)
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