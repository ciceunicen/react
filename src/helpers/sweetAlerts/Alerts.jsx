import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useNavigate } from "react-router-dom";

export function mostrarAlertSuccess(data) {
    Swal.fire({
        width: '45%',
        color: 'white',
        position: 'center',
        icon: 'success',
        title: `Bienvendo ${data.email}`,
        showConfirmButton: false,
        timer: 1500
    })
}

export function mostrarAlertError(data) {
    Swal.fire({
        width: '45%',
        color: 'white',
        position: 'center',
        icon: 'error',
        title: `${data}`,
        showConfirmButton: true,
        confirmButtonColor: '#FFC900',
    })
}

export function successAndRedirect() {

    Swal.fire({
        width: '45%',
        color: 'white',
        position: 'center',
        icon: 'success',
        title: `Registrado con éxito`,
        showConfirmButton: false,
        timer: 1500,
    })

}
