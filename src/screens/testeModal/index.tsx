import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Modal } from '../Modal';
import { useState } from 'react';
import { Background } from '../../components/Background';

export function TesteModal() {

  const [modal, setModal] = useState(false);
  
  return(
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Animated Modal RN</Text>
          
        <TouchableOpacity style={styles.button}>
          <Text>Open Modal</Text>
        </TouchableOpacity>
            
        <Modal 
          show={modal}
          close={setModal(false)}
        />
      
      </View>

    </Background>
  );
}