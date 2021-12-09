import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
    },
    input: {
        fontSize: 17,
        height: 50,
        width: 330,
        margin: 11,
        padding: 10,
        backgroundColor: theme.colors.heading
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 17,
        textAlign: 'center',
        fontFamily: theme.fonts.title500,
        lineHeight: 25
    },
    btnEntrar: {
        marginTop: 20
    }
});