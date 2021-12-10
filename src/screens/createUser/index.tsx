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

export function CreateUser() {

    const [firstView, setFirstView] = useState(false);
    const [tutorial, setTutorial] = useState(true);

    const navigation = useNavigation();
    var userId = ''

    const [txtName, setName] = useState('');
    const [txtEmail, setEmail] = useState('');
    const [txtPassword, setPassword] = useState('');
    const [txtPasswordC, setPasswordC] = useState('');

    async function persisteInformacoesUsuario() {
        try {
            await AsyncStorage.setItem('userName', txtName)
            await AsyncStorage.setItem('@email', JSON.stringify(txtEmail))
            await AsyncStorage.setItem('@password', JSON.stringify(txtPassword))
            await AsyncStorage.setItem('userId', (userId))
            await AsyncStorage.setItem('firstAccessOk', JSON.stringify("true"))
        } catch (error) {
            console.log(error);
        }
    }

    async function enviaInformacoes() {

        if (txtPassword != "" && txtName != "" && txtEmail != "") {
            if (txtPassword != txtPasswordC) {
                Alert.alert("Erro", "As senhas não batem!. Por favor, insira-as novamente.");
            } else {
                const response = await api.post("/user",
                    {
                        name: txtName,
                        email: txtEmail,
                        admin: true,
                        password: txtPassword
                    })
                    .then((response) => {
                        console.log(response);
                        userId = response.data.id
                        persisteInformacoesUsuario();
                        handleCreateBankAccount()
                    }, (error) => {
                        console.log(error);
                    });
            }
        } else {
            Alert.alert("Erro", "Os campos não podem estar vazios. Tente novamente.")
        }
    }

    function handleCreateBankAccount() {
        navigation.navigate('CreateBankAccount');
    }

    function redirectToPage() {
        if (firstView) {
            setTutorial(true)
            setFirstView(false)
        }
    }

    return (
        <Background>
            <LogoPlusName backToScreen='FirstAccess'/>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.subtitle}>
                            Qual é o seu nome?
                        </Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='default'
                            maxLength={15}
                            onChangeText={setName}
                        />

                        <Text style={styles.subtitle}>
                            Digite o seu e-mail:
                        </Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='default'
                            maxLength={50}
                            onChangeText={setEmail}
                        />
                        <Text style={styles.subtitle}>
                            Crie uma senha:
                        </Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='default'
                            secureTextEntry={true}
                            maxLength={30}
                            onChangeText={setPassword}
                        />
                        <Text style={styles.subtitle}>
                            Confirme a senha:
                        </Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='default'
                            secureTextEntry={true}
                            maxLength={30}
                            onChangeText={setPasswordC}
                        />
                    </View>

                    <View>
                        <ButtonIcon title="Criar sua Conta"
                            onPress={() => {
                                enviaInformacoes()
                                setFirstView(false)
                            }}
                        />
                    </View>
                </View>
                <Tutorial
                    show={tutorial}
                    textTutorial={
                        "Para continuar você precisará criar uma conta de usuário usando um nome de usuário e um e-mail real, pois será através dele que você acessará o seu perfil, onde serão seus dados 'bancários' da conta 'NãoBanco'.\n\n" +
                        "Mas lembre-se todos os processos bancários desse aplicativo são simulações e não tem valor real.\n\n" +
                        "Buscamos oferecer um exemplo interativo, assim será possível interagir com outras pessoas que também tenham uma conta 'NãoBanco'.\n\n"
                    }
                    redirect=''
                />
            </ScrollView>
        </Background>
    );
}