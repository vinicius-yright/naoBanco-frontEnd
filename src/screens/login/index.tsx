import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useState } from 'react';
import api from '../../services/api';

export function Login() {

    async function consulta() {
        const response = await api.get('')
        console.log(response);
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
                        E-mail
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        maxLength={30}
                        onChangeText={setName}
                    />
                    <Text style={styles.subtitle}>
                        Senha
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        maxLength={50}
                        onChangeText={setEmail}
                    />
                   
                </View>

                <View>
                    <ButtonIcon title="Entrar"
                        onPress={consulta}
                    />
                </View>
            </View>
        </Background>
    );
}