import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { LogoPlusName } from '../../components/LogoPlusName';
import { Tutorial } from '../../components/Modal/Tutorial.js';
import { ScreenTitle } from '../../components/ScreenTitle';
import api from '../../services/api';
import { styles } from './styles';

interface IPixKey {
    key: string,
    type: string,
    account: number
}

export function MyPixKeys() {

    const navigation = useNavigation();
    const [tutorial, setTutorial] = useState(true);
    var loggedAccountForPayload = '';

    const [refresh, setRefresh] = useState<number>(0)
    const [pixKeys, setPixKeys] = useState<IPixKey[]>([])

    useEffect(() => {
        getPixKeys()
    }, [refresh])

    function verificaQtdChaves(callback: Function) {
        if (pixKeys.length >= 5) {
            Alert.alert("Ops!", "Você pode cadastrar no máximo 5 chaves por conta")
            return
        }

        callback()
    }

    async function getPixKeys() {
        const account = await AsyncStorage.getItem("loggedAccount")

        const res = await api.get(`/pixKeys/account/${account}`)
            .then((res) => {
                let pixKeys = res.data
                setPixKeys(pixKeys)
            }).catch(err => console.log(err.response.data));

        return res;
    }

    async function pegarIdDaConta() {
        try {
            const loggedAccount = await AsyncStorage.getItem("loggedAccount");
            if (loggedAccount != null) {
                loggedAccountForPayload = loggedAccount
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function criarChaveAleatoria() {
        await pegarIdDaConta();
        await api.post("pixKeys/random",
            {
                accountNumber: loggedAccountForPayload
            })
            .then((response) => {
                console.log(response);
                setRefresh(refresh + 1)
                Alert.alert("Sucesso!", "Chave PIX aleatória criada");
            }, (error) => {
                console.log(error);
            });
    }


    return (
        <Background>
            <LogoPlusName backToScreen='PixSelectOperation' />
            <View style={styles.container}>

                <ScreenTitle title="Minhas Chaves PIX">
                </ScreenTitle>

                <Text style={styles.subtitle}>
                    Cadastre suas chaves. Você pode cadastrar no máximo 5 chaves por conta.
                </Text>

            </View>

            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.contentScrollContainer}
                alwaysBounceVertical={true}
            >
                <View style={{ paddingVertical: 10 }} >
                    {
                        pixKeys.length > 0 ?
                            pixKeys.map((key, index) => {
                                const indexPlusOne = index + 1
                                const typePortuguese = key.type == 'random' ? 'aleatória' : 'email'

                                return (
                                    <View style={styles.keyContainer} key={index}>
                                        <Text style={styles.keyTitle}>
                                            Chave {indexPlusOne} ({typePortuguese})
                                        </Text>
                                        <Text style={styles.keyContent}>
                                            {key.key}
                                        </Text>
                                    </View>
                                )
                            })
                            :
                            <Text>
                                Você ainda não possui chaves cadastradas.
                            </Text>
                    }
                </View>
            </ScrollView>

            <View style={styles.botaoContainer}>
                <TouchableOpacity style={styles.botao1}
                    onPress={() => {
                        verificaQtdChaves(() => navigation.navigate("PixCreateEmailKey"))
                    }}>
                    <Text style={styles.tituloBotao}>
                        Email
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao2}
                    onPress={async () => {
                        verificaQtdChaves(async () => await criarChaveAleatoria())
                    }}>
                    <Text style={styles.tituloBotao}>
                        Aleatória
                    </Text>
                </TouchableOpacity>
            </View>

            <Tutorial
                show={tutorial}
                textTutorial={
                    "As tão faladas chaves PIX são definidas pelo Banco Central como 'apelidos' utilizados para identificar a sua conta.\n" +
                    "\nExistem 4 tipos de chaves PIX possíveis:\n" +
                    "• CPF ou CNPJ\n" +
                    "• E-mail\n" +
                    "• Número de telefone celular\n" +
                    "• Chave aleatória\n" +
                    "\nNo caso do nosso aplicativo usaremos apenas as chaves do tipo: e-mail ou aleatória"
                }
                redirect=''
            />
        </Background>
    )

}