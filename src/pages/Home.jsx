import useAuth from "../helpers/auth/useAuth";
import { Navigate } from 'react-router-dom'
import RUTAS from '../helpers/RutasHelpers';
const Home = () => {
    let { tieneToken } = useAuth()


    if (!tieneToken()) {

        return <Navigate to={RUTAS.login} />
    }


    return (
        <h1>Home</h1>
    )
}

export default Home