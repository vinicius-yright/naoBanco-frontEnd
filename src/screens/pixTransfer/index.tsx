//apenas design da pagina, falta conexão com api

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

export function PixTransfer() {

    const navigation = useNavigation();
    const [modal, setModal] = useState(false);
    var userIdForPayload = '';
    const [txtChave, setChave] = useState('');
    const [txtValor, setValor] = useState('');
    const [txtDescricao, setDescricao] = useState('');
    const [txtData, setData] = useState('');

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
        const response = await api.get(`/accounts/user/${userIdForPayload}`)
        return response.data.user.id;
    }

    async function transferirViaPix() {
        pegarIdDaConta();
        const response = await api.post("/transfers/pix",
            {
                sender: pegaNumeroContaUsuario(),
                receiver: txtChave,
                value: txtValor,
                message: txtDescricao
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

                <ScreenTitle title="Transferências PIX">
                </ScreenTitle>

                <View>
                    <Text style={styles.title2}>
                        Para realizar uma transferencia com PIX {'\n'}
                        preecha os campos a seguir:
                    </Text>
                </View>

                <View>
                    <Text style={styles.subtitle}>
                        Chave:
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        maxLength={30}
                        onChangeText={setChave}
                    />

                    <Text style={styles.subtitle}>
                        Valor:
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        maxLength={30}
                        onChangeText={setValor}
                    />

                    <Text style={styles.subtitle}>
                        Descrição:
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        maxLength={30}
                        onChangeText={setDescricao}
                    />

                </View>

                <ButtonIcon
                    title="Continuar"
                    activeOpacity={0.7}
                    onPress={transferirViaPix}
                />
            </View>

        </Background>

    );
}