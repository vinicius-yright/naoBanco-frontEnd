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

interface ITransaction {
    created_at: string,
    senderAccount: number,
    receiverAccount: number,
    type: string,
    value: number,
    message: string
}

export function MyReceipts() {

    const navigation = useNavigation();
    const [tutorial, setTutorial] = useState(true);
    const [refresh, setRefresh] = useState<number>(0)
    const [transactions, setTransactions] = useState<ITransaction[]>([])
    const [loggedAccount, setAccount] = useState<string>('')

    let startDate = '2021-12-07'
    let endDate = '2021-12-09'

    useEffect(() => {
        if (refresh == 0) {
            getPixTransactions()
            setRefresh(1)
        }
    }, [transactions])

    async function getPixTransactions() {
        const account = '5' //await AsyncStorage.getItem("loggedAccount")
        setAccount(account)
        console.log("ta repetindo")
        const res = await api.get(`/transactions/${account}/${startDate}/${endDate}`)
            .then((res) => {
                let transactionsArray = res.data
                sortTransaction(transactionsArray)
            }).catch(err => console.log(err.response.data));

        return res;
    }

    function sortTransaction(transaction: ITransaction[]){
        const transactionSorted = transaction.sort((a, b) => {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        })

        setTransactions(transactionSorted)
    }

    async function getUserByAccount(accountNumber: number) {
        return await api.get(`/user/account/${accountNumber}`)
            .then(res => {
                return res.data.name
            })
            .catch(err => {
                console.log("Aqui: ", err.data)
            })
    }

    return (
        <Background>
            <LogoPlusName backToScreen='PixSelectOperation' />
            <View style={styles.container}>
                <ScreenTitle title="Extrato PIX">
                </ScreenTitle>
            </View>

            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.contentScrollContainer}
                alwaysBounceVertical={true}
            >
                <View style={{ paddingVertical: 10 }} >
                    {
                        transactions.length > 0 ?
                            transactions.map((transaction, index) => {
                                const sender = transaction.senderAccount.toString()
                                return (
                                    <View style={styles.keyContainer} key={index}>
                                        <Text style={styles.receiptTitle}>
                                            Transferência {sender == loggedAccount ? ' enviada' : ' recebida'}
                                        </Text>
                                        {sender == loggedAccount ?
                                            <Text style={styles.paid}>
                                                R$ {(transaction.value / 100).toFixed(2)}
                                            </Text>
                                            :
                                            <Text style={styles.received}>
                                                R$ {(transaction.value / 100).toFixed(2)}
                                            </Text>
                                        }
                                        <Text style={styles.type}>
                                            {transaction.created_at}
                                        </Text>
                                        <Text style={styles.type}>
                                            PIX
                                        </Text>
                                        <View
                                            style={styles.line}
                                        />
                                    </View>
                                )
                            })
                            :
                            <Text>
                                Você ainda não possui um histórico de transações.
                            </Text>
                    }
                </View>
            </ScrollView>

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