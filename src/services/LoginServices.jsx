export const LoginServices = async (user) => {
    const URL_LOGIN = "http://localhost:5000/api/login";

    let datosLogin = JSON.stringify(user);

    try {

        let response = await fetch(URL_LOGIN, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
            },
            credentials: "include",
            "body": datosLogin
        });

        const data = await response.json()

        if (response.ok) {
            return data
        } else {
            throw new Error(data.error)
        }
    }
    catch (e) {
        return e
    }

}