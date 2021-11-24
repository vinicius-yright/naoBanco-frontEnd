import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: theme.colors.turquoiseButtom,
        borderColor: "white",
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 14,
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 5
    },
    info: {
        width: "100%",
        height: 25,
        flexDirection: "row"
    },
    title: {
        flex: 1,
        fontFamily: theme.fonts.title700,
        color: "white",
        fontSize: 22,
        textAlign: 'left'
    },
    description: {
        flex: 1,
        fontFamily: theme.fonts.title500,
        color: "white",
        fontSize: 22,
        textAlign: 'left'
    }
})