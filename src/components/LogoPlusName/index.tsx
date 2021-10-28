import React from 'react';
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';



export function LogoPlusName({ ...rest }) {
    return (
        <View>
            <Image
                source={require('../../../assets/Logotipo.png')}
                style={styles.logoApp} />
                <Text style={styles.nomeApp}>
                    NãoBanco
                </Text>
        </View>
    );
}