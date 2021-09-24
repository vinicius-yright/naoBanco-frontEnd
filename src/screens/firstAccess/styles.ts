import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        marginTop: 240,
        marginBottom: 225,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 60,
        textAlign: 'center',
        alignContent: 'center',
        fontFamily: theme.fonts.title700,
        lineHeight: 60
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
        fontFamily: theme.fonts.title500,
        lineHeight: 25
    }
});