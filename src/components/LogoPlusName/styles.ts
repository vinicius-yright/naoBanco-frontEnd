import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    logoApp: {
        marginTop: 50,
        width:51,
        height:54,
        marginHorizontal:125,
        top: 1,
        bottom:20,
        
    },
    nomeApp: {
        color: theme.colors.heading,
        fontSize: 28,
        fontFamily: theme.fonts.title500,
        fontWeight:'bold',
        marginTop: -49,
        height:100,
        marginHorizontal:179,
        width:150,
        top: 1,
        bottom:20,
    },
    content: {
        flexDirection: 'row'
    },
    backButton: {
        position: "absolute",
        top: 55,
        left: 15,
    },
    backIcon: {
        width: 40,
        height: 40
    }
})