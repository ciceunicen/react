import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import TableUsers from '../components/tableUsers/tableUsers';
import { TieneToken } from '../helpers/TieneToken';
import { GetAllUsers } from '../services/GetAllUsers';


const SuperAdmin = () => {

    let [userData, setUserData] = useState([]);
    const data = useLoaderData()

    let datos = data.data.user;

    const cambiarDatos = (id) => {
        console.log(id)
    }

    useEffect(() => {
        setUserData(datos)
    }, [])

    return (
        <TableUsers datos={userData} cambiarDatos={cambiarDatos} />
    )
}

export default SuperAdmin


export const LoaderTablaUsers = async () => {
    let token = TieneToken()
    let data = await GetAllUsers(token)
    if (data.ok)
        return data
}
