import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Tutorial } from '../../components/Modal/Tutorial.js';
import { styles } from './styles';


export function FirstAccess() {

    const navigation = useNavigation();
    const [tutorial, setTutorial] = useState(false);

    function handleCreateUser() {
        navigation.navigate('CreateUser');
    }

    function handleNavigateLogin() {
        navigation.navigate('Login');
    }

    return (
        <Background>

            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        Bem Vindo {`\n`}
                        ao {`\n`}
                        NãoBanco !$
                    </Text>
                </View>

                <View>
                    <ButtonIcon
                        title="Crie aqui sua conta!"
                        activeOpacity={0.7}
                        onPress={() => handleCreateUser()}
                    />
                </View>

                <TouchableOpacity style={styles.botao}
                    onPress={() => { handleNavigateLogin() }}>
                    <Text style={styles.tituloBotao}>
                        Entrar
                    </Text>

                </TouchableOpacity>

            </View>
            <Tutorial
                show={tutorial}
                textTutorial = {
                    "Toda vez que uma mensagem como esta aparecer, leia com muita atenção!\n\n"+
                    "Isso significa que são informações importantes sobre os procedimentos bancários, ou sobre o aplicativo.\n\n"+
                    "Esse aplicativo (App 'NãoBanco') tem como objetivo ajudar as pessoas que tem dúvidas sobre bancos digitais, além de trazer informações relevantes, será possível fazer simulações de procedimentos bancários, como fazer um PIX.\n\n"
                }
                redirect=''
            />
        </Background>

    );
}