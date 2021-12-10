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
        height: "100%",
        marginVertical: 20
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
        margin: 10,
        marginTop: -10,
    },
    keyContainer: {
        marginBottom: 20,
    },
    receiptTitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: theme.fonts.roboto700,
        lineHeight: 15,
    },
    paid: {
        color: '#FF4040',
        fontSize: 15,
        textAlign: 'center',
        fontFamily: theme.fonts.roboto400,
        lineHeight: 15,
        marginTop: 2,
        fontWeight: 'bold'
    },
    received: {
        color: '#7CFC00',
        fontSize: 15,
        textAlign: 'center',
        fontFamily: theme.fonts.roboto400,
        lineHeight: 15,
        marginTop: 2,
        fontWeight: 'bold'
    },
    type: {
        color: theme.colors.heading,
        fontSize: 12,
        textAlign: 'center',
        fontFamily: theme.fonts.roboto300,
        lineHeight: 12,
        marginTop: 2,
        fontWeight: 'bold'
    },
    line: {
        marginTop: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    }
});