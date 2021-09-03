import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';


export function FirstAccess() {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Bem Vindo {`\n`}
                    ao {`\n`}
                    NãoBanco !$
                </Text>
            </View>

            <ButtonIcon title="Criar sua Conta" activeOpacity={0.7}/>
            
        </View>
    );
}