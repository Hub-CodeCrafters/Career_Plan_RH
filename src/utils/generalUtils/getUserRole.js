import {jwtDecode} from 'jwt-decode';
import { getToken } from './tokenUtils';

const getUserRole = () => {

    const token = getToken();

    if (token) {
        const tokenData = jwtDecode(token);
        return tokenData.user.rol; // Retorna los datos del token decodificado

    } else {
        console.error('No token found');
        return null; // Si no hay token, retorna null
    }
};

export { getUserRole };
