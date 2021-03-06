import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Text, View, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { AccountButtom } from '../../components/AccountButtom';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { InsertPasswordModal } from '../../components/InsertPasswordModal';
import { LogoPlusName } from '../../components/LogoPlusName';
import api from '../../services/api';
import { styles } from './styles';
import { Tutorial } from '../../components/Modal/Tutorial'

interface IAccount {
    accountNumber: number,
    nick: string,
    user: string,
    balance: number
}

interface IUser {
    id: string,
    name: string
}

export function SelectBankAccount() {

    const navigation = useNavigation();

    const [tutorial, setTutorial] = useState(true);

    const [accounts, setAccounts] = useState<IAccount[]>([])
    const [user, setUser] = useState<IUser>({ id: "", name: "" })
    const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false)
    const [selectedAccount, setSelectedAccount] = useState("")
    const [selectedAccountNick, setNick] = useState("")

    useEffect(() => {
        if (user.name == "") {
            setUserInfo()
        }
        if (accounts.length == 0 && user.id != "") {
            api.get(`/accounts/user/${user.id}`)
                .then((response) => {
                    setAccounts(response.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [user])

    async function setUserInfo() {
        const userId = await AsyncStorage.getItem("userId")
        const userName = await AsyncStorage.getItem("userName")

        if (userId != null && userName != null) {
            setUser({
                id: userId,
                name: userName
            })
        } else {
            Alert.alert("Erro", "N??o foi poss??vel recuperar as informa????es do usu??rio")
            navigation.navigate('Login')
        }
    }

    async function authenticateAccount() {

        const password = await AsyncStorage.getItem("accountPassword")

        api.post(`/accounts/authenticate`,
            {
                accountNumber: `${selectedAccount}`,
                password: `${password}`
            })
            .then(async (response) => {
                await AsyncStorage.setItem("loggedAccount", selectedAccount)
                await AsyncStorage.setItem("loggedAccountNick", selectedAccountNick)
                handleHome()
            })
            .catch(err => {
                Alert.alert("Ops!", "A senha que voc?? inseriu estava errada!\nTente novamente")
            })
    }

    function handleHome() {
        navigation.navigate('Home'); //mudar para ir para Home quando estiver pronta
    }

    return (

        <Background>
            <LogoPlusName />

            <View style={styles.header}>
                <Text style={styles.title}>
                    Ol??,
                    <Text style={styles.title2}>
                        {" " + user.name}
                    </Text>
                </Text>
                <TouchableOpacity 
                    style={styles.newAccountButton}
                    onPress={() => {
                        navigation.navigate('CreateBankAccount')
                    }}
                >
                    <Text style={styles.btnTxt}>
                        Nova conta
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.contentScrollContainer}
                alwaysBounceVertical={true}
            >
                <View style={styles.container}>

                    {
                        accounts.length > 0 ?
                            accounts.map(account => {
                                let accountStr = account.accountNumber.toString().padStart(5, "0")

                                return (
                                    <AccountButtom
                                        key={account.accountNumber}
                                        account={accountStr}
                                        nick={account.nick}
                                        agency="00001"
                                        onPress={() => {
                                            setShowPasswordModal(true)
                                            setSelectedAccount(account.accountNumber.toString())
                                            setNick(account.nick.toString())
                                        }}
                                    />
                                )
                            }) :
                            <Text style={styles.title}>
                                Carregando...
                            </Text>
                    }
                </View>
            </ScrollView>

            <InsertPasswordModal
                show={showPasswordModal}
                callback={() => {
                    setShowPasswordModal(false)
                    authenticateAccount()
                }}
            />

            <Tutorial
            show={tutorial}
                close={() => setTutorial(false)}
                textTutorial = {
                    "Aqui temos a tela de sele????o de conta banc??ria, onde voc?? pode escolher entre as contas que possui.\n"+
                    "\nPara ser poss??vel identificar a conta que voc?? deseja selecionar, ?? poss??vel ter uma pr??via de algumas informa????es, tais como: [AG??NCIA], [CONTA] e [APELIDO].\n"+
                    "\nAo selecionar a conta que voc?? deseja acessar, poder?? realizar as funcionalidades das contas banc??rias como transfer??ncias baseadas exclsuivamente nas informa????es da conta escolida."                    
                }
                redirect=''
            />
        </Background>
    )

}