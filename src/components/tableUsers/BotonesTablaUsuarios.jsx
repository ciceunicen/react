
const BotonesTablaUsuarios = ({ user, cambiarDatos }) => {
    return (
        <>

            <td >
                {
                    user.roles[0].tipo == "default" ? (
                        <button onClick={() => cambiarDatos(user._id, "admin")} className='js-editar'>Agregar admin</button>

                    ) : (
                        <button onClick={() => cambiarDatos(user._id, "default")} className='js-borrar'>Remover admin</button>

                    )
                }
            </td>

        </>

    )
}

export default BotonesTablaUsuarios