import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './src/components/Background';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';
import { Login } from './src/screens/login';

//import { CreateUser } from './src/screens/createUser';
//import { FirstAccess } from './src/screens/firstAccess';

export default function App() {

  let [fontsLoaded] = useFonts({
    Rajdhani_700Bold,
    Rajdhani_500Medium,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Background>
        <View>
          <StatusBar style="auto" />
        </View>
        <Routes />
      </Background>
    );
  }
}
