import { useEffect, useState } from "react";

import { getAllProfiles } from "../services/profileServices";
import { getToken } from "../utils/generalUtils/tokenUtils";

const useGetProfiles = () => {

    const token = getToken();
    const [profiles, setProfiles] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);

        getAllProfiles()
            .then((profiles) => {  
                setProfiles(profiles);
            })
            .catch((error) => {
                console.error("Error al solicitar los datos La Data: ", error); // Agregar un console.error para verificar errores
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);



    return { profiles, error, isLoading };
};

export default useGetProfiles;


