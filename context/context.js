import { createContext, useState } from "react";

export const DesignContext = createContext(null);

function Context({ children }) {
    const [message, setMessage] = useState();

    return (
        <DesignContext.Provider value={{ message, setMessage }}>
            {children}
        </DesignContext.Provider>
    );
}

export default Context;