import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps &{
    backToScreen?: string;
}

export function LogoPlusName({backToScreen, ...rest}: Props) {
    const navigation = useNavigation();

    return (
        <View style={styles.content}>
            <TouchableOpacity 
                style={styles.backButton}
                onPress={async () => {
                    if(backToScreen == "FirstAccess"){
                        await AsyncStorage.clear()
                    }
                    navigation.navigate(backToScreen)
                }}
            >
                <Image source={require('../../../assets/backIcon.png')} style={styles.backIcon} />
            </TouchableOpacity>
            <View>
                <Image
                    source={require('../../../assets/Logotipo.png')}
                    style={styles.logoApp} />
                <Text style={styles.nomeApp}>
                    NãoBanco
                </Text>
            </View>
        </View>
    );
}