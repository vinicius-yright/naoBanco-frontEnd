import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import api from '../../services/api';

export function Login() {

    const navigation = useNavigation();

    async function login() {
        const response = await api.post("/login", 
            {email: txtEmail,
            password: txtPassword})
        .then((response) => {
            console.log(response);
            navigation.navigate('FirstAccessBankAccount');
          }, (error) => {
            console.log(error);
          });
    }

    const [txtEmail, setEmail] = useState('');
    const [txtPassword, setPassword] = useState('');

    return (
        <Background>
            <View style={styles.container}>
                <View>
                    <Text style={styles.subtitle}>
                        E-mail
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        maxLength={30}
                        onChangeText={setEmail}
                    />
                    <Text style={styles.subtitle}>
                        Senha
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        maxLength={50}
                        onChangeText={setPassword}
                    />
                   
                </View>

                <View>
                    <ButtonIcon title="Entrar"
                        onPress={login}
                    />
                </View>
            </View>
        </Background>
    );
}