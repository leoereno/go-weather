import React from "react";
import { TouchableOpacity, Text  } from "react-native";
import {stylesFunction} from './style'

export default function InputButton ({ title, type, action, disabled }) {

    const styles = stylesFunction(type);

    return (
        <TouchableOpacity
        onPress={() => {action()}}
        style={styles.button}
        disabled={disabled}
      >
        <Text>{title}</Text>
      </TouchableOpacity>
    )
}
