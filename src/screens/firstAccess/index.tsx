import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/core';
import { ModalFirstAccess } from './Modal';
import { useState } from 'react';


export function FirstAccess() {

    const navigation = useNavigation();
    const [modal, setModal] = useState(false);

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

                <ButtonIcon
                    title="Crie aqui sua conta!"
                    activeOpacity={0.7}
                    onPress={() => setModal(true)}
                />

                <TouchableOpacity style={styles.botao}
                    onPress={() => {
                        handleNavigateLogin()
                    }}>
                    <Text style={styles.tituloBotao}>
                        Entrar
                    </Text>

                </TouchableOpacity>

            </View>
            <ModalFirstAccess
                show={modal}
                close={() => setModal(false)}

            />
        </Background>

    );
}