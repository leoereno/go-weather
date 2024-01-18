import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { getEmoji } from "../../services/util";
export default function HourCard({time, temp, weatherCode}) {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>🕐 {time}h</Text>
            <Text style={styles.text}>🌡  {Math.round(temp)}ºC</Text>
            <Text style={styles.text}>{getEmoji(weatherCode)}</Text>
        </View>
    )
}

