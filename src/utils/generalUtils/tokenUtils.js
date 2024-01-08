import { jwtDecode } from 'jwt-decode';


// aggregarles local estore para que sean mas descriptivo

const getToken = () => {
    return window.localStorage.getItem('token');
};

const setToken = (token) => {
    window.localStorage.setItem('token', token);
}

const removeToken = () => {
    window.localStorage.removeItem('token');
};


const isTokenExpired = (token) => {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Obtiene el tiempo actual en segundos
    return decodedToken.exp < currentTime;
};

export { getToken, setToken, removeToken, isTokenExpired };