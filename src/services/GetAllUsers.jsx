export const GetAllUsers = async (token) => {
    const GETALL = "http://localhost:5000/usuarios";
    try {

        let res = await fetch(GETALL, {
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            credentials: "include"
        })

        let data = await res.json();
        if (res.ok) {
            return {
                data,
                ok: res.ok
            }
        } else {

            return {
                data,
                ok: res.ok,
                text: res.statusText
            }
        }

    } catch (error) {
        console.log(error)
    }

}