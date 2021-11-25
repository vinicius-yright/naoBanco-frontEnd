import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Background } from '../../components/Background';
import { LogoPlusName } from '../../components/LogoPlusName';
import { ScreenTitle } from '../../components/ScreenTitle';
import api from '../../services/api';
import { styles } from './styles';

export function MyPixKeys() {

    const navigation = useNavigation();

    const [ content, setContent ] = useState("Carregando...")

    useEffect(() => {
        getPixKeys()
    })
    
    function getPixKeys() {
        // const account = AsyncStorage.getItem("bankAccount");
        const account = "5"

        const res = api.get(`/pixKeys/account/${account}`)
            .then((res) => {
                let pixKeys = res.data
                let content = ""

                if(pixKeys.length){
                    for (let i = 0; i < pixKeys.length; i++) {
                        content += `Chave ${i + 1} (${pixKeys[i].type == 'random' ? 'aleatória' : 'email'}) \n`
                        content += `${pixKeys[i].key} \n\n`
                    }
                } else {
                    content = "Você ainda não possui chaves cadastradas."
                }
                setContent(content)
            }).catch(err => console.log(err));

        return res;
    }

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
                        {content}
                    </Text>
                </View>

            </View>
                <View style={styles.botaoContainer}>
                    <TouchableOpacity style={styles.botao1}
                        onPress={() => {
                            navigation.navigate("PixCreateEmailKey");
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
        </Background>
    )

}