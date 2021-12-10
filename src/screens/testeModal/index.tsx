import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Background } from '../../components/Background';
import { Modal } from '../Modal';
import { styles } from './styles';


export function TesteModal() {
  
  const [modal, setModal] = useState(false);

  return(
    <Background>
      <View style={styles.container}>
        <Text>Animated Modal RN</Text>
            
        <TouchableOpacity style={styles.button}
          onPress={() => setModal(true)}
        >
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