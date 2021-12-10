import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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

interface ITimeCourse {
    start: number,
    end: number
}

export function MyReceipts() {

    const navigation = useNavigation();
    const [tutorial, setTutorial] = useState(true);
    const [refresh, setRefresh] = useState<number>(0)
    const [transactions, setTransactions] = useState<ITransaction[]>([])
    const [loggedAccount, setAccount] = useState<string>('')

    const startState = new Date().setDate(new Date().getDate() - 5)
    const endState = new Date().getTime()

    const [timeCourse, setTimeCourse] = useState<ITimeCourse>({ start: startState, end: endState })

    useEffect(() => {
        getPixTransactions()
        if (refresh == 0) {
            setRefresh(1)
        }
    }, [timeCourse])

    function dateForPayload(days: number) {
        let start:number

        if(days == 0){
            start = new Date(0).getTime()
        } else {
            start = new Date().setDate(new Date().getDate() - days)
        }
        
        const end = new Date().getTime()

        setTimeCourse({ start, end })
    }

    async function getPixTransactions() {
        const account = await AsyncStorage.getItem("loggedAccount")
        setAccount(account)
        const res = await api.get(`/transactions/${account}/${timeCourse.start}/${timeCourse.end}`)
            .then((res) => {
                let transactionsArray = res.data
                sortTransaction(transactionsArray)
            }).catch(err => console.log(err.response.data));

        return res;
    }

    function sortTransaction(transaction: ITransaction[]) {
        const transactionSorted = transaction.sort((a, b) => {
            const completeDateA = a.created_at.split(' ')
            const completeDateB = b.created_at.split(' ')

            const timeA = completeDateA[1]
            const timeB = completeDateB[1]

            const dateA = completeDateA[0].split('/').reverse().join('-')
            const dateB = completeDateB[0].split('/').reverse().join('-')

            return new Date(`${dateB}T${timeB}`).getTime() - new Date(`${dateA}T${timeA}`).getTime()
        })
        setTransactions(transactionSorted)
    }

    return (
        <Background>
            <LogoPlusName backToScreen='PixSelectOperation' />
            <View style={styles.container}>
                <ScreenTitle title="Extrato PIX">
                </ScreenTitle>
            </View>

            <View style={styles.inputContainer}>
                <TouchableOpacity
                    style={styles.buttonStart}
                    activeOpacity={0.8}
                    onPress={() => {
                        dateForPayload(5)

                    }}>
                    <Text style={styles.btnText}>
                        5 dias
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonMiddle}
                    activeOpacity={0.8}
                    onPress={() => {
                        dateForPayload(15)
                    }}>
                    <Text style={styles.btnText}>
                        15 dias
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonMiddle}
                    activeOpacity={0.8}
                    onPress={() => {
                        dateForPayload(30)
                    }}>
                    <Text style={styles.btnText}>
                        30 dias
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonMiddle}
                    activeOpacity={0.8}
                    onPress={() => {
                        dateForPayload(60)
                    }}>
                    <Text style={styles.btnText}>
                        60 dias
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonEnd}
                    activeOpacity={0.8}
                    onPress={() => {
                        dateForPayload(0)
                    }}>
                    <Text style={styles.btnText}>
                        Início
                    </Text>
                </TouchableOpacity>
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
                                            Mensagem: {transaction.message}
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
                            <Text style={styles.btnText}>
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