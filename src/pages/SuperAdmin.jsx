import { useEffect, useState } from 'react';
import TableUsers from '../components/tableUsers/tableUsers';
import { mostrarAlertSuccess, mostrarAlertError } from '../helpers/sweetAlerts/Alerts';
import { TieneToken } from '../helpers/TieneToken';
import { ChangeRole } from '../services/ChangeRole';
import { GetAllUsers } from '../services/GetAllUsers';


const SuperAdmin = () => {

    let [userData, setUserData] = useState([]);
    const [edit, SetEdit] = useState(false);

    const cambiarDatos = async (id, rol) => {
        SetEdit(false)
        let token = await TieneToken()
        let res = await ChangeRole(token, id, rol)

        if (res.ok) {
            SetEdit(true)
            mostrarAlertSuccess("Modificación exitosa")
            return;
        } else {
            mostrarAlertError(res.data)

        }
    }

    useEffect(() => {
        async function getAllUsers() {
            let token = await TieneToken()
            let data = await GetAllUsers(token)
            if (data.ok) {
                let datos = data.data.user;
                setUserData(datos)
            }
        }
        getAllUsers();
    }, [edit])

    return (
        <TableUsers datos={userData} cambiarDatos={cambiarDatos} />
    )
}

export default SuperAdmin