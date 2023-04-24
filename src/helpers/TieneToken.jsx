export const TieneToken = () => {
    let token = document.cookie.split("=")[1]
    try {
        if (token?.length > 0) {
            return token
        }
        return null

    }
    catch (e) {
        return e
    }

}