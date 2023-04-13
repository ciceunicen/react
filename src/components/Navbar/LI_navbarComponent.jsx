import { NavLink } from 'react-router-dom'

const LI_navbarComponent = ({ sitio, ...props }) => {
    return (
        <li><NavLink {...props}>{sitio}</NavLink></li>
    )
}

export default LI_navbarComponent