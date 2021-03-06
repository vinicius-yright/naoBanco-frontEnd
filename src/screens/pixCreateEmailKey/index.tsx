import React, { Component } from 'react';
import { View, Text, TextInput, Image, Alert } from 'react-native';
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
import { Tutorial } from '../../components/Modal/Tutorial'

export function PixCreateEmailKey() {

    const navigation = useNavigation();
    const [modal, setModal] = useState(false);
    var userIdForPayload = '';
    var loggedAccountForPayload = '';
    const [txtEmail, setEmail] = useState('');
    const [txtEmailC, setConfirmEmail] = useState('');
    const [tutorial, setTutorial] = useState(false);


    async function pegarIdDaConta() {
        try {
            const userId = await AsyncStorage.getItem("userId");
            const loggedAccount = await AsyncStorage.getItem("loggedAccount");
            if (userId != null && loggedAccount != null) {
                userIdForPayload = userId
                loggedAccountForPayload = loggedAccount
            }
        } catch (error) {
            console.log(error)
        }
    }


    async function criarChaveEmail() {
        pegarIdDaConta();

        if (txtEmail == "" || txtEmailC == "") {
            if (txtEmail == txtEmailC) {
                const response = await api.post("pixKeys/email",
                    {
                        accountNumber: loggedAccountForPayload,
                        email: txtEmail
                    })
                    .then((response) => {
                        console.log(response);
                        navigation.navigate('PixSelectOperation');
                    }, (error) => {
                        console.log(error);
                    });
            } else {
                Alert.alert("Erro", "Os e-mails n??o batem!. Por favor, insira-os novamente.")
            }
        } else {
            Alert.alert("Erro", "Preencha todos os campos e tente novamente.")
        }

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
                        maxLength={50}
                        onChangeText={setEmail}
                    />

                    <Text style={styles.subtitle}>
                        Confirme o email:
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        maxLength={50}
                        onChangeText={setConfirmEmail}
                    />

                </View>

                <ButtonIcon
                    title="Criar"
                    activeOpacity={0.7}
                    onPress={criarChaveEmail}
                />
            </View>
            <Tutorial
                show={tutorial}
                textTutorial={
                    "Agora voc?? ir?? criar uma chave do Pix com base no seu e-mail !\n\n" +
                    "Normalmente, ?? poss??vel cadastrar um e-mail por conta banc??rio, n??o sendo poss??vel ou recomendado cadastr??-lo em outro banco.\n\n" +
                    "Mas como esse aplicativo ?? apenas para aprendizado, voc?? pode cadastrar qualquer e-mail (V??lidos ou n??o).\n" +
                    "Por??m vale lembrar, que ele poder?? ser usado para receber transfer??ncias banc??rias do N??oBanco, de outro usu??rio que tamb??m tenha esse aplicativo instalado.\n\n" +
                    "A chave pix por e-mail ?? uma boa forma de receber dep??sitos banc??rios sem precisar compartilhar os seus dados banc??rios.\n"
                }
                redirect=''
            />

        </Background>

    );
}