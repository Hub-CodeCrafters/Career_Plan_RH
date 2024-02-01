import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../Contexts/global";
import { types } from "../../Contexts/globalReducer";
import style from "./MenuRutas.module.css";

// componentes globales
import { getToken } from "../../utils/generalUtils/tokenUtils";
import { getUserRole } from "../../utils/generalUtils/getUserRole";

// componetens admin
import { GestionRutasAdmin } from "../../pages/admin/adminComponents/GestionRutasAdmin/GestionRutasAdmin";

export default function MenuRutas() {
  const [state, dispatch] = useContext(GlobalContext);

  const { profileSelect, rutaActual, paginaActual, buttomActual } = state;
console.log(profileSelect)
  var [page, setPage] = useState();

  useEffect(() => {
    setPage(rutaActual);
  }, [rutaActual]);

  const changeRuta = (increment) => {
    const newPage = Math.max(0, page + increment);
    if (newPage == 0 || newPage <= profileSelect.routes.length - 1) {
      setPage(newPage);
      dispatch({
        type: types.updateRutaSelect,
        payload: profileSelect.routes[newPage]
      });
      dispatch({ type: types.changeRutaActual, payload: newPage });
    }
  };

  return (
    <div className={style.menuRutas}>
      <hr className={style.hr}></hr>
      {profileSelect && (
        <h3 className={style.menuRutasName}>Rutas del Perfil</h3>
      )}
      {profileSelect && (
        <div className={style.menuRutasContent}>
          <button className={style.back} onClick={() => changeRuta(-1)}>
            &#60;
          </button>
          <span className={style.menuRutaslength}>
            Ruta {page + 1} de {profileSelect.routes.length}
          </span>
          <button className={style.next} onClick={() => changeRuta(1)}>
            &#62;
          </button>
        </div>
      )}
      {paginaActual === "admin" &&
        buttomActual === "Rutas" && <GestionRutasAdmin />}
      <hr className={style.hr}></hr>
    </div>
  );
}
