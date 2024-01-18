import React, { useContext, useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert, FlatList, Keyboard, SafeAreaView, Touchable, TouchableOpacity, ActivityIndicator } from "react-native";
import { stylesFunction } from "./style";
import InputButton from "../../components/InputButton";
import { getCoordinates, getForecast, search } from "../../services/api";
import Forecast from "../../components/Forecast";
import { ForecastContext, ForecastProvider } from "../../contexts/ForecastContext";
import { InputContext } from "../../contexts/InputContext";
import CurrentWeather from "../../components/CurrentWeather";



export default function Home () {
    const { cityInput, setCityInput } = useContext(InputContext);
    const{ forecast, setForecast, showForecast, setShowForecast, weatherCodes, setWeatherCodes } = useContext(ForecastContext);
    const styles = stylesFunction();
    const [loading, setLoading] = useState(false);

    async function pesquisar() {
        if(cityInput.length > 0){
            setLoading(true);
            const dailyForecast = await search(cityInput)
            if(dailyForecast){
                setWeatherCodes([...dailyForecast[1]]);
                setForecast([...dailyForecast[0]]);
                
                setShowForecast(true);
            }
            else{
                Alert.alert("Error", "Error fetching data! Please try again")
            }
        }else{
            Alert.alert("Error", "Please insert a city name")
        }
        setLoading(false);    
    }

    return(
        
        <View style={styles.container}>
            <Text style={styles.titulo}>GoWeather</Text>
            {!showForecast && <TextInput
            style={styles.inputArea}
            placeholder='Type a city name...'
            value={cityInput}
            onChangeText={(text) => setCityInput(text) }
            />}
            <ActivityIndicator size="large" animating={loading}/>
        {!showForecast && <View style={styles.btnContainer}>
            <InputButton title={"Search"} type={"Green"} action={() => {pesquisar()}} disabled={loading}/>
            <TouchableOpacity onPress={() => {Alert.alert("About", about)}} style={{alignItems: 'center'}}>
                <Text>About</Text>
            </TouchableOpacity>
        </View>}
        {showForecast &&
        <>
            <CurrentWeather />
            <Forecast 
                forecast={forecast}
                city={cityInput}
                weatherCodes={weatherCodes}
            />
        </>}    
        </View>
    );
}

const about = `
GoWeather 1.0 by Leonardo Ereno, 2024;
https://github.com/leoereno/go-weather

`