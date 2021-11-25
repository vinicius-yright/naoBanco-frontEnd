import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogoPlusName } from '../../components/LogoPlusName';

import { theme } from '../../global/styles/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Home() {

    recebeInformacoes();
    const navigation = useNavigation();
    var userIdForPayload = '';
    var nomePessoa = ' Nome da conta';
    var nomeConta = '';

    async function recebeInformacoes() {
        console.log("Conta logada: " + await AsyncStorage.getItem("loggedAccount"))
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
        //navigation.navigate('Login'); //mudar para ir para Home quando estiver pronta
    }

    function handlePix() {
        navigation.navigate('PixSelectOperation'); //mudar para ir para Home quando estiver pronta
    }

    return (

        <Background>
            <LogoPlusName>
            </LogoPlusName>

            <View style={styles.container}>
                <Text style={styles.saudacoes}>
                    Olá,
                    <Text style={styles.saudacoes}>
                        {nomePessoa}
                    </Text>

                </Text>

                <Text style={styles.linha}>
                    ______________________________________________________________
                </Text>

                <Text style={styles.title2}>
                    Meu saldo
                </Text>

                <Text style={styles.subtitle}>
                    R$ ********
                </Text>

                <Text style={styles.subtitle}>
                    Resumo da conta 

                </Text>
            </View>

            <View style={styles.bodyMainButton}>
                <TouchableOpacity
                    onPress={() => {
                        handleHome()
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
                            handleHome()
                        }}
                        style={styles.btnPrincipal}
                    >
                        <Text style={styles.btnTxt}>
                            Pagamentos
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            handleHome()
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
                        handleHome()
                    }}
                    style={styles.btnPrincipal}
                >
                    <Text style={styles.btnTxt}>
                        Tutoriais
                    </Text>
                </TouchableOpacity>
                
            </View>

            <View></View>
        </Background>
    )

}