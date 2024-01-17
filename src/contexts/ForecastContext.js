import { createContext, useState } from "react";

export const ForecastContext = createContext({})

export function ForecastProvider({children }){
    const [forecast, setForecast] = useState([]);
    const [showForecast, setShowForecast] = useState(false);
    const [weatherCodes, setWeatherCodes] = useState([]);

    return (
        <ForecastContext.Provider value={{
            forecast, 
            setForecast,
            showForecast,
            setShowForecast,
            weatherCodes,
            setWeatherCodes
        }}>
            {children}
        </ForecastContext.Provider>
    )
}