import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { LogoPlusName } from '../../components/LogoPlusName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

export function Login() {

    const navigation = useNavigation();

    let userId = ''
    let userName = ''

    async function navegacaoInteligente() {
        const response = await api.get(`accounts/user/${userId}`)
            .then((response) => {
                if(response.data.length) {
                    navigation.navigate('SelectBankAccount');
                } else {
                    navigation.navigate('FirstAccessBankAccount');
                }
            }, (error) => {
                console.log(error);
            });
        
    }

    async function persisteInformacoesUsuario() {
        try {
            await AsyncStorage.setItem('userId', (userId))
            await AsyncStorage.setItem('userName', (userName))
        } catch (error) {
            console.log(error);
        }
    }

    async function login() {
        await api.post("/login",
            {
                email: txtEmail,
                password: txtPassword
            })
            .then((response) => {
                userId = response.data.user.id
                userName = response.data.user.name
                persisteInformacoesUsuario();
                console.log(userId);
                navegacaoInteligente();
            }, (error) => {
                Alert.alert("Email e/ou senha incorretos.");
                console.log(error);
            });
    }

    const [txtEmail, setEmail] = useState('');
    const [txtPassword, setPassword] = useState('');

    return (
        <Background>

            <LogoPlusName backToScreen="FirstAccess">

            </LogoPlusName>
            <View style={styles.container}>
                <View>
                    <Text style={styles.subtitle}>
                        E-mail
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        maxLength={30}
                        onChangeText={setEmail}
                    />
                    <Text style={styles.subtitle}>
                        Senha
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        secureTextEntry={true}
                        maxLength={50}
                        onChangeText={setPassword}
                    />

                </View>

                <View style={styles.btnEntrar}>
                    <ButtonIcon title="Entrar"
                        onPress={login}
                    />
                </View>
            </View>
        </Background>
    );
}