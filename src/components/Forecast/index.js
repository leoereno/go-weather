import React from "react";
import { View, FlatList, Text, Touchable, TouchableOpacity } from "react-native";
import { styles } from './styles'
import HourCard from "../HourCard";
import ClearButton from "../ClearButton";

export default function Forecast ({forecast, city}){
    return(
        <View>
            <FlatList
                style={styles.forecastList}
                data={forecast}
                keyExtractor={(item, index) => index}
                renderItem={({item, index}) => <HourCard time={formatHour(index + 1)} temp={item}/>}
                ListHeaderComponent={<Text>{`Forecast for ${city} on ${dayString(new Date().getDay())}`}</Text>}
                contentContainerStyle={{justifyContent: 'center', paddingBottom: 150}}
                ListFooterComponent={<ClearButton text="Home"/>}
            />
        </View>  
    )
}

function dayString (day){
    switch(day){
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"
    }
}

const formatHour = (hour) => {
    if(String(hour).length == 1) return "0" + hour;
    return hour;
}