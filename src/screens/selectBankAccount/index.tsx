import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { LogoPlusName } from '../../components/LogoPlusName';
import api from '../../services/api';
import { styles } from './styles';

export function SelectBankAccount() {

    const navigation = useNavigation();

    let accounts: string[] = [];

    const [nameState, setUser] = useState("")
    const [idState, setUserId] = useState("")
    const [accountsState, setAccounts] = useState(accounts)

    recebeInformacoes()

    useEffect(() => {
        if (!accounts.length) {
            setAccounts(accounts)
            console.log("Ta entrando aqui")
        }
    })

    async function recebeInformacoes() {
        try {
            const userId = "540d4ca6-2347-454c-9b81-8cda67ab629d" //await AsyncStorage.getItem("userId");
            const userName = "Teste"//await AsyncStorage.getItem("@name");
            if (userId != null && userName != null) {
                // setUser(userName)
                // setUserId(userId)
                console.log("Ta repetindo essa merda")
            }
        } catch (error) {
            console.log(error)
        }
        await api.get(`/accounts/user/${idState}`)
            .then((response) => {
                response.data.forEach((account: string) => {
                    accounts.push(account)
                })
            }, (error) => {
                console.log(error + " Deu ruim");
                accounts.push("Teste")
            });
    }

    function handleHome() {
        navigation.navigate('Home'); //mudar para ir para Home quando estiver pronta
    }

    return (

        <Background>
            <LogoPlusName>

            </LogoPlusName>
            <Text style={styles.title}>
                Olá,
                <Text>
                    {nameState}
                </Text>
            </Text>
            <View style={styles.container}>

                {
                    accountsState.map((account) => {
                        return (
                            <Text style={styles.title2}>
                                {account.nick.toString()}
                                {account.accountNumber.toString()}
                            </Text>
                        )
                    })
                }

                <Text style={styles.subtitle}>
                    Agência 0001 Conta
                </Text>


                <ButtonIcon title="Acessar Conta Bancária"
                    onPress={() => {

                        handleHome()
                    }}
                />
            </View>
        </Background>
    )

}