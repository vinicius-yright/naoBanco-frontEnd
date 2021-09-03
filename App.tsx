import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './src/components/Background';
import { CreateUser } from './src/screens/createUser';
import { FirstAccess } from './src/screens/firstAccess';

export default function App() {
  return (
    <Background>
      <View>
        <StatusBar style="auto" />
      </View>

      <CreateUser></CreateUser>
    </Background>
  );
}
