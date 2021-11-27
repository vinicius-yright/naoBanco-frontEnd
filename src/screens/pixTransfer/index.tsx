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
import { Tutorial } from '../../components/Modal/Tutorial.js';

export function PixTransfer() {

    const navigation = useNavigation();
    const [modal, setModal] = useState(false);
    var userIdForPayload = '';
    var loggedAccountForPayload = '';
    const [txtChave, setChave] = useState('');
    const [txtValor, setValor] = useState('');
    const [txtDescricao, setDescricao] = useState('');
    const [txtData, setData] = useState('');
    const [tutorial, setTutorial] = useState(true);

    async function pegarIdDaConta() {
        try {
            const loggedAccount = await AsyncStorage.getItem("loggedAccount");
            if (loggedAccount != null) {
                loggedAccountForPayload = loggedAccount
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function transferirViaPix() {
        pegarIdDaConta();
        const response = await api.post("/transfers/pix",
            {
                sender: loggedAccountForPayload,
                receiver: txtChave,
                value: txtValor,
                message: txtDescricao
            })
            .then((response) => {
                console.log(response);
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
                        Chave do Destinatário:
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
                        Descrição (opcional):
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
            <Tutorial
                show={tutorial}
                textTutorial={
                    "Transferências via sistema PIX são bem diferentes das transferências convencionais: Não possuem nenhuma taxa e são feitas INSTANTÂNEAMENTE!\n" +
                    "Para realizar uma, são necessários os seguintes campos: [Chave do Destinatário], [Valor], [Descrição].\n" +
                    "No campo chave se insere a chave do destinatário que receberá sua transferência; " +
                    "No campo valor se insere a quantia que será transferida e na Descrição se insere uma mensagem opcional que será lida pela pessoa que receber sua transferência.\n"
                }
                redirect=''
            />

        </Background>

    );
}