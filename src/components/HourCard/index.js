import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default function HourCard({time, temp, weatherCode}) {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>🕐 {time}h</Text>
            <Text style={styles.text}>🌡  {Math.round(temp)}ºC</Text>
            <Text style={styles.text}>{getEmoji(weatherCode)}</Text>
        </View>
    )
}

function getEmoji(code){
    if(code === 0) return "☀";
    if(code <= 3 && code > 0) return "🌤";
    if(code >= 80) return "🌩";
    if(code >= 61 && code <= 65) return "🌧";
}