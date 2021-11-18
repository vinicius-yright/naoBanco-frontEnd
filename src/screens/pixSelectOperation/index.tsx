import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { LogoPlusName } from '../../components/LogoPlusName';
import { ScreenTitle } from '../../components/ScreenTitle';
import { useNavigation } from '@react-navigation/core';

export function PixSelectOperation() {

    const navigation = useNavigation();

    return (

        <Background>
            <LogoPlusName>

            </LogoPlusName>
            <View style={styles.container}>

                <ScreenTitle title="Transações PIX">
                </ScreenTitle>

                <Text style={styles.description}>
                    Crie e apague suas chaves PIX
                </Text>

                <ButtonIcon title="Minhas chaves"
                    onPress={() => {
                         navigation.navigate('MyPixKeys')
                    }}
                />

                <Text style={styles.emptySpace}>
                </Text>

                <Text style={styles.description}>
                    Realize transferencias e pagamentos utilizando uma chave PIX
                </Text>

                <ButtonIcon title="Transferências"
                    onPress={() => {
                        navigation.navigate('PixTransfer')
                    }}
                />

                <Text style={styles.emptySpace}>
                </Text>

                <Text style={styles.description}>
                    Consulte o histórico de seus recebimentos e pagamentos
                </Text>

                <ButtonIcon title="Extrato PIX"
                    onPress={() => {
                        // navigation.navigate('PixExtract')
                    }}
                />
            </View>
        </Background>
    )

}