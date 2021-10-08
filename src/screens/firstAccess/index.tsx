import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/core';


export function FirstAccess() {

    const navigation = useNavigation();

    function handleFirstAccess(){
        navigation.navigate('TesteModal');
    }

    return (
        <Background>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        Bem Vindo {`\n`}
                        ao {`\n`}
                        NãoBanco !$
                    </Text>
                </View>

                <ButtonIcon 
                    title="Iniciar" 
                    activeOpacity={0.7} 
                    onPress = {handleFirstAccess}
                />

            </View>
        </Background>
    );
}