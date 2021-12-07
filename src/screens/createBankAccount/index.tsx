import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Alert, ScrollView } from 'react-native';

import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Tutorial } from '../../components/Modal/Tutorial.js';
import { LogoPlusName } from '../../components/LogoPlusName';


export function CreateBankAccount() {

    const [tutorial, setTutorial] = useState(true);
    const [firstView, setFirstView] = useState(true);

    const navigation = useNavigation();
    var userIdForPayload = '';

    const [txtName, setApelido] = useState('');
    const [txtSenhaBancaria, setSenhaBancaria] = useState('');
    const [txtSenhaBancariaC, setSenhaBancariaC] = useState('');

    async function enviaInformacoes() {

        try {
            const userId = await AsyncStorage.getItem("userId");
            if (userId != null) {
                userIdForPayload = userId
            }
        } catch (error) {
            console.log(error)
        }
        if (txtSenhaBancaria == txtSenhaBancariaC) {
            if (setApelido == undefined) {
                const response = await api.post("/accounts",
                    {
                        nick: txtName,
                        password: txtSenhaBancaria,
                        user: userIdForPayload
                    })

                    .then((response) => {
                        console.log(response);
                        redirectToPage()
                    }, (error) => {
                        console.log(error);
                        console.log(userIdForPayload, txtName, txtSenhaBancaria)
                    });
            } else {
                Alert.alert("Erro", "Apelido precisa estar vazio")
            }
        } else {
            Alert.alert("Erro", "As senhas não batem!. Por favor, insira-as novamente.")
        }
    }
    function redirectToPage() {
        navigation.navigate('Home');
    }
    return (
        <Background>
            <LogoPlusName></LogoPlusName>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={styles.container}>

                    <Text style={styles.title2}>
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
                        style={styles.input}
                        keyboardType='number-pad'
                        secureTextEntry={true}
                        maxLength={6}
                        onChangeText={setSenhaBancaria}
                    />

                    <Text style={styles.subtitle}>
                        Confirme a senha:
                    </Text>
                    <TextInput
                        style={styles.input}
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
                            }}
                        />
                    </View>
                </View>
                <Tutorial
                    show={tutorial}
                    textTutorial = {
                        "Agora você deverá criar uma Conta Bancária, com esta conta você poderá simular as transações e aprender mais sobre cada uma.\n\n"+
                        "Voce devera criar para a sua conta:\n"+
                        "[Apelido] - Para facilitar a Identificação de multiplas contas por você.\n"+
                        "[Senha] - 4 Digitos Numéricos 0-9 , será utilizado para acessar a conta bancária.\n\n"+
                        "Alem das informações que você criar a sua conta terá:\n\n"+
                        "N° da Conta - É um numero identificador da Conta Bancária, sera gerado automaticamente e será utilizado para as transações financeiras.\n\n"+
                        "N° da Agência - É o identificador da agência em que a conta é criada, diferente dos bancos físicos, os bancos digitais por não possuirem uma agencia fisica utilizam o identificador 001\n\n"+
                        "Em Bancos Normais existem vários tipos de contas, sendo elas:\n"+
                        "Corrente - Tipo de conta mais comun, permite a realização de várias transações, mas costuman cobrar uma taxa fixa mensal.\n\n"+
                        "Poupança - Conta que rende juros mensais, não cobram taxas, mas possuem algumas limitações.\n\n"+
                        "Pagamentos - Conta para os bancos Digitais, possuem as mesmas funcionalidades que uma conta corrente.\n\n"+
                        "Investimentos - Conta para serviços especiais como compra e venda de Ações, titulos do tesouro e afins.\n\n"+
                        "Salário - Modalidade de conta mais simples, permite apenas compras com cartão de débito e limita os saques.\n"
                    }
                    redirect=''
                />
            </ScrollView>
        </Background>
    )
}