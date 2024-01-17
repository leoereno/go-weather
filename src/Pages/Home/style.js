import { StyleSheet } from "react-native";

export const stylesFunction = () => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor:'#62BFED',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
      },
      titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        margin: 20,
      },
      subtitulo: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 20,
      },
      inputArea: {
        fontSize: 16,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
      },
      btnContainer: {
        flexDirection: "row",
        margin: 5
      },
      forecastList: {
        textAlign: 'center'
      }
      
    });
  }