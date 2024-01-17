import { createContext, useState } from "react";

export const InputContext = createContext({})

export function InputProvider({children }){
    const [cityInput, setCityInput] = useState('');

    return (
        <InputContext.Provider value={{
            cityInput,
            setCityInput
        }}>
            {children}
        </InputContext.Provider>
    )
}