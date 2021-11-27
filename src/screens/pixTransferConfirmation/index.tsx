//apenas design da pagina, falta conexão com api

import React, { Component, FC } from 'react';
import { View, Text, TextInput, Image, Route } from 'react-native';
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



export function PixTransferConfirmation({ route }: { route: any }) {


    const navigation = useNavigation();
    const [modal, setModal] = useState(false);
    const [txtChave, setChave] = useState('');
    const [txtValor, setValor] = useState('');
    const [txtDescricao, setDescricao] = useState('');
    var userNameForScreen = '';
    var loggedAccountForPayload = '';
    let newDate = new Date().toDateString();
    console.log(newDate);

    function cancelarTransferencia() {
        navigation.navigate('PixTransfer',); 
    }

    async function pegarIdDaConta() {
        try {
            const loggedAccount = await AsyncStorage.getItem("loggedAccount");
            const userName = await AsyncStorage.getItem("userName");
            if (loggedAccount != null && userName != null) {
                loggedAccountForPayload = loggedAccount;
                userNameForScreen = userName;
                //MOSTRAR ESSE NOME NA TELA ME AJUDA MARCELO
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
                receiver: route.params.chave,
                value: route.params.valor,
                message: route.params.mensagem
            })
            .then((response) => {
                console.log(response);
                console.log("FAZER POPUP DE TRANSFERENCIA FEITA COM SUCESSO E VOLTAR PRA TELA HOME : )")
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
                        Confirme as informações de quem vai receber:
                    </Text>
                </View>

                <View>
                    <Text style={styles.subtitle}>
                        Nome: {userNameForScreen}
                        <Text style={styles.subtitle2}> </Text>
                    </Text>

                    <Text style={styles.subtitle}>
                        Instituição:
                        <Text style={styles.subtitle2}>  Não Banco !$</Text>
                    </Text>

                    <Text style={styles.subtitle}>
                        Chave: {route.params.chave}
                        <Text style={styles.subtitle2}>
                        </Text>
                    </Text>

                    <Text style={styles.subtitle}>
                        Valor: {route.params.valor}
                        <Text style={styles.subtitle2}> </Text>
                    </Text>

                    <Text style={styles.subtitle}>
                        Data do débito:{newDate}
                        <Text style={styles.subtitle2}> </Text>
                    </Text>
                </View>

                <ButtonIcon
                    title="Cancelar"
                    activeOpacity={0.7}
                    onPress={cancelarTransferencia}
                    style={styles.btnBoxCancelar}
                />

                <ButtonIcon
                    title="Continuar"
                    activeOpacity={0.7}
                    onPress={transferirViaPix}
                    style={styles.btnBoxContinuar}
                />
            </View>

        </Background>

    );
}