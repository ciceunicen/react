import Swal from 'sweetalert2/dist/sweetalert2.js'

export function mostrarAlertSuccess(data) {
    Swal.fire({
        width: '45%',
        color: 'white',
        position: 'center',
        icon: 'success',
        title: `Bienvendo ${data.usuario}`,
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