
const BotonesTablaUsuarios = ({ user, cambiarDatos }) => {
    return (
        <>

            <td >
                {
                    user.roles[0].tipo == "usuario" ? (
                        <button onClick={() => cambiarDatos(user._id)} className='js-editar'>agregar admin</button>

                    ) : (
                        <button onClick={() => cambiarDatos(user._id)} className='js-borrar'>remover admin</button>

                    )
                }
            </td>

        </>

    )
}

export default BotonesTablaUsuarios