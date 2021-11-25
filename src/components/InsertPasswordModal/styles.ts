import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    background: {
        backgroundColor: theme.colors.turquoiseButtom
    },
    container: {
        paddingVertical: 100,
        alignItems: 'center'
    },
    mesage: {
        fontFamily: theme.fonts.title500,
        fontSize: 40
    }
})