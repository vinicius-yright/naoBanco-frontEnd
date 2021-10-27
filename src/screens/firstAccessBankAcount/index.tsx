import React, { Children, ReactNode } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/core';

export function FirstAccessBankAccount() {

    const navigation = useNavigation();

     function handleCreateBankAccount(){
        navigation.navigate('CreateBankAccount');
     }

    return (
        <Background>
            <Image
            source={require('../../../assets/Logotipo.png')}
            style={styles.logoApp}/>
            <View style={styles.container}>
            <Text style={styles.nomeApp}>
                        NãoBanco 
                    </Text>
            
                <View> 
                    
                    <Text style={styles.subtitle}>
                    Você ainda não possui uma conta bancária. Clique no botão abaixo para criar a sua primeira!{`\n`}
                    </Text>
                </View>

                <View>
                    <ButtonIcon title="Criar 1ª Conta Bancária!"
                        onPress={() => {
                             handleCreateBankAccount() 
                        }}        
                    />
                </View>
            </View>
        </Background>
    );
}