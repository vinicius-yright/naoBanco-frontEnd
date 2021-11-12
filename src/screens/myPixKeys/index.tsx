import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Background } from '../../components/Background';
import { LogoPlusName } from '../../components/LogoPlusName';
import { ScreenTitle } from '../../components/ScreenTitle';
import { useNavigation } from '@react-navigation/core';
import { ButtonIcon } from '../../components/ButtonIcon';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function MyPixKeys() {

    const navigation = useNavigation();

    async function getPixKeys() {

        const account = AsyncStorage.getItem("bankAccount");
        const res = await api.get(`/pixKeys/account/${account}`)
                        .then((res) => {
                            return new Array(JSON.parse(res.toString()))
                        }).catch(err => console.log(err));

        return res;
    }

    // useEffect(() => {
    //     const pixKeys = getPixKeys();

    //     if(pixKeys.length)
    // }) 

    return (

        <Background>
            <LogoPlusName />
            <View style={styles.container}>

                <ScreenTitle title="Minhas Chaves PIX">
                </ScreenTitle>

                <Text style={styles.subtitle}>
                    Cadastre suas chaves, você pode ter 1 chave email e 1 chave aleatória:
                </Text>

                <View style={{ paddingVertical: 60 }} >
                    <Text style={styles.subtitle}>
                        Chave 1 (email): {`\n`}
                        XXXXXXXXXXXXXXXXX{`\n\n`}

                        Chave 2 (Aleatória): {`\n`}
                        XXXXXXXXXXXXXXXX{`\n`}XXXXXXXXXXXXXXXXX{`\n`}XXXXXXXXXXXXXXXXXX

                    </Text>
                </View>

                <View style={styles.botaoContainer}>
                    <TouchableOpacity style={styles.botao1}
                        onPress={() => {
                        }}>
                        <Text style={styles.tituloBotao}>
                            Email
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.emptySpace} />

                    <TouchableOpacity style={styles.botao2}
                        onPress={() => {
                        }}>
                        <Text style={styles.tituloBotao}>
                            Aleatória
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Background>
    )

}