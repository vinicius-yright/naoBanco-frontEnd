import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { LogoPlusName } from '../../components/LogoPlusName';
import { ScreenTitle } from '../../components/ScreenTitle';
import { useNavigation } from '@react-navigation/core';
import { Tutorial } from '../../components/Modal/Tutorial.js';

export function PixSelectOperation() {

    const navigation = useNavigation();
    const [tutorial, setTutorial] = useState(true);

    return (

        <Background>
            <LogoPlusName backToScreen='Home'>

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
            <Tutorial
                show={tutorial}
                textTutorial = {
                    "PIX(Pagamento Instantaneo Brasileiro) é uma modalidade de transações onde qualquer valor pode ser transferido de uma conta para outra em poucos segundos.\n"+
                    "\nPara identificar as contas é utilizado uma “Chave”, em bancos reais  as chaves podem ser: Email, Telefone, Aleatória ou o CPF."
                }
                redirect=''
            />
        </Background>
    )

}