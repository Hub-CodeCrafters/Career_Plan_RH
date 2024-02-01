const userAuthenticationService = (email, password) => {
    return fetch("https://geoapps.esri.co/PDCJsonServer/auth", {
        mode: "cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("Error en la autenticación")
        }
        return res.json()
    })
    .catch(err => {
        if (err.name === 'AbortError') {
            throw new Error("La solicitud fue abortada")
          
        } else {
            throw new Error("Error de red, por favor inténtalo de nuevo más tarde")
        }
    })
}

export { userAuthenticationService }
