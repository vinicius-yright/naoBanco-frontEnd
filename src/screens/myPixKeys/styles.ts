import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    scrollContainer: {
        backgroundColor: theme.colors.secondary100,
        borderRadius: 14,
        borderStyle: 'solid',
        borderColor: theme.colors.heading,
        borderWidth: 1,
        alignContent: 'center',
        marginHorizontal: 15,
        height: "40%"
    },
    contentScrollContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
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
    keyContainer: {
        marginBottom: 20,
    },
    keyTitle: {
        color: theme.colors.heading,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        lineHeight: 20,
    },
    keyContent: {
        color: theme.colors.heading,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        lineHeight: 20,
        marginTop: 2
    },
    botao1: {
        flex: 1,
        height: 50,
        backgroundColor: theme.colors.purpleGay,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15
    },
    botao2: {
        flex: 1,
        height: 50,
        backgroundColor: theme.colors.purpleButton,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15
    },
    botaoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginTop: 20
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