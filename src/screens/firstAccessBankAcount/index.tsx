import React, { Children, ReactNode } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/core';

export function FirstAccessBankAccount() {

    
    const navigation = useNavigation();

    async function consulta() {
        const response = await api.get('')
        console.log(response);
    }

   /*  function handleCreateBankAccount(){
        navigation.navigate('TesteModal');
    } */

    return (
        <Background>
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
                            consulta()
                            /* handleCreateBankAccount() */
                        }}        
                    />
                </View>
            </View>
        </Background>
    );
}