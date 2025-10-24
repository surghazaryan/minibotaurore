import React, {createContext, useEffect, useState} from 'react';
import en from "../i18n/lng/en.js"
import ru from "../i18n/lng/ru.js"
import hy from "../i18n/lng/hy.js"

export const LanguageContext = createContext();
const translations = { en, ru, hy };
const LngProviderContext = ({children}) => {
    const [lng, setLng] = useState(localStorage.getItem("lang") || "en");
    const t = translations[lng];
    useEffect(() => {
        localStorage.setItem("lang", lng);
    }, [lng]);
    return (
        <div>
            <LanguageContext.Provider value={{lng,setLng,t}} >
                {children}
            </LanguageContext.Provider>

        </div>
    );
};

export default LngProviderContext;