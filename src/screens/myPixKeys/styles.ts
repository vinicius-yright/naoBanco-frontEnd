import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        lineHeight: 20,
        margin:10,
        marginTop: -10,
    },
    botao1: {
        flex: 1,
        height: 50,
        backgroundColor: theme.colors.purpleGay,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    botao2: {
        flex: 1,
        height: 50,
        backgroundColor: theme.colors.purpleButton,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    botaoContainer: {
        flex: 1,
        flexDirection: 'row',
        bottom: -120
    },
    tituloBotao: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 17,
        textAlign: 'center'
    },
    emptySpace: {
        fontSize: 35,
        width: 56
    }
});