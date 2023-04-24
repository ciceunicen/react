import BotonesTablaUsuarios from '../tableUsers/BotonesTablaUsuarios';


const TableUsers = ({ datos, cambiarDatos }) => {

    return (
        <>
            <table className="tabla">
                <caption>LISTADO DE USUARIOS</caption>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Rol Actual</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody id="lista">
                    {
                        datos.length > 0 &&
                        datos.map((user) =>

                            (user.roles[0].tipo == "default" || user.roles[0].tipo == "admin") && (

                                <tr key={user._id}>
                                    <td>{user.nombre}</td>
                                    <td>{user.apellido}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.roles.map((r) =>
                                                r.tipo
                                            )
                                        }
                                    </td>
                                    <BotonesTablaUsuarios user={user} cambiarDatos={cambiarDatos} />
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </>


    )
}

export default TableUsers