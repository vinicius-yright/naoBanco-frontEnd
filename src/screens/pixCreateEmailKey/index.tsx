import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { LogoPlusName } from '../../components/LogoPlusName';
import { Tutorial } from '../../components/Modal/Tutorial';
import { ScreenTitle } from '../../components/ScreenTitle';
import api from '../../services/api';
import { styles } from './styles';

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
        await pegarIdDaConta();

        if (txtEmail != "" || txtEmailC != "") {
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
                        console.log(error.response.data);
                    });
            } else {
                Alert.alert("Erro", "Os e-mails não batem!. Por favor, insira-os novamente.")
            }
        } else {
            Alert.alert("Erro", "Preencha todos os campos e tente novamente.")
        }

    }

    return (
        <Background>
            <LogoPlusName backToScreen='MyPixKeys'/>


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
                    "Agora você irá criar uma chave do Pix com base no seu e-mail !\n\n" +
                    "Normalmente, é possível cadastrar um e-mail por conta bancário, não sendo possível ou recomendado cadastrá-lo em outro banco.\n\n" +
                    "Mas como esse aplicativo é apenas para aprendizado, você pode cadastrar qualquer e-mail (válido ou não).\n\n" +
                    "Porém, vale lembrar que ele poderá ser usado para receber transferências bancárias do NãoBanco, de outro usuário que também tenha esse aplicativo instalado.\n\n" +
                    "A chave pix 'e-mail' é uma boa forma de receber depósitos bancários sem precisar compartilhar os seus dados bancários.\n"
                }
                redirect=''
            />

        </Background>

    );
}