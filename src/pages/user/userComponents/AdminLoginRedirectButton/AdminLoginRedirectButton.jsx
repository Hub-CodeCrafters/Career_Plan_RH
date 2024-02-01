
import { useNavigate } from "react-router-dom";
import {
  getToken,
  isTokenExpired
} from "../../../../utils/generalUtils/tokenUtils";

import style from "./AdminLoginRedirectButton.module.css";

const AdminLoginRedirectButton = () => {
 

  const navigate = useNavigate();
  const redirectToAdmin = () => {
    const token = getToken();
    if (token && !isTokenExpired(token)) {
      navigate("/admin");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className={style.login}>
        <button className={style.loginButton} onClick={redirectToAdmin}>
          Acceso de Administrador
        </button>
      </div>
    </>
  );
};

export{ AdminLoginRedirectButton};
