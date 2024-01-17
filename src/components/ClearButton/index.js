import React from "react";
import { useContext } from "react";
import { ForecastContext } from "../../contexts/ForecastContext";
import { InputContext } from "../../contexts/InputContext";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

export default function ClearButton({text}){
    const {setForecast, setShowForecast } = useContext(ForecastContext);
    const { setCityInput } = useContext(InputContext);
    return(
        <TouchableOpacity 
            onPress={() => {setForecast([]); setShowForecast(false); setCityInput('')}}
            style={styles.clearBtn}
        >
            <Text style={styles.clearBtnTxt}>{text}</Text>
        </TouchableOpacity>
    )
}