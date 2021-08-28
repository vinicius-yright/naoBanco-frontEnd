import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';

export function CreateUser() {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.subtitle}>
                    Qual é o seu nome?
                </Text>
                <TextInput
                    style={styles.input}
                    keyboardType='default'
                    maxLength={30}
                />
                <Text style={styles.subtitle}>
                    Digite o seu e-mail:
                </Text>
                <TextInput
                    style={styles.input}
                    keyboardType='default'
                    maxLength={50}
                />
                <Text style={styles.subtitle}>
                    Crie uma senha:
                </Text>
                <TextInput
                    style={styles.input}
                    keyboardType='default'
                    secureTextEntry={true}
                    maxLength={30}
                />
                <Text style={styles.subtitle}>
                    Confirme a senha:
                </Text>
                <TextInput
                    style={styles.input}
                    keyboardType='default'
                    secureTextEntry={true}
                    maxLength={30}
                />
            </View>

            <View>
                <ButtonIcon title="Criar sua Conta"></ButtonIcon>
            </View>
        </View>
    );
}