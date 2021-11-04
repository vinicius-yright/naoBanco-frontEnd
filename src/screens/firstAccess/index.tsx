import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/core';
import { ModalFirstAccess } from './Modal';
import { useState } from 'react';


export function FirstAccess() {

    const [modal, setModal] = useState(false);

    return (
        <Background>
            
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        Bem Vindo {`\n`}
                        ao {`\n`}
                        NãoBanco !$
                    </Text>
                </View>

                <ButtonIcon
                    title="Iniciar"
                    activeOpacity={0.7}
                    onPress={() => setModal(true)}
                />
            </View>
            <ModalFirstAccess
                show={modal}
                close={() => setModal(false)}

            />
        </Background>

    );
}