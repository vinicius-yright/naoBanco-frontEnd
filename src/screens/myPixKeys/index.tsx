import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Background } from '../../components/Background';
import { LogoPlusName } from '../../components/LogoPlusName';
import { ScreenTitle } from '../../components/ScreenTitle';
import api from '../../services/api';
import { styles } from './styles';
import { Tutorial } from '../../components/Modal/Tutorial.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function MyPixKeys() {

    const navigation = useNavigation();
    const [tutorial, setTutorial] = useState(true);
    var loggedAccountForPayload = '';

    const [ content, setContent ] = useState("Carregando...")
    const [ refresh, setRefresh ] = useState<number>(0)

    useEffect(() => {
        getPixKeys()
    }, [refresh])
    
    async function getPixKeys() {
        const account = await AsyncStorage.getItem("loggedAccount")

        const res = await api.get(`/pixKeys/account/${account}`)
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
                        onPress={async () => {
                            await criarChaveAleatoria();
                        }}>
                        <Text style={styles.tituloBotao}>
                            Aleatória
                        </Text>
                    </TouchableOpacity>
                </View>

                <Tutorial
                show={tutorial}
                textTutorial = {
                    "As tão faladas chaves PIX são definidas pelo Banco Central como 'apelidos' utilizados para identificar a sua conta.\n"+
                    "\nExistem 4 tipos de chaves PIX possíveis:\n"+
                    "• CPF ou CNPJ\n"+
                    "• E-mail\n"+
                    "• Número de telefone celular\n"+
                    "• Chave aleatória\n"+
                    "\nNo caso do nosso aplicativo usaremos apenas as chaves do tipo: e-mail ou aleatória"
                }
                redirect=''
            />
        </Background>
    )

}