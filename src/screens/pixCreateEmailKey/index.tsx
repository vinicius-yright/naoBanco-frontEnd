import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useState } from 'react';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/core';
import { Modal } from '../Modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogoPlusName } from '../../components/LogoPlusName';
import { ScreenTitle } from '../../components/ScreenTitle';

export function PixCreateEmailKey() {

    const navigation = useNavigation();
    const [modal, setModal] = useState(false);
    var userIdForPayload = '';
    const [txtEmail, setEmail] = useState('');
    const [txtValor, setConfirmEmail] = useState('');


    async function pegarIdDaConta() {
        try {
            const userId = await AsyncStorage.getItem("userId");
            if (userId != null) {
                userIdForPayload = userId
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function pegaNumeroContaUsuario() {
        const response = await api.get(`accounts/user/${userIdForPayload}`)
        return response.data.user.id;
    }

    async function criarChaveEmail() {
        pegarIdDaConta();
        const response = await api.post("pixKeys/email",
            {
                accountNumber: pegaNumeroContaUsuario(),
                email: txtEmail
            })
            .then((response) => {
                console.log(response);
                pegaInformacoesSalvasUsuario();
                //     navigation.navigate('TelaDeConfirmacaoPIX');
            }, (error) => {
                console.log(error);
            });
    }

    return (
        <Background>
            <LogoPlusName />


            <View style={styles.container}>

                <ScreenTitle title="Criar Chaves PIX">
                </ScreenTitle>

                <View>
                    <Text style={styles.title2}>
                        Para criar uma chave PIX com um e-mail, {'\n'}
                        preencha os campos a seguir:
                    </Text>
                </View>

                <View>
                    <Text style={styles.subtitle}>
                        Email:
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        maxLength={30}
                        onChangeText={setEmail}
                    />

                    <Text style={styles.subtitle}>
                        Confirme o email:
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        maxLength={30}
                        onChangeText={setEmail}
                    />

                </View>

                <ButtonIcon
                    title="Criar"
                    activeOpacity={0.7}
                    onPress={criarChaveEmail}
                />
            </View>

        </Background>

    );
}