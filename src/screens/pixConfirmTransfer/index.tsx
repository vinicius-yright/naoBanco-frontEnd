import React, { Component } from 'react';
import { View, Text, TextInput, Image} from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useState } from 'react';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/core';
import { Modal } from '../Modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogoPlusName } from '../../components/LogoPlusName';

export function PixConfirmTransfer() {

    recebeInformacoes();
    const navigation = useNavigation();
    var userIdForPayload = '';
    var nomePessoa = '';
    var nomeConta = '';

    async function recebeInformacoes() {
        try {
            const userId = await AsyncStorage.getItem("userId");
            const userName = await AsyncStorage.getItem("@name");
            if (userId != null && userName != null) {
                nomePessoa = userName
                userIdForPayload = userId
                console.log(nomePessoa, userIdForPayload)
                window.location.reload();
            }
        } catch (error) {
            console.log(error)
        }
        /* const response = await api.get("/accounts/user/" + userIdForPayload)
            .then((response) => {
                nomePessoa = response.data[0].nick;
                console.log(response);
            }, (error) => {
                console.log(error);
                console.log(userIdForPayload, txtName, txtSenhaBancaria)
            }); */
    }
    function handleHome() {
        navigation.navigate('Home'); //mudar para ir para Home quando estiver pronta
    }

    const [txtName, setApelido] = useState('');
    const [txtSenhaBancaria, setSenhaBancaria] = useState('');
    const [txtSenhaBancariaC, setSenhaBancariaC] = useState('');

    return (
        
        <Background>
            <LogoPlusName>

            </LogoPlusName>
            <Text style={styles.title}>
                    Olá,
                    <Text>
                        {nomePessoa}
                    </Text>
                </Text>
            <View style={styles.container}> 
                

                <Text style={styles.title2}>
                    Apelido da conta
                </Text>

                <Text style={styles.subtitle}>
                    Agência XXXX Conta XXXXX-X
                </Text>

                
                    <ButtonIcon title="Acessar Conta Bancária"
                        onPress={() => {
                            handleHome()
                        }}
                    />
            </View>
        </Background>
    )

}