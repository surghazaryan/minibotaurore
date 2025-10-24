import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://undeclaimed-nonscheduled-jarrod.ngrok-free.dev/");
                setData(res.data);
            } catch (err) {
                console.error("Fetch error:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    console.log("Fetched data:", data);

    return (
        <DataContext.Provider value={{ data, setData, loading, error }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
