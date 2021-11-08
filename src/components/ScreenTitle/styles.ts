import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        width:'90%',
        fontFamily: theme.fonts.title700,
        fontSize: 40,
        marginTop: -40,
        marginBottom: 20,
        color: 'white'
    }
})