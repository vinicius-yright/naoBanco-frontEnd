import React, { useState, useEffect } from 'react'
import { Button, Text, View, ScrollView, StyleSheet, Portal, Provider} from "react-native";
import Modal from "react-native-modal";
import GradientButton from 'react-native-gradient-buttons';
import {theme} from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/core';

export const Tutorial = ({show, textTutorial, redirect}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function Redirect() {
    toggleModal();
    if(redirect !='')
    {navigation.navigate(redirect);}
  }

  useEffect(() => { show ? toggleModal() : toggleModal() }, [show])

  return (
    <View styles={{ flex: 1 }}>
      

      <Modal 
      isVisible={isModalVisible}
      animationIn={"bounceInLeft"}
      animationInTiming={800}
      animationOut={"bounceOutRight"}
      animationOutTiming={600}
      style={{ margin: 20 }}
      backdropColor={"white"}
      backdropOpacity={0.80}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      propagateSwipe
      
      >
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <View style={{ flex: 1 }}>
                <Text style={styles.TextModal}> {textTutorial} </Text>
                <GradientButton
                style={{ marginVertical: 8 }}
                textSyle={{ fontSize: 20 }}      
                gradientDirection="diagonal"
                height={45}
                width={350}
                radius={35}
                blueMarine
                impact
                impactStyle='Light'
                onPressAction={() => Redirect()}
              >
                🏃‍♂️... Continuar 🏃‍♀️...
              </GradientButton>
            </View>
        </ScrollView>
      </Modal>
    </View>
  );
}

//export default ModalTester;

const styles = StyleSheet.create({

  TextModal: {
    marginTop: 10,
    textAlign: 'justify',
    alignItems: 'center',
    fontSize: 22,
    fontFamily: theme.fonts.title700
  }

})

  