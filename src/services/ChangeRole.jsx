export const ChangeRole = async (token, id, rol) => {
    const CHANGE_ROLE = "http://localhost:5000/usuarios";
    try {

        let res = await fetch(CHANGE_ROLE + "/" + id + "/" + rol, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            credentials: "include",
        })

        let data = await res.json();

        if (res.ok) {
            return {
                data,
                ok: res.ok
            }
        } else {
            return {
                data: data.error,
                ok: res.ok,
                text: res.statusText
            }
        }

    } catch (error) {
        console.log(error)
        return { data: "Error de servidor" }
    }

}