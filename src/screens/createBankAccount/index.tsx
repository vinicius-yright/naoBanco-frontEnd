import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useState } from 'react';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/core';
import { Modal } from '../Modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function CreateBankAccount() {

    const navigation = useNavigation();
    var userIdForPayload = '';


    async function enviaInformacoes() {
        try {
            const userId = await AsyncStorage.getItem("userId");
            if (userId != null) {
                userIdForPayload = userId
            }
        } catch (error) {
            console.log(error)
        }
        const response = await api.post("/accounts",
            {
                nick: txtName,
                password: txtSenhaBancaria,
                user: userIdForPayload})
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
                console.log(userIdForPayload, txtName, txtSenhaBancaria)
            });
    }
    function handleHome() {
        //navigation.navigate('Login'); //mudar para ir para Home quando estiver pronta
    }

    const [txtName, setApelido] = useState('');
    const [txtSenhaBancaria, setSenhaBancaria] = useState('');
    const [txtSenhaBancariaC, setSenhaBancariaC] = useState('');

    return (
        <Background>
            <Image
                source={require('../../../assets/Logotipo.png')}
                style={styles.logoApp} />
            <View style={styles.container}>
                <Text style={styles.nomeApp}>
                    NãoBanco
                </Text>

                <Text style={styles.title}>
                    Criação de Conta Bancária
                    {`\n`}
                </Text>

                <Text style={styles.subtitle}>
                    Para criar uma conta Bancária você
                    precisa criar um Apelido e uma senha
                    {`\n`}
                </Text>

                <Text style={styles.subtitle}>
                    Dê um Apelido para a Conta:
                </Text>

                <TextInput
                    style={styles.input}
                    keyboardType='default'
                    maxLength={30}
                    onChangeText={setApelido}
                />

                <Text style={styles.subtitle}>
                    Crie uma senha Numérica:
                </Text>

                <TextInput
                    style={styles.inputSenha}
                    keyboardType='number-pad'
                    secureTextEntry={true}
                    maxLength={6}
                    onChangeText={setSenhaBancaria}
                />

                <Text style={styles.subtitle}>
                    Confirme a senha:
                </Text>

                <TextInput
                    style={styles.inputSenha}
                    keyboardType='number-pad'
                    secureTextEntry={true}
                    maxLength={6}
                    onChangeText={setSenhaBancariaC}
                />
                <Text style={styles.subtitle}>
                    {`\n`}
                </Text>

                <View>
                    <ButtonIcon title="Criar Conta Bancária"
                        onPress={() => {
                            enviaInformacoes()
                            handleHome()
                        }}
                    />
                </View>

            </View>
        </Background>
    )

}