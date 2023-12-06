import { useEffect, useState } from "react";

const useDataFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            fetch(url,{
                mode: "cors",
            })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error fetching users data');
                    }
                    return res.json();
                })
                .then(data => {
                    var currentProfiles = []
                    data.map((element) => {
                        element.data.map((item) => {
                          currentProfiles.push(item);
                        })
                    })
                    setData(currentProfiles);
                })
                .catch(err => {
                    console.log(err);
                });
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    const refetch = () => {
        fetchData();
    };

    return { data, error, isLoading, refetch, setData };
};

export default useDataFetch;