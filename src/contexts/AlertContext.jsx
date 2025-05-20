import { createContext } from "react";
import { useState, useContext } from "react";

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
    const initialData = { type: '', message: '' }

    const [alert, setAlert] = useState(initialData);

    return (
        <AlertContext.Provider value={{ alert, setAlert }}>
            {children}
        </AlertContext.Provider>
    )
};

const useAlert = () => {
    const context = useContext(AlertContext);

    return context;
};



export { AlertProvider, useAlert }