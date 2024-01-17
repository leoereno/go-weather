import { StyleSheet } from "react-native";

export const stylesFunction = () => {
    return StyleSheet.create({
      container: {
        backgroundColor:'#62BFED',
        alignItems: 'center',
        justifyContent: 'center',
      },
      titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
      },
      subtitulo: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 20,
      },
      inputArea: {
        fontSize: 16
      },
      btnContainer: {
        flexDirection: "row"
      },
      forecastList: {
        textAlign: 'center'
      }
      
    });
  }