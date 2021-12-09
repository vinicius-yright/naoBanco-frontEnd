//apenas design da pagina, falta conexão com api

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { LogoPlusName } from '../../components/LogoPlusName';
import { ScreenTitle } from '../../components/ScreenTitle';
import api from '../../services/api';
import { styles } from './styles';



export function PixTransferConfirmation({ route }: { route: any }) {


    const navigation = useNavigation();
    const [receiverNick, setReceiverNick] = useState<string>('')

    const valor = (parseInt(route.params.valor)/100).toFixed(2).toString().replace('.', ',')

    var loggedAccountForPayload = '';
    let newDate = new Date().toDateString();

    useEffect(() => {
        pegaInformacoesDestinatario()
        pegarIdDaConta()
    }, [receiverNick]);

    function cancelarTransferencia() {
        navigation.navigate('PixTransfer',);
    }

    async function pegaInformacoesDestinatario() {
        const pixKey = route.params.chave.toString().trim()
        await api.get(`/pixKeys/${pixKey}/info`)
            .then(res => {
                const nick = res.data.account.nick
                setReceiverNick(nick)
            })
            .catch(err =>{
                console.log(err.response.data)
                navigation.navigate('PixTransfer')
                Alert.alert("Ops!", "A chave que você inseriu não existe. Verifique a chave e tente novamente.")
            })
    }

    async function pegarIdDaConta() {
        try {
            const loggedAccount = await AsyncStorage.getItem("loggedAccount");
            if (loggedAccount != null) {
                loggedAccountForPayload = loggedAccount;
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function transferirViaPix() {
        await api.post("/transfers/pix",
            {
                sender: loggedAccountForPayload,
                receiver: route.params.chave,
                value: route.params.valor,
                message: route.params.mensagem
            })
            .then((response) => {
                Alert.alert("Sucesso!", "Transferência realizada");
                navigation.navigate("Home");
            }, (error) => {
                const errorMesage = error.response.data.error
                console.log("Erro: ", errorMesage);
                if(errorMesage == 'Sender has insufficient funds'){
                    Alert.alert("Ops!", "Você não tem saldo suficiente para essa transação!")
                }
            });
    }

    return (
        <Background>
            <LogoPlusName backToScreen='PixTransfer' />

            <View style={styles.container}>

                <ScreenTitle title="Transferências PIX">
                </ScreenTitle>

                <View>
                    <Text style={styles.title2}>
                        Confirme as informações de quem vai receber:
                    </Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.subtitle}>
                        Nome: {receiverNick}
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
                        Valor: R$ {valor}
                        <Text style={styles.subtitle2}> </Text>
                    </Text>

                    <Text style={styles.subtitle}>
                        Data do débito: {newDate}
                        <Text style={styles.subtitle2}> </Text>
                    </Text>
                </View>

                <View style={styles.btnContainer}>
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
            </View>

        </Background>

    );
}