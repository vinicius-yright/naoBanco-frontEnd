import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useState } from 'react';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/core';
import { Modal } from '../Modal';

export function CreateBankAccount() {

    const navigation = useNavigation();

    async function enviaInformacoes(){

    }
    function handleHome(){
        navigation.navigate('Login'); //mudar para ir para Home quando estiver pronta
    }

    const [txtName, setApelido] = useState('');
    const [txtSenhaBancaria, setSenhaBancaria] = useState('');
    const [txtSenhaBancariaC, setSenhaBancariaC] = useState('');

    return (
        <Background>
            <Image
                source={require('../../../assets/Logotipo.png')}
                style={styles.logoApp} />
            <View style={styles.container}>
                <Text style={styles.nomeApp}>
                    NãoBanco
                </Text>

                <Text style={styles.title}>
                    Criação de Conta Bancária
                    {`\n`}
                </Text>

                <Text style={styles.subtitle}>
                    Para criar uma conta Bancária Você
                    precisa dar um Apelido e uma senha 
                    {`\n`}
                </Text>

                <Text style={styles.subtitle}>
                    De um Apelido para a Conta:
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
                    style={styles.inputSenha}
                    keyboardType='number-pad'
                    secureTextEntry={true}
                    maxLength={6}
                    onChangeText={setSenhaBancaria}
                />

                <Text style={styles.subtitle}>
                    Confirme a senha:
                </Text>

                <TextInput
                    style={styles.inputSenha}
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
                            handleHome()
                        }}        
                    />
                </View>
            
            </View>
        </Background>
    )

}