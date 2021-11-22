import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/core';
import { Tutorial } from '../../components/Modal/Tutorial.js';
import { useState } from 'react';


export function FirstAccess() {

    const navigation = useNavigation();
    const [tutorial, setTutorial] = useState(false);
    const [firstView, setFirstView] = useState(true);

    function handleCreateUser() {
        if (firstView){
            setTutorial(true) 
            setFirstView(false)
        }
        else{
            navigation.navigate('CreateUser');
        } 
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
                close={() => setTutorial(false)}
                textTutorial = {
                    "Toda vez que uma pop-up como esta aparecer, significa que é uma mensagem com informações importantes!\n\n"+
                    "Para que você compreenda, é necessário que leia com muita atenção!\n\n"+
                    "E se mesmo após vê-lâ você continuar com dúvidas, poderá acessar as configurações e reve-lás quando quiser!!\n\n"
                }
                redirect='CreateUser'
            />
        </Background>

    );
}