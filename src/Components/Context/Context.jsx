import { createContext, useState } from "react";

export const Context = createContext();
export function Provider({children}){
    const [state,setState] = useState("Venta");
    return(<Context.Provider value={{
        state:state,
        setState,setState
    }}>
        {children}
    </Context.Provider>)
}
