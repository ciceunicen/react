export const RegisterServices = async (user) => {
    const URL_REGISTER = "http://localhost:5000/api/register";

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
            return data
        }
        let errores = [];

        data?.error.forEach(e => {
            errores.push({ error: e.msg })
        });


        return (errores[0])

    }
    catch (e) {
        console.log(e)

    }

}