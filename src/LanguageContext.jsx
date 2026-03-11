import { createContext, useContext, useState} from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en')
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    }
    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);
//Provider componente que envuelve a los componentes que necesitan acceder al contexto del idioma. Proporciona el valor del idioma actual y la función para cambiarlo a través del contexto.