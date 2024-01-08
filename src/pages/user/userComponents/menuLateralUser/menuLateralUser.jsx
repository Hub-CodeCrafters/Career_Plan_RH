
import { getToken, isTokenExpired } from "../../../../utils/generalUtils/tokenUtils"
import { useNavigate } from "react-router-dom"

// CSS
import style from "./menuLateralUser.module.css"


const MenuLateralUser = ({ perfiles, columns }) => {
    const navigate = useNavigate();

    const redirectToAdmin = () => {
        const token = getToken();
        if (token && !isTokenExpired(token)) {
            navigate("/admin");
        } else {
            navigate("/login");
        }
    }

    return (
        <div className={style.login}>
            <button className={style.loginButton} onClick={redirectToAdmin}>
            Acceso de Administrador
            </button>
        </div>
    );
}

export default MenuLateralUser