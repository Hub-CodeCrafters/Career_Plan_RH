import { userAuthenticationService } from "../../services/userAuthenticationService"
import { getToken, isTokenExpired, setToken } from "./tokenUtils"


const isAuthenticated = (email, password, ) => {

    const token = getToken();

    // si no existe token o si el tokken que existe  ya experio  nos autenticamos
    if (!token || isTokenExpired(token)) {
         return userAuthenticationService(email, password)
            .then((user) => {
                setToken(user.token);
                return true
            })
            .catch((error) => {
                console.error(error);
                return false
                // Manejo de errores si la autenticación falla
            });
    } else {
        return true
    }


}
export { isAuthenticated };

