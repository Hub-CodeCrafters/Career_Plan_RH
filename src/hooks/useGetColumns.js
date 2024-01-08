import { useEffect, useState } from "react";

import getAllColumns from "../services/columnsServices.js";

import { getToken } from "../utils/generalUtils/tokenUtils";
const useGetColumns = () => {
    const token = getToken();

    const [columns, setColumns] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
       

        getAllColumns()
            .then((data) => {
                setColumns(data);
            })
            .catch((error) => {
                console.error("Error al solicitar los datos La Data: ", error); // Agregar un console.error para verificar errores
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);



    return { columns,error, isLoading };
};

export default useGetColumns;