import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default function HourCard({time, temp}) {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>🕐 {time}h</Text>
            <Text style={styles.text}>🌡  {temp}ºC</Text>
        </View>
    )
}