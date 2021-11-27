//apenas design da pagina, falta conexão com api

import React, { Component, FC } from 'react';
import { View, Text, TextInput, Image, Route } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useState } from 'react';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/core';
import { Modal } from '../Modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogoPlusName } from '../../components/LogoPlusName';
import { ScreenTitle } from '../../components/ScreenTitle';



export function PixTransferConfirmation() {

    

    const navigation = useNavigation();
    const [modal, setModal] = useState(false);

    const [txtChave, setChave] = useState('');
    const [txtValor, setValor] = useState('');
    const [txtDescricao, setDescricao] = useState('');
    const [txtData, setData] = useState('');

    return (
        <Background>
            <LogoPlusName />


            <View style={styles.container}>
                
                <ScreenTitle title="Transferências PIX">
                </ScreenTitle>

                <View>
                    <Text style={styles.title2}>
                        Confirme as informações de quem vai receber:
                    </Text>
                </View>

                <View>
                    <Text style={styles.subtitle}>
                        Nome: 
                        <Text style={styles.subtitle2}> </Text>
                    </Text>

                    <Text style={styles.subtitle}>
                        Instituição:
                        <Text style={styles.subtitle2}>  Não Banco !$</Text>
                    </Text>
                    
                    <Text style={styles.subtitle}>
                        Chave:
                        <Text style={styles.subtitle2}>
                        </Text>
                    </Text>

                    <Text style={styles.subtitle}>
                        Valor:
                        <Text style={styles.subtitle2}> </Text>
                    </Text>

                    <Text style={styles.subtitle}>
                        Data do débito:
                        <Text style={styles.subtitle2}> </Text>
                    </Text>
                </View>

                <ButtonIcon
                    title="Cancelar"
                    activeOpacity={0.7}
                    onPress={() => setModal(true)}
                    style={styles.btnBoxCancelar}
                />

                <ButtonIcon
                    title="Continuar"
                    activeOpacity={0.7}
                    onPress={() => setModal(true)}
                    style={styles.btnBoxContinuar}
                />
            </View>

        </Background>

    );
}