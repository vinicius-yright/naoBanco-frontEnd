import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Modal, Text, View } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = {
    show: boolean,
    callback: () => void
}

export function InsertPasswordModal({show, callback, ...rest}:Props) {
    
    const [showState, setShow] = useState<boolean>()
    
    useEffect(() => {
        setShow(show)
    })

    return (
        <Modal
            visible={showState}
            animationType="slide"
            style={styles.background}
            // onDismiss={callback}
            onRequestClose={() => {
                setShow(false)
            }}
        >
            <View style={styles.container}>
                <Text style={styles.mesage}>
                    Insira a senha
                </Text>

                <CodeInput
                    secureTextEntry
                    codeLength={4}
                    keyboardType='numeric'
                    activeColor={theme.colors.primary}
                    inactiveColor={theme.colors.secondary100}
                    autoFocus={true}
                    inputPosition='center'
                    size={50}
                    containerStyle={{ marginTop: 30 }}
                    codeInputStyle={{ borderWidth: 2 }}
                    onFulfill={async (code:string) => {
                        await AsyncStorage.setItem('accountPassword', code)
                        setShow(false)
                        callback()
                    }}
                />
            </View>
        </Modal>
    );
}