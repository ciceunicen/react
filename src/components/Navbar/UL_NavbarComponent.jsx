import RUTAS from '../../helpers/RutasHelpers';
import LI_navbarComponent from './LI_navbarComponent';


const UL_NavbarComponent = ({ cerrarSesion, tieneRol }) => {



    return (
        <ul>
            <LI_navbarComponent to={RUTAS.home} sitio="Home" />
            <LI_navbarComponent to={RUTAS.about} sitio="About" />



            {
                tieneRol("admin") && (
                    <>
                        <LI_navbarComponent to={RUTAS.admin} sitio="Admin" />

                        {
                            tieneRol("super_admin") && (
                                <LI_navbarComponent to={RUTAS.superAdmin} sitio="SuperAdm" />
                            )
                        }
                    </>
                )

            }

            <LI_navbarComponent to={RUTAS.login} onClick={cerrarSesion} sitio="Cerrar Sesion" />
        </ul>
    )
}

export default UL_NavbarComponent