import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from './src/components/Background';

export default function App() {
  return (
    <Background>
      <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
    </Background>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
