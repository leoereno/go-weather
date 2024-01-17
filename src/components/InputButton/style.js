import { StyleSheet } from "react-native"



export const stylesFunction = (type) => {
    return StyleSheet.create({
        button: {
            backgroundColor: type === "Green" ? "#33b249" : "#ED0800",
            borderRadius: 4,
            padding: 15,
            margin: 10
        }
    })
}
