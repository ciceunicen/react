import { useNavigate } from "react-router-dom";


const Btn_Registro = () => {
    let navigate = useNavigate();
    return (
        <>
            <a >¿No sos usuario?</a>
            <button className="submit button" onClick={() => navigate("register")}>
                REGISTRARSE
            </button>
        </>
    )
}

export default Btn_Registro