import { useContext } from "react";
import {
  getToken,
  isTokenExpired
} from "../../../../utils/generalUtils/tokenUtils";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../../Contexts/global";
import MenuRutas from "../../../../components/MenuRutas/MenuRutas";
// CS
import style from "./menuLateralUser.module.css";

const MenuLateralUser = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const { profileSelect } = state;

  console.log("prfile select user", profileSelect);
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
      {profileSelect && (
        <div>
          <h3 className={style.perfil_h3} >Perfil Seleccionado</h3>
          <h3 className={style.perfil_h3_name} >{profileSelect.name}</h3>
          <hr></hr>
        </div>
    
      )}
      <MenuRutas />
    </>
  );
};

export default MenuLateralUser;
