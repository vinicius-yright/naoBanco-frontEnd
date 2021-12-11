import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, View } from 'react-native';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { LogoPlusName } from '../../components/LogoPlusName';
import { Tutorial } from '../../components/Modal/Tutorial.js';
import api from '../../services/api';
import { styles } from './styles';



export function CreateBankAccount() {

    const [tutorial, setTutorial] = useState(true);
    const [firstView, setFirstView] = useState(true);

    const navigation = useNavigation();
    var userIdForPayload = '';
    let newAccountNumber = ''

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
        if (txtName != "" && txtSenhaBancaria != "" && txtSenhaBancariaC != "") {
            if ((txtSenhaBancaria == txtSenhaBancariaC)) {
                await AsyncStorage.setItem("loggedAccountNick", txtName);

                await api.post("/accounts",
                    {
                        nick: txtName,
                        password: txtSenhaBancaria,
                        user: userIdForPayload
                    })
                    .then((response) => {
                        newAccountNumber = response.data.account_number.toString()
                        redirectToPage()
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                        Alert.alert("Ops!", "Você já possui uma conta com esse apelido!")
                    })
            } else {
                Alert.alert("Erro", "As senhas não estão iguais!")
            }
        } else {
            Alert.alert("Erro", "Preencha todos os campos.")
        }
    }
    async function redirectToPage() {
        await AsyncStorage.setItem("loggedAccount", newAccountNumber)
        navigation.navigate('Home');
    }
    return (
        <Background>
            <LogoPlusName backToScreen='SelectBankAccount'></LogoPlusName>
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
                        maxLength={15}
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
                        "[Senha] - 4 Dígitos Numéricos (entre 0-9), será utilizado para acessar a conta bancária.\n\n"+
                        "Alem das informações que você criar a sua conta terá:\n\n"+
                        "N° da Conta - É um numero identificador da Conta Bancária, sera gerado automaticamente e será utilizado para as transações financeiras.\n\n"+
                        "N° da Agência - É o identificador da agência em que a conta é criada, diferente dos bancos físicos, os bancos digitais por não possuírem uma agencia fisica utilizam o identificador 001\n\n"+
                        "Em Bancos Normais existem vários tipos de contas, sendo elas:\n\n"+
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