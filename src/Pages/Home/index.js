import React, { useContext, useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert, FlatList, Keyboard } from "react-native";
import { stylesFunction } from "./style";
import InputButton from "../../components/InputButton";
import { getCoordinates, getForecast, search } from "../../services/api";
import Forecast from "../../components/Forecast";
import { ForecastContext, ForecastProvider } from "../../contexts/ForecastContext";
import { InputContext } from "../../contexts/InputContext";



export default function Home () {
    //const [cityInput, setCityInput] = useState('');
    //const [forecast, setForecast] = useState([]);
    const { cityInput, setCityInput } = useContext(InputContext);
    const{ forecast, setForecast, showForecast, setShowForecast } = useContext(ForecastContext);
    const styles = stylesFunction();

    async function pesquisar() {
        if(cityInput.length > 0){
            const dailyForecast = await search(cityInput)
            if(dailyForecast){
                setForecast([...dailyForecast]);
                setShowForecast(true);
            }
            else{
                Alert.alert("Error fetching data! Please try again")
            }
        }else{
            Alert.alert("Insert a city name")
        }    
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
        { !showForecast && <View style={styles.btnContainer}>
            <InputButton title={"Go!"} type={"Green"} action={() => {pesquisar()}}/>
            <InputButton title={"Clear"} type={"Red"} action={() => {}}/>
        </View>}
        {showForecast &&
        <Forecast 
            forecast={forecast}
            city={cityInput}
        />}    
        </View>
    );
}