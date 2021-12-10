//apenas design da pagina, falta conexão com api

import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { LogoPlusName } from '../../components/LogoPlusName';
import { Tutorial } from '../../components/Modal/Tutorial.js';
import { ScreenTitle } from '../../components/ScreenTitle';
import { styles } from './styles';

export function PixTransfer() {

    const navigation = useNavigation();
    const [modal, setModal] = useState(false);
    const [txtChave, setChave] = useState('');
    const [txtValor, setValor] = useState<number>(0);
    const [txtDescricao, setDescricao] = useState('');
    const [txtData, setData] = useState('');
    const [tutorial, setTutorial] = useState(true);

    function handleTransferConfirm() {

        if (txtChave != "" && txtValor != 0) {
            navigation.navigate('PixTransferConfirmation', {
                chave: txtChave,
                valor: (txtValor * 100).toString(),
                mensagem: txtDescricao

            });
        } else {
            Alert.alert("Erro", "Preencha os campos obrigatórios antes de continuar.")
        }
    }

    return (
        <Background>
            <LogoPlusName backToScreen='PixSelectOperation' />

            <View style={styles.container}>

                <ScreenTitle title="Transferências PIX">
                </ScreenTitle>

                <View>
                    <Text style={styles.title2}>
                        Para realizar uma transferencia com PIX {'\n'}
                        preecha os campos a seguir:
                    </Text>
                </View>

                <View  style={{ marginTop: 15, marginBottom: 50 }}>
                    <Text style={styles.subtitle}>
                        Chave do Destinatário:
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        onChangeText={(content) => {
                            setChave(content.trim())
                        }}
                    />

                    <Text style={styles.subtitle}>
                        Valor:
                    </Text>

                    <CurrencyInput
                        value={txtValor}
                        style={styles.input}
                        prefix="R$ "
                        delimiter="."
                        separator=","
                        onChangeValue={setValor}
                        minValue={0}
                        precision={2}
                    />

                    <Text style={styles.subtitle}>
                        Descrição (opcional):
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        maxLength={30}
                        onChangeText={setDescricao}
                    />

                </View>

                <ButtonIcon
                    title="Continuar"
                    activeOpacity={0.7}
                    onPress={handleTransferConfirm}
                />
            </View>
            <Tutorial
                show={tutorial}
                textTutorial={
                    "Transferências via sistema PIX são bem diferentes das transferências convencionais: Não possuem nenhuma taxa e são feitas INSTANTÂNEAMENTE!\n\n" +
                    "Para realizar uma, são necessários os seguintes campos: [Chave do Destinatário], [Valor], [Descrição].\n\n" +
                    "No campo chave se insere a chave do destinatário que receberá sua transferência.\n" +
                    "No campo valor se insere a quantia que será transferida.\n" +
                    "E na Descrição se insere uma mensagem opcional que será lida pela pessoa que receber sua transferência.\n"
                }
                redirect=''
            />

        </Background>

    );
}