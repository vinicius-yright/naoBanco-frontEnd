import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, Image, Text, View, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { LogoPlusName } from '../../components/LogoPlusName';
import { Tutorial } from '../../components/Modal/Tutorial.js';
import { styles } from './styles';

import disableVisibility from '../../../assets/disableVisibility.png'
import enableVisibility from '../../../assets/enableVisibility.png'
import api from '../../services/api';

export function Home() {

    const [tutorial, setTutorial] = useState(true);
    const [visible, setVisible] = useState<boolean>(false)
    const [balanceShown, setBalance] = useState<string>('******')
    const [contaNick, setNick] = useState<string>('Carregando...')

    useEffect(() => {
    }, [contaNick])

    recebeInformacoes();
    const navigation = useNavigation();
    var userIdForPayload = '';

    async function recebeInformacoes() {
        console.log("Conta logada: " + await AsyncStorage.getItem("loggedAccount"))
        try {
            const userId = await AsyncStorage.getItem("userId");
            const accountNick = await AsyncStorage.getItem("loggedAccountNick");
            if (userId != null && accountNick != null) {
                setNick(accountNick)
                userIdForPayload = userId
                console.log(contaNick, userIdForPayload)
            }
        } catch (error) {
            console.log(error)
        }
    }

    function handlePix() {
        navigation.navigate('PixSelectOperation'); //mudar para ir para Home quando estiver pronta
    }

    async function toggleBalance() {
        if (visible) {
            setVisible(false)
            setBalance("******")
        } else {
            const loggedAccount = await AsyncStorage.getItem('loggedAccount')
            const balance = await api.get(`accounts/${loggedAccount}/balance`)
                .then((res) => {
                    return (
                        (res.data.balance / 100).toFixed(2).toString()
                    )
                })
                .catch(err => {
                        console.log(err.response.data)
                        Alert.alert("Ops!", "Não foi possível recuperar seu saldo")
                    }
                )

            if(balance) {
                setBalance(balance)
            }
            
            setVisible(true)
        }
    }

    function renderVisibleButton() {
        let imgSource = visible ? disableVisibility : enableVisibility

        return (
            <Image
                source={imgSource}
                style={styles.visibilityButton}
            />)
    }

    return (

        <Background>
            <LogoPlusName backToScreen='FirstAccess'>
            </LogoPlusName>

            <View style={styles.container}>
                <Text style={styles.saudacoes}>
                    Olá,
                    <Text style={styles.saudacoes}>
                        {" " + contaNick}
                    </Text>

                </Text>

                <Text style={styles.linha}>
                    ______________________________________________________________
                </Text>

                <Text style={styles.title2}>
                    Meu saldo
                </Text>

                <View style={styles.balanceContainer}>
                    <Text style={styles.subtitle}>
                        R$ {balanceShown}
                    </Text>
                    <TouchableOpacity onPress={toggleBalance}>
                        {renderVisibleButton()}
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bodyMainButton}>
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert("WIP", "Essa funcionalidade ainda não foi implementada. Por favor aguarde.")
                    }}
                    style={styles.btnPrincipal}
                >
                    <Text style={styles.btnTxt}>
                        Transferência
                    </Text>
                </TouchableOpacity>

                <View >
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert("WIP", "Essa funcionalidade ainda não foi implementada. Por favor aguarde.")
                        }}
                        style={styles.btnPrincipal}
                    >
                        <Text style={styles.btnTxt}>
                            Pagamentos
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert("WIP", "Essa funcionalidade ainda não foi implementada. Por favor aguarde.")
                        }}
                        style={styles.btnPrincipal}
                    >
                        <Text style={styles.btnTxt}>
                            Cartão
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        handlePix()
                    }}
                    style={styles.btnPrincipal}
                >
                    <Text style={styles.btnTxt}>
                        PIX
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        Alert.alert("WIP", "Essa funcionalidade ainda não foi implementada. Por favor aguarde.")
                    }}
                    style={styles.btnPrincipal}
                >
                    <Text style={styles.btnTxt}>
                        Tutoriais
                    </Text>
                </TouchableOpacity>

            </View>

            <View></View>
            <Tutorial
                show={tutorial}
                textTutorial={
                    "Aqui na tela 'Home' ficarão as informações básicas sobre a conta bancária selecionada.\n\n" +
                    "Por exemplo:\n" +
                    "Na parte superior da tela você encontra o campo 'Meu Saldo', ele Mostra o saldo atual da sua conta 'NãoBanco', para vizualizar ou ocultar basta clicar no ícone em formato de olho.\n\n" +
                    "Você terá acessos rápidos para as funcionalidades abaixo de forma simplificada.\n\n" +
                    "Menu de Acessos Rápidos: 🏧 \n" +
                    "📥 Depósitos e Cobrança\n" +
                    "📤 Transferencias\n" +
                    "💸 Pagamentos\n" +
                    "🧾 Extratos\n" +
                    "💳 Cartões\n" +
                    "💵 PIX\n"
                }
                redirect=''
            />

        </Background>
    )

}