import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Button from './src/components/InputButton';
import Home from './src/Pages/Home';
import { ForecastProvider } from './src/contexts/ForecastContext';
import { InputProvider } from './src/contexts/InputContext';



function App(){
  return(
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style='auto'/>
      <ForecastProvider>
        <InputProvider>
          <Home />
        </InputProvider>
      </ForecastProvider>     
    </SafeAreaView>
  );
}




export default App;
