import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { LogoPlusName } from '../../components/LogoPlusName';
import api from '../../services/api';
import { styles } from './styles';

export function SelectBankAccount() {
    
    const navigation = useNavigation();

    const [ name, setUser ] = useState("")
    const [ id, setUserId ] = useState("")
    const [ nick, setNick ] = useState("")
    const [ account, setAccount ] = useState("")
    
    useEffect(() => {
        recebeInformacoes()
    })

    async function recebeInformacoes() {
        try {
            const userId = await AsyncStorage.getItem("userId");
            const userName = await AsyncStorage.getItem("@name");
            if (userId != null && userName != null) {
                setUser(userName)
                setUserId(userId)
                console.log(name, id)
            }
        } catch (error) {
            console.log(error)
        } 
        await api.get(`/accounts/user/${id}`)
            .then((response) => {
                setNick(response.data[0].nick);
                setAccount(response.data[0].accountNumber)
            }, (error) => {
                console.log(error);
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
                        {name}
                    </Text>
                </Text>
            <View style={styles.container}> 
                

                <Text style={styles.title2}>
                    {nick}
                </Text>

                <Text style={styles.subtitle}>
                    Agência 0001 Conta {account}
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