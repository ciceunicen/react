import RUTAS from '../../helpers/RutasHelpers';
import LI_navbarComponent from './LI_navbarComponent';


const UL_NavbarComponent = ({ cerrarSesion }) => {



    return (
        <ul>
            <LI_navbarComponent to={RUTAS.home} sitio="Home" />
            <LI_navbarComponent to={RUTAS.about} sitio="About" />




            <LI_navbarComponent to={RUTAS.admin} sitio="Admin" />


            <LI_navbarComponent to={RUTAS.superAdmin} sitio="SuperAdm" />





            <LI_navbarComponent to={RUTAS.login} onClick={cerrarSesion} sitio="Cerrar Sesion" />
        </ul>
    )
}

export default UL_NavbarComponent