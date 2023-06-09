export const RegisterServices = async (user) => {

    const URL_REGISTER = "http://localhost:5000/usuarios";
    let datosRegister = JSON.stringify(user);
    try {

        let response = await fetch(URL_REGISTER, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
            },
            credentials: "include",
            "body": datosRegister
        });

        const data = await response.json()

        if (response.ok) {
            console.log(data)
            return data
        }

        else if (data?.error) {
            let errores = [];
            data?.error.forEach(e => {
                errores.push({ message: e.msg })
            });
            return errores
        }
        else {
            return data;
        }

    }
    catch (e) {
        return { message: "Error de servidor" }
    }
}