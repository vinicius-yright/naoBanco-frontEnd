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
        marginVertical: 10
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
    },
    inputContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: "4%",
        marginTop: 20
    },
    buttonStart: {
        height: 50,
        width: "20%",
        backgroundColor: theme.colors.purpleGay,
        borderTopLeftRadius: 14,
        borderBottomLeftRadius: 14,
        alignItems: 'center',
        borderColor: theme.colors.heading,
        borderWidth: 1.5,
    },
    buttonMiddle: {
        height: 50,
        width: "20%",
        backgroundColor: theme.colors.purpleGay,
        alignItems: 'center',
        borderColor: theme.colors.heading,
        borderWidth: 1.5
    },
    buttonEnd: {
        height: 50,
        width: "20%",
        backgroundColor: theme.colors.purpleGay,
        borderTopRightRadius: 14,
        borderBottomRightRadius: 14,
        alignItems: 'center',
        borderColor: theme.colors.heading,
        borderWidth: 1.5
    },
    btnText: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 10
    }
});