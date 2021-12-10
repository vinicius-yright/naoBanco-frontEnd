import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    account: string,
    nick?: string,
    agency?: string
}

export function AccountButtom({ account, nick, agency, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <View style={styles.info}>
                <Text style={styles.title}>
                    Agência:
                </Text>
                <Text style={styles.description}>
                    {agency}
                </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>
                    Conta:
                </Text>
                <Text style={styles.description}>
                    {account}
                </Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>
                    Apelido:
                </Text>
                <Text style={styles.description}>
                    {nick}
                </Text>
            </View>

        </TouchableOpacity>
    );
}