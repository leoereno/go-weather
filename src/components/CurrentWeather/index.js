import React, { useContext } from "react";
import { ForecastContext } from "../../contexts/ForecastContext";
import { StyleSheet, Text, View } from "react-native";
import { getEmoji } from "../../services/util";

export default function CurrentWeather(){
    const { forecast, weatherCodes } = useContext(ForecastContext);
    const hour = new Date().getHours();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{Math.round(forecast[hour])} ºC</Text>
            <Text style={styles.title}>{getEmoji(weatherCodes[hour])}</Text>
        </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        //borderBottomWidth: 0.5,
        //borderBottomColor: 'grey',
        alignItems: 'center',
        padding: 15,
        margin: 10
    },
    title: {
        fontSize: 24,
        margin: 2,
        fontWeight:'bold'
    }
})