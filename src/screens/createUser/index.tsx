import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useState } from 'react';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal } from '../Modal';


export function CreateUser() {

    const navigation = useNavigation();

    async function persisteInformacoesUsuario() {  
        try {    
            await AsyncStorage.setItem('@name', txtName)  
            await AsyncStorage.setItem('@email', txtEmail)
            await AsyncStorage.setItem('@password', txtPassword)
        } catch (error) {   
             console.log(error);
        }
    }

    async function enviaInformacoes() {
        const response = await api.post("/user", 
            {name: txtName,
            email: txtEmail,
            admin: true,
            password: txtPassword})
        .then((response) => {
            console.log(response);
            persisteInformacoesUsuario();
          }, (error) => {
            console.log(error);
          });
    }

    function handleCreateBankAccount(){
        navigation.navigate('Login');
    }


    const [txtName, setName] = useState('');
    const [txtEmail, setEmail] = useState('');
    const [txtPassword, setPassword] = useState('');
    const [txtPasswordC, setPasswordC] = useState('');

    

    return (
        <Background>
            <View style={styles.container}>
                <View>
                    <Text style={styles.subtitle}>
                        Qual é o seu nome?
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        maxLength={30}
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
                            handleCreateBankAccount()
                        }}        
                    />
                </View>
            </View>
        </Background>
    );
}