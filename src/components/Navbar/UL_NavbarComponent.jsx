import RUTAS from '../../helpers/RutasHelpers';
import LI_navbarComponent from './LI_navbarComponent';


const UL_NavbarComponent = ({ cerrarSesion, tieneRol }) => {

    return (
        <ul>
            <LI_navbarComponent to={RUTAS.home} sitio={RUTAS.home} />
            <LI_navbarComponent to={RUTAS.about} sitio={RUTAS.about} />

            {
                (tieneRol("admin") || tieneRol("super_admin")) && (
                    <>
                        <LI_navbarComponent to={RUTAS.admin} sitio={RUTAS.admin} />

                        {
                            tieneRol("super_admin") && (
                                <LI_navbarComponent to={RUTAS.superAdmin} sitio={RUTAS.superAdmin} />
                            )
                        }
                    </>
                )
            }

            <LI_navbarComponent to={RUTAS.login} onClick={cerrarSesion} sitio="cerrar Sesion" />
        </ul>
    )
}

export default UL_NavbarComponent