import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Modal } from '../Modal';
import { useState } from 'react';
import { Background } from '../../components/Background';

const [modal, setModal] = useState(false);

export function TesteModal() {
  return(
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Animated Modal RN</Text>
          
        <TouchableOpacity style={styles.button}>
          <Text>Open Modal</Text>
        </TouchableOpacity>
            
        <Modal 
          show={modal}
          close={() => setModal(false)}
        />
      
      </View>

    </Background>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9b59b6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 22
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop: 20
  }
})
